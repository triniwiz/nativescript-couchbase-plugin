import { Common, Query, ReplicatorBase } from './couchbase-plugin.common';

export {
    ConcurrencyMode, Query, QueryMeta, QueryArrayOperator, QueryComparisonOperator, QueryLogicalOperator, QueryOrderItem, QueryWhereItem
}from './couchbase-plugin.common';

export declare class Couchbase extends Common {
    config: any;
    android: any;
    ios: any;

    constructor(name: string);

    createDocument(data: Object, documentId?: string): any;

    setBlob(id: string, name: string, blob: any, mimeType?: string): void;

    getBlob(id: string, name: string): Blob;

    getDocument(documentId: string): any;

    updateDocument(documentId: string, data: any): void;

    deleteDocument(documentId: string): any;

    destroyDatabase(): void;

    query(query?: Query): any[];

    createReplication(remoteUrl: string, direction: 'push' | 'pull' | 'both'): Replicator;

    createPullReplication(remoteUrl: string, username?: string, password?: string): Replicator;

    createPushReplication(remoteUrl: string, username?: string, password?: string): Replicator;

    addDatabaseChangeListener(callback: any): void;

    inBatch(batch: () => void): void;
}

export declare class Replicator extends ReplicatorBase {
    constructor(replicator: any);

    start(): void;

    stop(): void;

    isRunning(): boolean;

    setContinuous(isContinuous: boolean): void;

    setUserNameAndPassword(username: string, password: string): any;
    
    setChannels(channels: string[]): any;

    setSessionIdAndCookieName(sessionId: string, cookieName: string): any;

    setSessionId(sessionId: string): any;
}

