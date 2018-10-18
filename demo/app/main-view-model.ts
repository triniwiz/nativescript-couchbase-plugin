import { Observable } from 'tns-core-modules/data/observable';
import { Couchbase } from 'nativescript-couchbase-plugin';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';

export class HelloWorldModel extends Observable {
  public message: string;
  private db: Couchbase;
  items: ObservableArray<any> = new ObservableArray([]);
  input: string = '';
  constructor() {
    super();
    this.db = new Couchbase('core-demo');
    this.db.addDatabaseChangeListener(changes => {
      for (let change of changes) {
        const doc = this.db.getDocument(change);
        if (doc) {
          this.items.push(doc);
        }
      }
    });
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
