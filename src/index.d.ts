import { Common, ReplicatorBase, Query } from './couchbase-plugin.common';
export declare class Couchbase extends Common {
  constructor(databaseName: string);
  createDocument(data: Object, documentId?: string): string;
  getDocument(documentId: string): any;
  updateDocument(documentId: string, data: any): void;
  deleteDocument(documentId: string): any;
  destroyDatabase(): void;
  query(query?: Query): any[];
  createPullReplication(
    remoteUrl: string,
    username?: string,
    password?: string
  ): Replicator;
  createPushReplication(
    remoteUrl: string,
    username?: string,
    password?: string
  ): Replicator;
  addDatabaseChangeListener(callback: any): void;
}
export declare class Replicator extends ReplicatorBase {
  constructor(replicator: any);
  start(): void;
  stop(): void;
  isRunning(): boolean;
  setContinuous(isContinuous: boolean): void;
}
