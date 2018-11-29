import { Observable } from 'tns-core-modules/data/observable';
import { Couchbase, Replicator } from 'nativescript-couchbase-plugin';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';

export class HelloWorldModel extends Observable {
    public message: string;
    private db: Couchbase;
    items: ObservableArray<any> = new ObservableArray([]);
    input: string = '';
    pushRep: Replicator;
    pullRep: Replicator;

    constructor() {
        super();
        this.db = new Couchbase('tns-couchbase');
        this.pullRep = this.db.createPullReplication('ws://192.168.0.10:4984/tns-couchbase');
        this.pullRep.setContinuous(true);
        this.pushRep = this.db.createPushReplication('ws://192.168.0.10:4984/tns-couchbase');
        this.pushRep.setContinuous(true);
        this.db.addDatabaseChangeListener(changes => {
            for (let change of changes) {
                const doc = this.db.getDocument(change);
                if (doc) {
                    const length = this.items.length;
                    if (length === 0) {
                        this.items.push(doc);
                    } else {
                        for (let i = 0; i < length; i++) {
                            const item = this.items.getItem(i);
                            if (item.id === change) {
                                this.items.setItem(i, doc);
                                break;
                            } else if (i === length - 1) {
                                this.items.push(doc);
                            }
                        }
                    }
                } else {
                    this.items.forEach((item, index) => {
                        if (item.id === change) {
                            this.items.splice(index, 1);
                        }
                    });
                }
            }
        });
        this.pushRep.start();
        this.pullRep.start();
        const query = this.db.query();
        this.items.push(...query);
    }

    addItem() {
        this.db.createDocument({
            title: this.input,
            created_at: new Date().toJSON()
        });
    }
}
