import {
  Common,
  QueryBase,
  QueryMeta,
  QueryExpressionBase,
  QueryFromBase,
  QueryWhereBase,
  QueryOrderByBase,
  QueryLimitBase,
  QueryExpressionItem,
  ReplicatorBase
} from './couchbase-plugin.common';
import * as utils from 'tns-core-modules/utils/utils';
export class Couchbase extends Common {
  config: any;
  android: any;
  constructor(name: string) {
    super(name);
    this.config = new com.couchbase.lite.DatabaseConfiguration(
      utils.ad.getApplicationContext()
    );
    this.android = new com.couchbase.lite.Database(name, this.config);
  }
  createDocument(data: Object, documentId?: string) {
    let doc: com.couchbase.lite.MutableDocument;
    if (documentId) {
      doc = new com.couchbase.lite.MutableDocument(documentId);
    } else {
      doc = new com.couchbase.lite.MutableDocument();
    }
    const keys = Object.keys(data);
    for (let key of keys) {
      const item = data[key];
      doc.setValue(key, item);
    }
    this.android.save(doc);
    return doc.getId();
  }
  getDocument(documentId: string): any {
    const doc = this.android.getDocument(documentId);
    const keys = doc.getKeys();
    const size = keys.size();
    let object = {};
    for (let i = 0; i < size; i++) {
      const key = keys[i];
      const item = doc.getValue(key);
      const newItem = {};
      newItem[key] = item;
      object = Object.assign(object, newItem);
    }
    return object;
  }

  updateDocument(documentId: string, data: any) {
    const origin = this.android.getDocument(documentId);
    if (origin) {
      const doc = origin.toMutable();
      const keys = Object.keys(data);
      for (let key of keys) {
        const item = data[key];
        doc.setValue(key, item);
      }
      this.android.save(doc);
    }
  }

  deleteDocument(documentId: string) {
    const doc = this.android.getDocument(documentId);
    return this.android.delete(doc);
  }
  destroyDatabase() {
    this.android.delete();
  }

  query(select?: any[]) {
    // return new Query(this, select);
    return null;
  }
  createPullReplication(
    remoteUrl: string,
    username?: string,
    password?: string
  ) {
    const uri = new com.couchbase.lite.URLEndpoint(new java.net.URI(remoteUrl));
    const repConfig = new com.couchbase.lite.ReplicatorConfiguration(
      this.android,
      uri
    );
    repConfig.setReplicatorType(
      com.couchbase.lite.ReplicatorConfiguration.ReplicatorType.PULL
    );
    if (username && password) {
      repConfig.setAuthenticator(
        new com.couchbase.lite.BasicAuthenticator(username, password)
      );
    }
    const replicator = new com.couchbase.lite.Replicator(repConfig);
    /* replicator.addChangeListener(
      new com.couchbase.lite.ReplicatorChangeListener({
        changed(param0: com.couchbase.lite.ReplicatorChange): void {}
      })
    );*/
    return new Replicator(replicator);
  }
  createPushReplication(
    remoteUrl: string,
    username?: string,
    password?: string
  ) {
    const uri = new com.couchbase.lite.URLEndpoint(new java.net.URI(remoteUrl));
    const repConfig = new com.couchbase.lite.ReplicatorConfiguration(
      this.android,
      uri
    );
    repConfig.setReplicatorType(
      com.couchbase.lite.ReplicatorConfiguration.ReplicatorType.PUSH
    );
    if (username && password) {
      repConfig.setAuthenticator(
        new com.couchbase.lite.BasicAuthenticator(username, password)
      );
    }
    const replicator = new com.couchbase.lite.Replicator(repConfig);
    /* replicator.addChangeListener(
      new com.couchbase.lite.ReplicatorChangeListener({
        changed(param0: com.couchbase.lite.ReplicatorChange): void {}
      })
    );*/
    return new Replicator(replicator);
  }
  addDatabaseChangeListener(callback: any) {
    (this.android as com.couchbase.lite.Database).addChangeListener(
      new com.couchbase.lite.DatabaseChangeListener({
        changed(changes: com.couchbase.lite.DatabaseChange): void {
          if (callback && typeof callback === 'function') {
            const ids = [];
            const documentIds = changes.getDocumentIDs();
            const size = documentIds.size();
            for (let i = 0; i < size; i++) {
              const item = documentIds[i];
              ids.push(item);
            }
            callback(ids);
          }
        }
      })
    );
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
      this.replicator.getStatus().getActivityLevel() ===
      com.couchbase.lite.AbstractReplicator.ActivityLevel.BUSY
    );
  }
  setContinuous(isContinuous: boolean) {
    this.replicator.getConfig().setContinuous(isContinuous);
  }
}

/*
export class QueryExpression implements QueryExpressionBase {
  expression: QueryExpressionItem[];
  private constructor() {
    this.expression = [];
  }

  modulo(property: string, value: any): this {
    this.expression.push({
      property: property,
      value: value,
      type: 'modulo'
    });
    return this;
  }

  is(property: string, value: any): this {
    this.expression.push({
      property: property,
      value: value,
      type: 'is'
    });
    return this;
  }
  between(
    propertyA: string,
    valueA: any,
    propertyB: string,
    valueB: any
  ): this {
    this.expression.push({
      property: [propertyA, propertyB],
      value: [valueA, valueB],
      type: 'between'
    });
    return this;
  }
  isNot(property: string, value: any): this {
    this.expression.push({
      property: property,
      value: value,
      type: 'isNot'
    });
    return this;
  }
  */
/* TODO
  collate(param0: com.couchbase.lite.Collation): this {
    param0.
    this.expression.push({
      property: property,
      value: value,
      type: 'modulo'
    });
    return this;
  }
  */
/*
  in(value: any[]): this {
    this.expression.push({
      property: null,
      value: value,
      type: 'in'
    });
    return this;
  }
  add(property: string, value: any): this {
    this.expression.push({
      property: property,
      value: value,
      type: 'add'
    });
    return this;
  }
  isNullOrMissing(): this {
    this.expression.push({
      property: null,
      value: null,
      type: 'isNullOrMissing'
    });
    return this;
  }
  greaterThan(property: string, value: any): this {
    this.expression.push({
      property: property,
      value: value,
      type: 'greaterThan'
    });
    return this;
  }
  divide(property: string, value: any): this {
    this.expression.push({
      property: property,
      value: value,
      type: 'divide'
    });
    return this;
  }
  notEqualTo(property: string, value: any): this {
    this.expression.push({
      property: property,
      value: value,
      type: 'notEqualTo'
    });
    com.couchbase.lite.Expression.property("").and(com.couchbase.lite.Expression.property("").add(""))
    return this;
  }
  greaterThanOrEqualTo(property: string, value: any): this {
    this.expression.push({
      property: property,
      value: value,
      type: 'greaterThanOrEqualTo'
    });
    return this;
  }
  like(property: string, value: any): this {
    this.expression.push({
      property: property,
      value: value,
      type: 'like'
    });
    return this;
  }
  subtract(property: string, value: any): this {
    this.expression.push({
      property: property,
      value: value,
      type: 'subtract'
    });
    return this;
  }
  and(property: string, value: any): this {
    this.expression.push({
      property: property,
      value: value,
      type: 'and'
    });
    return this;
  }
  or(property: string, value: any): this {
    this.expression.push({
      property: property,
      value: value,
      type: 'or'
    });
    return this;
  }
  lessThanOrEqualTo(property: string, value: any): this {
    this.expression.push({
      property: property,
      value: value,
      type: 'lessThanOrEqualTo'
    });
    return this;
  }
  lessThan(property: string, value: any): this {
    this.expression.push({
      property: property,
      value: value,
      type: 'lessThan'
    });
    return this;
  }
  notNullOrMissing(): this {
    this.expression.push({
      property: null,
      value: null,
      type: 'notNullOrMissing'
    });
    return this;
  }
  regex(property: string, value: any): this {
    this.expression.push({
      property: property,
      value: value,
      type: 'regex'
    });
    return this;
  }
  equalTo(property: string, value: any): this {
    this.expression.push({
      property: property,
      value: value,
      type: 'equalTo'
    });
    return this;
  }
  multiply(property: string, value: any): this {
    this.expression.push({
      property: property,
      value: value,
      type: 'multiply'
    });
    return this;
  }
}


export class Query implements QueryBase {
  query: any;
  constructor(database: Couchbase, select: any[]) {
    const selectArray = [];
    if (select.indexOf(QueryMeta.ID) === -1) {
      selectArray.push(com.couchbase.lite.SelectResult.all);
    }
    select.forEach(item => {
      if (typeof item === 'string' && item === QueryMeta.ID) {
        selectArray.push(
          com.couchbase.lite.SelectResult.expression(com.couchbase.lite.Meta.id)
        );
      } else if (item instanceof RegExp) {
      } else {
        selectArray.push(com.couchbase.lite.SelectResult.property(item));
      }
    });
    this.query = com.couchbase.lite.QueryBuilder.select([selectArray]);
  }

  from(databaseName: string = null): QueryFrom {
    return QueryFrom.fromQuery(databaseName, this);
  }
  execute(): any[] {
    const items = [];
    const result = this.select.execute().allResults();
    const size = result.size();
    for (let i = 0; i < size; i++) {
      const item = result.get(i);
      items.push(item);
    }
    return items;
  }
}

export class QueryWhere implements QueryWhereBase {
  query: any;
  expression: QueryExpression;
  private constructor(query: any, expression: QueryExpression) {
    // (query as com.couchbase.lite.From).where().
    this.query = query;
    this.expression = expression;
  }
  public static fromQuery(query: any, expression: QueryExpression) {
    let nativeExpression: com.couchbase.lite.Expression;
    expression.expression.forEach(item => {
      switch (item.type) {
        case 'add':
          if (!nativeExpression) {
            nativeExpression = com.couchbase.lite.Expression.property(
              item.property
            ).add(com.couchbase.lite.Expression.value(item.value));
          }else {
           // nativeExpression.add()
          }
          break;
          case 'and':
          if (!nativeExpression) {
            nativeExpression.and()
            nativeExpression = com.couchbase.lite.Expression.property(
              item.property
            ).add(com.couchbase.lite.Expression.value(item.value));
          }else {
           nativeExpression.and()
          }
          break;
      }
    });
    const where = new QueryWhere(query, expression);
    where.query = nativeExpression
    return where;
  }

  orderBy(): QueryOrderBy {
    return QueryOrderBy.fromQuery(this.where);
  }
  groupBy(): QueryBase {
    throw new Error('Method not implemented.');
  }
  limit(): QueryBase {
    throw new Error('Method not implemented.');
  }
  execute(): any[] {
    throw new Error('Method not implemented.');
  }
}

export class QueryFrom implements QueryFromBase {
  query: any;
  from: any;
  private constructor(database: Couchbase, query: Query) {
    this.query = query;
  }
  public static fromQuery(databaseName: string, query: Query) {
    const database = new Couchbase(databaseName);
    const from = new QueryFrom(database, query);
    from.from = (query.query as com.couchbase.lite.Select).from(
      com.couchbase.lite.DataSource.database(database.android)
    );
    return from;
  }
  where(expression: QueryExpression): QueryWhere {
    return QueryWhere.fromQuery(this.query, expression);
  }
  orderBy(): QueryOrderBy {}
  groupBy(): QueryGroupBy {
    throw new Error('Method not implemented.');
  }
  join(): QueryJoin {
    throw new Error('Method not implemented.');
  }
  execute(): any[] {
    const items = [];
    const result = this.from.execute().allResults();
    const size = result.size();
    for (let i = 0; i < size; i++) {
      const item = result.get(i);
      items.push(item);
    }
    return items;
  }
}

export class QueryLimit extends QueryLimitBase {
  constructor(limit: number) {
    super(limit);
  }
  public static fromQuery(query: any, limit: number) {
    const qLimit = new QueryLimit(limit);
    qLimit.limit = query.limit(limit);
    return qLimit;
  }

  execute(): any[] {
    const items = [];
    const result = this.query.execute().allResults();
    const size = result.size();
    for (let i = 0; i < size; i++) {
      const item = result.get(i);
      items.push(item);
    }
    return items;
  }
}

export class QueryOrderBy extends QueryOrderByBase {
  limit(limit: number): QueryLimit {
    return QueryLimit.fromQuery(this.query, limit);
  }
  execute(): any[] {
    const items = [];
    const result = this.query.execute().allResults();
    const size = result.size();
    for (let i = 0; i < size; i++) {
      const item = result.get(i);
      items.push(item);
    }
    return items;
  }
  private constructor() {
    super();
  }
  public static fromQuery(query: any): QueryOrderBy {
    return null;
  }
}

*/
