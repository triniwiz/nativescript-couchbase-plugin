var CouchbasePlugin = require("nativescript-couchbase-plugin").CouchbasePlugin;
var couchbasePlugin = new CouchbasePlugin();

describe("greet function", function() {
    it("exists", function() {
        expect(couchbasePlugin.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(couchbasePlugin.greet()).toEqual("Hello, NS");
    });
});