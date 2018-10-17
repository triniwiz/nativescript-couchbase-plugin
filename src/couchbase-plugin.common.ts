import { Couchbase } from './couchbase-plugin.ios';

export abstract class Common {
  ios: any;
  android: any;
  config: any;
  constructor(databaseName: string) {}
  abstract createDocument(data: Object, documentId?: string);
  abstract getDocument(documentId: string);
  abstract updateDocument(documentId: string, data: any);
  abstract deleteDocument(documentId: string);
  abstract destroyDatabase();
  abstract query(select?: any[]): QueryBase;
  abstract createPullReplication(remoteUrl: string);
  abstract createPushReplication(remoteUrl: string);
  abstract addDatabaseChangeListener(callback: any);
}

export abstract class ReplicatorBase {
  replicator: any;

  constructor(replicator: any) {
    this.replicator = replicator;
  }

  abstract start();

  abstract stop();

  abstract isRunning();

  abstract setContinuous(isContinuous: boolean);
}

export enum QueryMeta {
  ID = 'COUCHBASE_ID'
}

export interface CBQuery {
  query: any;
  execute(): any[];
}

export interface QueryBase extends CBQuery {
  query: any;
  database: Common;
  from(databaseName?: string): QueryFromBase;
}

export interface QueryFromBase {
  constructor(databaseName: string, query: QueryBase);
  where(): QueryWhereBase;
  orderBy(): QueryOrderByBase;
  groupBy(): QueryGroupByBase;
  join(): QueryJoinBase;
}

export interface QueryWhereBase {
  constructor(query: any);
  orderBy(): QueryOrderByBase;
  groupBy(): QueryGroupByBase;
  limit(): QueryLimitBase;
}

export interface QueryOrderByBase {
  limit(): QueryLimitBase;
  execute(): any[];
}

export interface QueryGroupByBase {
  limit(): QueryLimitBase;
  execute(): any[];
}

export interface QueryLimitBase {
  constructor(limit: number);
  limit: number;
}

export interface QueryJoinBase {
  constructor(query: any);
  where(): QueryWhereBase;
  orderBy(): QueryOrderByBase;
  limit(): QueryLimitBase;
}
export type QueryExpressionType =
  | 'modulo'
  | 'is'
  | 'between'
  | 'isNot'
  | 'collate'
  | 'in'
  | 'add'
  | 'isNullOrMissing'
  | 'greaterThan'
  | 'divide'
  | 'notEqualTo'
  | 'greaterThanOrEqualTo'
  | 'like'
  | 'subtract'
  | 'and'
  | 'or'
  | 'lessThanOrEqualTo'
  | 'lessThan'
  | 'notNullOrMissing'
  | 'regex'
  | 'equalTo'
  | 'multiply';

export interface QueryExpressionItem {
  property: any;
  value: any | any[];
  type: QueryExpressionType;
}

export interface QueryExpressionBase {
  expression: QueryExpressionItem[];
  modulo(property: string, value: any): this;
  is(property: string, value: any): this;
  between(propertyA: string, valueA: any, propertyB: string, valueB: any): this;
  isNot(property: string, value: any): this;
  // collate(param0: com.couchbase.lite.Collation): this;
  in(param0: any[]): this;
  add(property: string, value: any): this;
  isNullOrMissing(): this;
  greaterThan(property: string, value: any): this;
  divide(property: string, value: any): this;
  notEqualTo(property: string, value: any): this;
  greaterThanOrEqualTo(property: string, value: any): this;
  like(property: string, value: any): this;
  subtract(property: string, value: any): this;
  and(property: string, value: any): this;
  or(property: string, value: any): this;
  lessThanOrEqualTo(property: string, value: any): this;
  lessThan(property: string, value: any): this;
  notNullOrMissing(): this;
  regex(property: string, value: any): this;
  equalTo(property: string, value: any): this;
  multiply(property: string, value: any): this;
}
