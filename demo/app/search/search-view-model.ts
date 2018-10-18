import { Observable } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { Couchbase } from 'nativescript-couchbase-plugin';

export class SearchModel extends Observable {
  private db: Couchbase;
  items = new ObservableArray([]);
  input = '';
  constructor() {
    super();
    this.db = new Couchbase('core-demo');
  }

  search(args) {
    const query = this.db.query({
      select: [],
      where: [
        {
          property: 'title',
          comparison: 'equalTo',
          value: this.input
        }
      ]
    });
    this.set('items', new ObservableArray([...query]));
  }
}
