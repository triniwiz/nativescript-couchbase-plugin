import {
  Common,
  ReplicatorBase,
  Query,
  QueryMeta,
  QueryLogicalOperator,
  QueryComparisonOperator
} from './couchbase-plugin.common';
import * as types from 'tns-core-modules/utils/types';
declare var CBLDatabase,
  CBLMutableDocument,
  CBLURLEndpoint,
  CBLReplicatorConfiguration,
  CBLReplicatorType,
  CBLBasicAuthenticator,
  CBLReplicator,
  CBLQueryExpression,
  CBLQueryOrdering,
  CBLQueryBuilder,
  CBLReplicatorActivityLevel,
  CBLQueryDataSource,
  CBLQuerySelectResult,
  CBLQueryMeta;
export class Couchbase extends Common {
  constructor(databaseName: string) {
    super(databaseName);
    this.ios = CBLDatabase.alloc().initWithNameError(databaseName);
  }

  createDocument(data: Object, documentId?: string) {
    let doc;
    if (documentId) {
      doc = CBLMutableDocument.alloc().initWithID(documentId);
    } else {
      doc = CBLMutableDocument.alloc().init();
    }

    const keys = Object.keys(data);
    for (let key of keys) {
      const item = data[key];
      doc.setValueForKey(item, key);
    }
    this.ios.saveDocumentError(doc);
    return doc.id;
  }
  getDocument(documentId: string): any {
    const doc = this.ios.documentWithID(documentId);
    if (doc) {
      let obj = {};
      const keys = doc.keys;
      const size = keys.count;
      for (let i = 0; i < size; i++) {
        const key = keys.objectAtIndex(i);
        const value = doc.valueForKey(key);
        const newValue = {};
        newValue[key] = value;
        obj = Object.assign(obj, newValue);
      }
      return obj;
    }
    return null;
  }
  updateDocument(documentId: string, data: any) {
    const original = this.ios.documentWithID(documentId);
    const newDoc = original.toMutable();
    const keys = Object.keys(data);
    for (let key of keys) {
      const item = data[key];
      newDoc.setValueForKey(item, key);
    }
    this.ios.saveDocumentError(newDoc);
  }
  deleteDocument(documentId: string) {
    const doc = this.ios.documentWithID(documentId);
    return this.ios.deleteDocumentError(doc);
  }
  destroyDatabase() {
    return this.ios.delete();
  }
  createPullReplication(
    remoteUrl: string,
    username?: string,
    password?: string
  ) {
    const url = NSURL.alloc().initWithString(remoteUrl);
    const targetEndpoint = CBLURLEndpoint.alloc().initWithURL(url);
    const replConfig = CBLReplicatorConfiguration.alloc().initWithDatabaseTarget(
      this.ios,
      targetEndpoint
    );
    replConfig.replicatorType = CBLReplicatorType.kCBLReplicatorTypePull;

    if (username && password) {
      replConfig.authenticator = CBLBasicAuthenticator.alloc().initWithUsernamePassword(
        username,
        password
      );
    }

    const replicator = CBLReplicator.alloc().initWithConfig(replConfig);

    return new Replicator(replicator);
    /*
replicator.addChangeListener((change:CBLReplicatorChange)=>{
  //"Error code: %ld", change.status.error.code
});
*/
  }
  createPushReplication(
    remoteUrl: string,
    username?: string,
    password?: string
  ) {
    const url = NSURL.alloc().initWithString(remoteUrl);
    const targetEndpoint = CBLURLEndpoint.alloc().initWithURL(url);
    const replConfig = CBLReplicatorConfiguration.alloc().initWithDatabaseTarget(
      this.ios,
      targetEndpoint
    );
    replConfig.replicatorType = CBLReplicatorType.kCBLReplicatorTypePush;

    if (username && password) {
      replConfig.authenticator = CBLBasicAuthenticator.alloc().initWithUsernamePassword(
        username,
        password
      );
    }

    const replicator = CBLReplicator.alloc().initWithConfig(replConfig);

    return new Replicator(replicator);
  }
  addDatabaseChangeListener(callback: any) {
    this.ios.addChangeListener((change: any) => {
      if (callback && typeof callback === 'function') {
        const ids = [];
        const documentIds = change.documentIDs;
        const size = documentIds.count;
        for (let i = 0; i < size; i++) {
          const item = documentIds[i];
          ids.push(item);
        }
        callback(ids);
      }
    });
  }

  query(query: Query = { select: [] }) {
    const items = [];
    let select = [];
    let from;
    let join = null;
    let where;
    let groupBy = null;
    let orderBy = null;
    let limit = null;
    let having = null;
    if (!query.select || query.select.length === 0) {
      select.push(CBLQuerySelectResult.all());
    } else {
      query.select.forEach(item => {
        if (item === QueryMeta.ID) {
          select.push(CBLQueryMeta.id);
        } else {
          select.push(CBLQueryExpression.property(item));
        }
      });
    }

    if (query.from) {
      const db = new Couchbase(query.from);
      from = CBLQueryDataSource.database(db.ios);
    } else {
      from = CBLQueryDataSource.database(this.ios);
    }

    let nativeQuery = null;
    if (query.where) {
      for (let item of query.where) {
        if (item === QueryLogicalOperator.AND) {
          if (!nativeQuery) break;
        } else if (item === QueryLogicalOperator.OR) {
          if (!nativeQuery) break;
        } else {
          if (item) {
            switch (item.comparison as QueryComparisonOperator) {
              case 'equalTo':
                nativeQuery = CBLQueryExpression.property(
                  item.property
                ).equalTo(CBLQueryExpression.value(item.value));
                break;
              case 'add':
                break;
              case 'between':
                break;
              case 'collate':
                break;
              case 'divide':
                break;
              case 'greaterThan':
                nativeQuery = CBLQueryExpression.property(
                  item.property
                ).greaterThan(CBLQueryExpression.value(item.value));
                break;
              case 'greaterThanOrEqualTo':
                nativeQuery = CBLQueryExpression.property(
                  item.property
                ).greaterThanOrEqualTo(CBLQueryExpression.value(item.value));
                break;
              case 'in':
                const inArray = [];
                if (Array.isArray(item.value)) {
                  for (let exp of item.value) {
                    inArray.push(CBLQueryExpression.value(exp));
                  }
                } else {
                  inArray.push(CBLQueryExpression.value(item.value));
                }
                nativeQuery = CBLQueryExpression.property(item.property).in(
                  inArray
                );
                break;
              case 'is':
                nativeQuery = CBLQueryExpression.property(item.property).is(
                  CBLQueryExpression.value(item.value)
                );
                break;
              case 'isNot':
                nativeQuery = CBLQueryExpression.property(item.property).isNot(
                  CBLQueryExpression.value(item.value)
                );
                break;
              case 'isNullOrMissing':
                nativeQuery = CBLQueryExpression.property(
                  item.property
                ).isNullOrMissing();
                break;
              case 'lessThan':
                nativeQuery = CBLQueryExpression.property(
                  item.property
                ).lessThan(CBLQueryExpression.value(item.value));
                break;
              case 'lessThanOrEqualTo':
                nativeQuery = CBLQueryExpression.property(
                  item.property
                ).lessThanOrEqualTo(CBLQueryExpression.value(item.value));
                break;
              case 'like':
                nativeQuery = CBLQueryExpression.property(item.property).like(
                  CBLQueryExpression.value(item.value)
                );
                break;
              case 'modulo':
                nativeQuery = CBLQueryExpression.property(item.property).modulo(
                  CBLQueryExpression.value(item.value)
                );
                break;
              case 'multiply':
                nativeQuery = CBLQueryExpression.property(
                  item.property
                ).multiply(CBLQueryExpression.value(item.value));
                break;

              case 'notEqualTo':
                nativeQuery = CBLQueryExpression.property(
                  item.property
                ).notEqualTo(CBLQueryExpression.value(item.value));
                break;

              case 'notNullOrMissing':
                nativeQuery = CBLQueryExpression.property(
                  item.property
                ).notNullOrMissing();
                break;
              case 'regex':
                nativeQuery = CBLQueryExpression.property(item.property).regex(
                  CBLQueryExpression.value(item.value)
                );
                break;
            }
          }
        }
      }
    }

    if (query.groupBy) {
      if (query.groupBy.length > 0) {
        groupBy = [];
      }
      for (let prop of query.groupBy) {
        groupBy.push(CBLQueryExpression.property(prop));
      }
    }
    if (query.order) {
      if (query.order.length > 0) {
        orderBy = [];
      }
      for (let item of query.order) {
        switch (item.direction) {
          case 'desc':
            orderBy.push(CBLQueryOrdering.property(item.property).descending());
            break;
          default:
            orderBy.push(CBLQueryOrdering.property(item.property).ascending());
            break;
        }
      }
    }

    if (query.limit && typeof query.limit === 'number') {
      limit = CBLQueryLimit.limit(CBLQueryExpression.value(query.limit));
    }

    let queryBuilder = CBLQueryBuilder.selectFromJoinWhereGroupByHavingOrderByLimit(
      select,
      from,
      join,
      nativeQuery,
      groupBy,
      having,
      orderBy,
      limit
    );

    const result = queryBuilder.execute().allResults();
    const size = result.count;
    for (let i = 0; i < size; i++) {
      const item = result.objectAtIndex(i);
      const keys = item.keys;
      const keysSize = keys.count;
      const obj = {};
      for (let keyId = 0; keyId < keysSize; keyId++) {
        const key = keys.objectAtIndex(keyId);
        const nativeItem = item.valueForKey(key);
        if (types.getClass(nativeItem) === 'CBLDictionary') {
          const cblKeys = nativeItem.keys;
          const cblKeysSize = cblKeys.count;
          for (let cblKeysId = 0; cblKeysId < cblKeysSize; cblKeysId++) {
            const cblKey = cblKeys.objectAtIndex(cblKeysId);
            obj[cblKey] = nativeItem.valueForKey(cblKey);
          }
        }
      }
      items.push(obj);
    }
    return items;
  }
}
export class Replicator extends ReplicatorBase {
  constructor(replicator: any) {
    super(replicator);
  }
  start() {
    this.replicator.start();
  }
  stop() {
    this.replicator.stop();
  }
  isRunning() {
    return (
      this.replicator.status.activity ===
      CBLReplicatorActivityLevel.kCBLReplicatorBusy
    );
  }
  setContinuous(isContinuous: boolean) {
    this.replicator.config.continuous = isContinuous;
  }
}
