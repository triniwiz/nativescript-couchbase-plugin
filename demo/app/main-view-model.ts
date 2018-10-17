import { Observable } from 'tns-core-modules/data/observable';
import { CouchbasePlugin } from 'nativescript-couchbase-plugin';

export class HelloWorldModel extends Observable {
  public message: string;
  private couchbasePlugin: CouchbasePlugin;

  constructor() {
    super();

    this.couchbasePlugin = new CouchbasePlugin();
    this.message = this.couchbasePlugin.message;
  }
}
