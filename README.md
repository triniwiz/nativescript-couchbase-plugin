[![npm](https://img.shields.io/npm/v/nativescript-couchbase-plugin.svg)](https://www.npmjs.com/package/nativescript-couchbase-plugin)
[![npm](https://img.shields.io/npm/dt/nativescript-couchbase-plugin.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-couchbase-plugin)
[![Build Status](https://travis-ci.org/triniwiz/nativescript-couchbase-plugin.svg?branch=master)](https://travis-ci.org/triniwiz/nativescript-couchbase-plugin)
# nativeScript-couchbase

## Installation

```javascript
tns plugin add nativescript-couchbase-plugin
```

## Usage

```ts
import { Couchbase } from 'nativescript-couchbase-plugin';
const database = new Couchbase('my-database');

const documentId = database.createDocument({
    "firstname": "O",
    "lastname": "Fortune",
    "address": {
        "country": "Trinidad and Tobago"
    }
    "twitter": "https://www.twitter.com/triniwiz"
});

const person = database.getDocument(documentId);


database.updateDocument(documentId, {
    "firstname": "Osei",
    "lastname": "Fortune",
    "twitter": "https://www.twitter.com/triniwiz"
});

const isDeleted = database.deleteDocument(documentId);
```

### Synchronization with Couchbase Sync Gateway and Couchbase Server

```ts
import { Couchbase } from 'nativescript-couchbase-plugin';
const database = new Couchbase('my-database');

const push = database.createPushReplication(
  'ws://sync-gateway-host:4984/my-database'
);
const pull = database.createPullReplication(
  'ws://sync-gateway-host:4984/my-database'
);
push.setContinuous(true);
pull.setContinuous(true);
push.start();
pull.start();
```

### Listening for Changes

```ts
database.addDatabaseChangeListener(function(changes) {
  for (var i = 0; i < changes.length; i++) {
    const documentId = changes[i];
    console.log(documentId);
  }
});
```

## API

## License

Apache License Version 2.0, January 2004
