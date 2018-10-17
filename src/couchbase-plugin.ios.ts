import { Common, ReplicatorBase } from './couchbase-plugin.common';

export class Couchbase extends Common {
  constructor(databaseName: string) {
    super(databaseName);
    this.ios = CBLDatabase.alloc().initWithNameError(databaseName);
  }
  query(select?: any[]) {
    // TODO
    return null;
  }
  createDocument(data: Object, documentId?: string) {
    let doc: CBLMutableDocument;
    if (documentId) {
      CBLMutableDocument.alloc().initWithID(documentId);
    } else {
      CBLMutableDocument.alloc().init();
    }

    const keys = Object.keys(data);
    for (let key of keys) {
      const item = data[key];
      doc.setValueForKey(key, item);
    }
    this.ios.saveDocumentError(doc);
    return doc.id;
  }
  getDocument(documentId: string): any {
    const doc = (this.ios as CBLDatabase).documentWithID(documentId);
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
    const original = (this.ios as CBLDatabase).documentWithID(documentId);
    const newDoc = original.toMutable();
    const keys = Object.keys(data);
    for (let key of keys) {
      const item = data[key];
      newDoc.setValueForKey(key, item);
    }
    this.ios.saveDocumentError(newDoc);
  }
  deleteDocument(documentId: string) {
    const doc = (this.ios as CBLDatabase).documentWithID(documentId);
    return (this.ios as CBLDatabase).deleteDocumentError(doc);
  }
  destroyDatabase() {
    return (this.ios as CBLDatabase).delete();
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
    (this.ios as CBLDatabase).addChangeListener((change: CBLDatabaseChange) => {
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
