import {
    Common,
    Query,
    QueryComparisonOperator,
    QueryLogicalOperator,
    QueryMeta,
    ReplicatorBase
} from './couchbase-plugin.common';
import * as types from 'tns-core-modules/utils/types';

export {
    Query, QueryMeta, QueryArrayOperator, QueryComparisonOperator, QueryLogicalOperator, QueryOrderItem, QueryWhereItem
}from './couchbase-plugin.common';

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

    inBatch(batch: () => void) {
        const errorRef = new interop.Reference();
        this.ios.inBatchUsingBlock(errorRef, batch);
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
            this.serialize(item, doc, key);
        }
        this.ios.saveDocumentError(doc);
        return doc.id;
    }

    private fromISO8601UTC(date: string) {
        const dateFormatter = NSDateFormatter.new();
        dateFormatter.dateFormat = 'yyyy-MM-dd\'T\'HH:mm:ss.SSSZ';
        return dateFormatter.dateFromString(date);
    }

    private serializeObject(item, object: any, key) {
        if (item === null) {
            return;
        }

        switch (typeof item) {
            case 'object':
                if (item instanceof Date) {
                    object.setDateForKey(this.fromISO8601UTC(item.toISOString()), key);
                    return;
                }

                if (Array.isArray(item)) {
                    const array = CBLMutableArray.new();
                    item.forEach((data) => {
                        this.serializeArray(data, array);
                    });
                    object.setArrayForKey(array, key);
                    return;
                }

                const nativeObject = CBLMutableDictionary.new();
                Object.keys(item).forEach((itemKey) => {
                    const obj = item[itemKey];
                    this.serializeObject(obj, nativeObject, itemKey);
                });
                object.setDictionaryForKey(nativeObject, key);
                break;
            case 'number':
                if (this.numberIs64Bit(item)) {
                    if (this.numberHasDecimals(item)) {
                        object.setDoubleForKey(item, key);
                    } else {
                        object.setLongLongForKey(item, key);
                    }
                } else {
                    if (this.numberHasDecimals(item)) {
                        object.setFloatForKey(item, key);
                    } else {
                        object.setIntegerForKey(item, key);
                    }
                }
                break;
            case 'boolean':
                object.setBooleanForKey(item, key);
                break;
            default:
                object.setValueForKey(item, key);
        }
    }

    private serializeArray(item, array: any) {
        if (item === null) {
            return;
        }

        switch (typeof item) {
            case 'object':
                if (item instanceof Date) {
                    array.addDate(this.fromISO8601UTC(item.toISOString()));
                    return;
                }

                if (Array.isArray(item)) {
                    const nativeArray = CBLMutableArray.new();
                    item.forEach((data) => {
                        this.serializeArray(data, nativeArray);
                    });
                    array.addArray(nativeArray);
                    return;
                }

                const object = CBLMutableDictionary.new();
                Object.keys(item).forEach((itemKey) => {
                    const obj = item[itemKey];
                    this.serializeObject(obj, object, itemKey);
                });
                array.addDictionary(object);
                break;
            case 'number':
                if (this.numberIs64Bit(item)) {
                    if (this.numberHasDecimals(item)) {
                        array.addDouble(item);
                    } else {
                        array.addLongLong(item);
                    }
                } else {
                    if (this.numberHasDecimals(item)) {
                        array.addFloat(item);
                    } else {
                        array.addInteger(item);
                    }
                }
                break;
            case 'boolean':
                array.addBoolean(item);
                break;
            default:
                array.addValue(item);
        }
    }

    private serialize(item, doc: any, key) {
        if (item === null) {
            return;
        }

        switch (typeof item) {
            case 'object':
                if (item instanceof Date) {
                    doc.setDateForKey(this.fromISO8601UTC(item.toISOString()), key);
                    return;
                }

                if (Array.isArray(item)) {
                    const array = CBLMutableArray.new();
                    item.forEach((data) => {
                        this.serializeArray(data, array);
                    });
                    doc.setArrayForKey(array, key);
                    return;
                }

                const object = CBLMutableDictionary.new();
                Object.keys(item).forEach((itemKey) => {
                    const obj = item[itemKey];
                    this.serializeObject(obj, object, itemKey);
                });
                doc.setDictionaryForKey(object, key);
                break;
            case 'number':
                if (this.numberIs64Bit(item)) {
                    if (this.numberHasDecimals(item)) {
                        doc.setDoubleForKey(item, key);
                    } else {
                        doc.setLongLongForKey(item, key);
                    }
                } else {
                    if (this.numberHasDecimals(item)) {
                        doc.setFloatForKey(item, key);
                    } else {
                        doc.setIntegerForKey(item, key);
                    }
                }
                break;
            case 'boolean':
                doc.setBooleanForKey(item, key);
                break;
            default:
                doc.setValueForKey(item, key);
        }
    }

    getDocument(documentId: string): any {
        const doc = this.ios.documentWithID(documentId);
        if (doc) {
            let obj = {};
            const keys = doc.keys;
            const size = keys.count;
            obj['id'] = doc.id;
            for (let i = 0; i < size; i++) {
                const key = keys.objectAtIndex(i);
                const value = doc.valueForKey(key);
                const newValue = {};
                newValue[key] = this.deserialize(value);
                obj = Object.assign(obj, newValue);
            }
            return obj;
        }
        return null;
    }

    numberHasDecimals(item: number) {
        return !(item % 1 === 0);
    }

    numberIs64Bit(item: number) {
        return item < -Math.pow(2, 31) + 1 || item > Math.pow(2, 31) - 1;
    }

    private deserialize(data: any) {
        if (typeof data === 'string' || typeof data === 'number' || typeof data === 'boolean' || typeof data !== 'object') return data;

        if (types.isNullOrUndefined(data)) {
            return data;
        }

        if (data instanceof NSNull) {
            return null;
        }

        if (data instanceof CBLDictionary) {
            const keys = data.keys;
            const length = keys.count;
            const object = {};
            for (let i = 0; i < length; i++) {
                const key = keys.objectAtIndex(i);
                const nativeItem = data.valueForKey(key);
                object[key] = this.deserialize(nativeItem);
            }
            return object;
        }

        if (data instanceof CBLArray) {
            const array = [];
            const size = data.count;
            for (let i = 0; i < size; i++) {
                const nativeItem = data.valueAtIndex(i);
                const item = this.deserialize(nativeItem);
                array.push(item);
            }
            return array;
        }

        return data;
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
        remoteUrl: string
    ) {
        const url = NSURL.alloc().initWithString(remoteUrl);
        const targetEndpoint = CBLURLEndpoint.alloc().initWithURL(url);
        const replConfig = CBLReplicatorConfiguration.alloc().initWithDatabaseTarget(
            this.ios,
            targetEndpoint
        );
        replConfig.replicatorType = CBLReplicatorType.kCBLReplicatorTypePull;

        const replicator = CBLReplicator.alloc().initWithConfig(replConfig);
        return new Replicator(replicator);

    }

    createPushReplication(
        remoteUrl: string
    ) {
        const url = NSURL.alloc().initWithString(remoteUrl);
        const targetEndpoint = CBLURLEndpoint.alloc().initWithURL(url);
        const replConfig = CBLReplicatorConfiguration.alloc().initWithDatabaseTarget(
            this.ios,
            targetEndpoint
        );
        replConfig.replicatorType = CBLReplicatorType.kCBLReplicatorTypePush;

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

    private setComparision(item) {
        let nativeQuery;
        switch (item.comparison as QueryComparisonOperator) {
            case 'equalTo':
                nativeQuery = CBLQueryExpression.property(
                    item.property
                ).equalTo(CBLQueryExpression.value(item.value));
                break;
            case 'add':
                nativeQuery = CBLQueryExpression.property(
                    item.property
                ).add(CBLQueryExpression.value(item.value));
                break;
            case 'between':
                if (Array.isArray(item.value) && item.value.length === 2) {
                    nativeQuery = CBLQueryExpression.property(
                        item.property
                    ).between(CBLQueryExpression.value(item.value[0])).andExpression(CBLQueryExpression.value(item.value[1]));
                }
                break;
            case 'collate':
                nativeQuery = CBLQueryExpression.property(
                    item.property
                ).collate(CBLQueryExpression.value(item.value));
                break;
            case 'divide':
                nativeQuery = CBLQueryExpression.property(
                    item.property
                ).divide(CBLQueryExpression.value(item.value));
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
        return nativeQuery;
    }

    query(query: Query = {select: [QueryMeta.ALL, QueryMeta.ID]}) {
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
            select.push(CBLQuerySelectResult.expression(CBLQueryMeta.id()));
        } else {
            query.select.forEach(item => {
                if (item === QueryMeta.ID) {
                    select.push(CBLQuerySelectResult.expression(CBLQueryMeta.id()));
                } else if (item === QueryMeta.ALL) {
                    select.push(CBLQuerySelectResult.all());
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
                    nativeQuery = nativeQuery.andExpression(this.setComparision(item));
                } else if (item === QueryLogicalOperator.OR) {
                    if (!nativeQuery) break;
                    nativeQuery = nativeQuery.orExpression(this.setComparision(item));
                } else {
                    nativeQuery = this.setComparision(item);
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
            if (query.offset && typeof query.offset === 'number') {
                limit = CBLQueryLimit.limitOffset(CBLQueryExpression.integer(query.limit), CBLQueryExpression.integer(query.offset));
            } else {
                limit = CBLQueryLimit.limit(CBLQueryExpression.integer(query.limit));
            }
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
                if (typeof nativeItem === 'string') {
                    obj[key] = nativeItem;
                } else if (types.getClass(nativeItem) === 'CBLDictionary') {
                    const cblKeys = nativeItem.keys;
                    const cblKeysSize = cblKeys.count;
                    for (let cblKeysId = 0; cblKeysId < cblKeysSize; cblKeysId++) {
                        const cblKey = cblKeys.objectAtIndex(cblKeysId);
                        obj[cblKey] = this.deserialize(nativeItem.valueForKey(cblKey));
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
        const newConfig = CBLReplicatorConfiguration.alloc().initWithConfig(this.replicator.config);
        newConfig.continuous = isContinuous;
        this.replicator = CBLReplicator.alloc().initWithConfig(newConfig);
    }

    setUserNameAndPassword(username: string, password: string) {
        const newConfig = CBLReplicatorConfiguration.alloc().initWithConfig(this.replicator.config);
        newConfig.authenticator = CBLBasicAuthenticator.alloc().initWithUsernamePassword(
            username,
            password
        );
        this.replicator = CBLReplicator.alloc().initWithConfig(newConfig);
    }

    setSessionIdAndCookieName(sessionId: string, cookieName: string) {
        const newConfig = CBLReplicatorConfiguration.alloc().initWithConfig(this.replicator.config);
        newConfig.authenticator = CBLSessionAuthenticator.alloc().initWithSessionIDCookieName(
            sessionId,
            cookieName
        );
        this.replicator = CBLReplicator.alloc().initWithConfig(newConfig);
    }

    setSessionId(sessionId: string) {
        const newConfig = CBLReplicatorConfiguration.alloc().initWithConfig(this.replicator.config);
        newConfig.authenticator = CBLSessionAuthenticator.alloc().initWithSessionID(
            sessionId
        );
        this.replicator = CBLReplicator.alloc().initWithConfig(newConfig);
    }
}
