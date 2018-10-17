declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractDatabase {
				public static class: java.lang.Class<com.couchbase.lite.AbstractDatabase>;
				public static TAG: string;
				public static DB_EXTENSION: string;
				public static MAX_CHANGES: number;
				public static DEFAULT_DATABASE_FLAGS: number;
				public name: string;
				public config: com.couchbase.lite.DatabaseConfiguration;
				public c4db: com.couchbase.litecore.C4Database;
				public postExecutor: java.util.concurrent.ScheduledExecutorService;
				public queryExecutor: java.util.concurrent.ScheduledExecutorService;
				public dbChangeNotifier: com.couchbase.lite.ChangeNotifier<com.couchbase.lite.DatabaseChange>;
				public c4DBObserver: com.couchbase.litecore.C4DatabaseObserver;
				public docChangeNotifiers: java.util.Map<string,com.couchbase.lite.DocumentChangeNotifier>;
				public sharedKeys: com.couchbase.litecore.SharedKeys;
				public activeReplications: java.util.Set<com.couchbase.lite.Replicator>;
				public activeLiveQueries: java.util.Set<com.couchbase.lite.LiveQuery>;
				public lock: any;
				public constructor(param0: string, param1: com.couchbase.lite.DatabaseConfiguration);
				public addDocumentChangeListener(param0: string, param1: com.couchbase.lite.DocumentChangeListener): com.couchbase.lite.ListenerToken;
				public finalize(): void;
				public save(param0: com.couchbase.lite.MutableDocument, param1: com.couchbase.lite.ConcurrencyControl): boolean;
				public static exists(param0: string, param1: java.io.File): boolean;
				public compact(): void;
				public createIndex(param0: string, param1: com.couchbase.lite.Index): void;
				public inBatch(param0: java.lang.Runnable): void;
				public delete(): void;
				public save(param0: com.couchbase.lite.MutableDocument): void;
				public delete(param0: com.couchbase.lite.Document): void;
				public close(): void;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public static setLogLevel(param0: com.couchbase.lite.LogDomain, param1: com.couchbase.lite.LogLevel): void;
				public getName(): string;
				public getCount(): number;
				public getDocument(param0: string): com.couchbase.lite.Document;
				public getPath(): string;
				public addChangeListener(param0: com.couchbase.lite.DatabaseChangeListener): com.couchbase.lite.ListenerToken;
				public toString(): string;
				public addDocumentChangeListener(param0: string, param1: java.util.concurrent.Executor, param2: com.couchbase.lite.DocumentChangeListener): com.couchbase.lite.ListenerToken;
				public getConfig(): com.couchbase.lite.DatabaseConfiguration;
				public purge(param0: com.couchbase.lite.Document): void;
				public getIndexes(): java.util.List<string>;
				public delete(param0: com.couchbase.lite.Document, param1: com.couchbase.lite.ConcurrencyControl): boolean;
				public static delete(param0: string, param1: java.io.File): void;
				public deleteIndex(param0: string): void;
				public static copy(param0: java.io.File, param1: string, param2: com.couchbase.lite.DatabaseConfiguration): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.DatabaseChangeListener): com.couchbase.lite.ListenerToken;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractIndex extends com.couchbase.lite.Index {
				public static class: java.lang.Class<com.couchbase.lite.AbstractIndex>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractQuery extends com.couchbase.lite.Query {
				public static class: java.lang.Class<com.couchbase.lite.AbstractQuery>;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public getParameters(): com.couchbase.lite.Parameters;
				public finalize(): void;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public toString(): string;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractReplicator extends com.couchbase.lite.NetworkReachabilityListener {
				public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator>;
				public static TAG: string;
				public config: com.couchbase.lite.ReplicatorConfiguration;
				public stop(): void;
				public getConfig(): com.couchbase.lite.ReplicatorConfiguration;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public start(): void;
				public addChangeListener(param0: com.couchbase.lite.ReplicatorChangeListener): com.couchbase.lite.ListenerToken;
				public getStatus(): com.couchbase.lite.AbstractReplicator.Status;
				public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
				public finalize(): void;
				public resetCheckpoint(): void;
				public toString(): string;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.ReplicatorChangeListener): com.couchbase.lite.ListenerToken;
			}
			export module AbstractReplicator {
				export class ActivityLevel {
					public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator.ActivityLevel>;
					public static STOPPED: com.couchbase.lite.AbstractReplicator.ActivityLevel;
					public static OFFLINE: com.couchbase.lite.AbstractReplicator.ActivityLevel;
					public static CONNECTING: com.couchbase.lite.AbstractReplicator.ActivityLevel;
					public static IDLE: com.couchbase.lite.AbstractReplicator.ActivityLevel;
					public static BUSY: com.couchbase.lite.AbstractReplicator.ActivityLevel;
					public static values(): native.Array<com.couchbase.lite.AbstractReplicator.ActivityLevel>;
					public static valueOf(param0: string): com.couchbase.lite.AbstractReplicator.ActivityLevel;
				}
				export class Progress {
					public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator.Progress>;
					public getTotal(): number;
					public toString(): string;
					public getCompleted(): number;
				}
				export class Status {
					public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator.Status>;
					public getActivityLevel(): com.couchbase.lite.AbstractReplicator.ActivityLevel;
					public toString(): string;
					public getProgress(): com.couchbase.lite.AbstractReplicator.Progress;
					public constructor(param0: com.couchbase.litecore.C4ReplicatorStatus);
					public getError(): com.couchbase.lite.CouchbaseLiteException;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class AndroidNetworkReachabilityManager extends com.couchbase.lite.NetworkReachabilityManager {
				public static class: java.lang.Class<com.couchbase.lite.AndroidNetworkReachabilityManager>;
			}
			export module AndroidNetworkReachabilityManager {
				export class NetworkReceiver {
					public static class: java.lang.Class<com.couchbase.lite.AndroidNetworkReachabilityManager.NetworkReceiver>;
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Array extends java.lang.Object {
				public static class: java.lang.Class<com.couchbase.lite.Array>;
				public _sharedLock: any;
				public getDouble(param0: number): number;
				public getString(param0: number): string;
				public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: number): java.lang.Number;
				public iterator(): java.util.Iterator<any>;
				public getDate(param0: number): java.util.Date;
				public toMutable(): com.couchbase.lite.MutableArray;
				public getBoolean(param0: number): boolean;
				public getDictionary(param0: number): com.couchbase.lite.Dictionary;
				public getBlob(param0: number): com.couchbase.lite.Blob;
				public toList(): java.util.List<any>;
				public hashCode(): number;
				public getLong(param0: number): number;
				public equals(param0: any): boolean;
				public getValue(param0: number): any;
				public count(): number;
				public getInt(param0: number): number;
				public encodeTo(param0: com.couchbase.litecore.fleece.FLEncoder): void;
				public getArray(param0: number): com.couchbase.lite.ArrayInterface;
				public getFloat(param0: number): number;
				public getArray(param0: number): com.couchbase.lite.Array;
			}
			export module Array {
				export class ArrayIterator extends java.util.Iterator<any> {
					public static class: java.lang.Class<com.couchbase.lite.Array.ArrayIterator>;
					public next(): any;
					public hasNext(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ArrayExpression {
				public static class: java.lang.Class<com.couchbase.lite.ArrayExpression>;
				public static anyAndEvery(param0: com.couchbase.lite.VariableExpression): com.couchbase.lite.ArrayExpressionIn;
				public static variable(param0: string): com.couchbase.lite.VariableExpression;
				public static every(param0: com.couchbase.lite.VariableExpression): com.couchbase.lite.ArrayExpressionIn;
				public static any(param0: com.couchbase.lite.VariableExpression): com.couchbase.lite.ArrayExpressionIn;
			}
			export module ArrayExpression {
				export class QuantifiesType {
					public static class: java.lang.Class<com.couchbase.lite.ArrayExpression.QuantifiesType>;
					public static ANY: com.couchbase.lite.ArrayExpression.QuantifiesType;
					public static ANY_AND_EVERY: com.couchbase.lite.ArrayExpression.QuantifiesType;
					public static EVERY: com.couchbase.lite.ArrayExpression.QuantifiesType;
					public static values(): native.Array<com.couchbase.lite.ArrayExpression.QuantifiesType>;
					public static valueOf(param0: string): com.couchbase.lite.ArrayExpression.QuantifiesType;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ArrayExpressionIn {
				public static class: java.lang.Class<com.couchbase.lite.ArrayExpressionIn>;
				public in(param0: com.couchbase.lite.Expression): com.couchbase.lite.ArrayExpressionSatisfies;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ArrayExpressionSatisfies {
				public static class: java.lang.Class<com.couchbase.lite.ArrayExpressionSatisfies>;
				public satisfies(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
			}
			export module ArrayExpressionSatisfies {
				export class QuantifiedExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.ArrayExpressionSatisfies.QuantifiedExpression>;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ArrayFunction {
				public static class: java.lang.Class<com.couchbase.lite.ArrayFunction>;
				public static contains(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static length(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ArrayInterface {
				public static class: java.lang.Class<com.couchbase.lite.ArrayInterface>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.ArrayInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					count(): number;
					getValue(param0: number): any;
					getString(param0: number): string;
					getNumber(param0: number): java.lang.Number;
					getInt(param0: number): number;
					getLong(param0: number): number;
					getFloat(param0: number): number;
					getDouble(param0: number): number;
					getBoolean(param0: number): boolean;
					getBlob(param0: number): com.couchbase.lite.Blob;
					getDate(param0: number): java.util.Date;
					getArray(param0: number): com.couchbase.lite.ArrayInterface;
					getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
					toList(): java.util.List<any>;
				});
				public constructor();
				public getDouble(param0: number): number;
				public getString(param0: number): string;
				public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: number): java.lang.Number;
				public getDate(param0: number): java.util.Date;
				public getBoolean(param0: number): boolean;
				public getBlob(param0: number): com.couchbase.lite.Blob;
				public toList(): java.util.List<any>;
				public getLong(param0: number): number;
				public getValue(param0: number): any;
				public count(): number;
				public getInt(param0: number): number;
				public getArray(param0: number): com.couchbase.lite.ArrayInterface;
				public getFloat(param0: number): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class Authenticator {
				public static class: java.lang.Class<com.couchbase.lite.Authenticator>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class BasicAuthenticator extends com.couchbase.lite.Authenticator {
				public static class: java.lang.Class<com.couchbase.lite.BasicAuthenticator>;
				public getUsername(): string;
				public getPassword(): string;
				public constructor(param0: string, param1: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Blob extends com.couchbase.litecore.fleece.FLEncodable {
				public static class: java.lang.Class<com.couchbase.lite.Blob>;
				public getContentType(): string;
				public digest(): string;
				public constructor(param0: string, param1: java.net.URL);
				public length(): number;
				public getContent(): native.Array<number>;
				public toString(): string;
				public getContentStream(): java.io.InputStream;
				public getProperties(): java.util.Map<string,any>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: string, param1: native.Array<number>);
				public encodeTo(param0: com.couchbase.litecore.fleece.FLEncoder): void;
				public constructor(param0: string, param1: java.io.InputStream);
			}
			export module Blob {
				export class BlobInputStream {
					public static class: java.lang.Class<com.couchbase.lite.Blob.BlobInputStream>;
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public read(param0: native.Array<number>): number;
					public skip(param0: number): number;
					public close(): void;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class BuildConfig {
				public static class: java.lang.Class<com.couchbase.lite.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public static BUILD_NO: number;
				public static GitHash: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class CBLConverter {
				public static class: java.lang.Class<com.couchbase.lite.CBLConverter>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class CBLError {
				public static class: java.lang.Class<com.couchbase.lite.CBLError>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.CBLError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
			export module CBLError {
				export class Code {
					public static class: java.lang.Class<com.couchbase.lite.CBLError.Code>;
					/**
					 * Constructs a new instance of the com.couchbase.lite.CBLError$Code interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static CBLErrorTransactionNotClosed: number;
					public static CBLErrorTLSCertUntrusted: number;
					public static CBLErrorTLSCertExpired: number;
					public static CBLErrorNotWriteable: number;
					public static CBLErrorNotADatabaseFile: number;
					public static CBLErrorWebSocketAbnormalClose: number;
					public static CBLErrorInvalidParameter: number;
					public static CBLErrorHTTPBase: number;
					public static CBLErrorUnsupported: number;
					public static CBLErrorWebSocketPolicyError: number;
					public static CBLErrorConflict: number;
					public static CBLErrorTLSClientCertRequired: number;
					public static CBLErrorNotFound: number;
					public static CBLErrorWrongFormat: number;
					public static CBLErrorAssertionFailed: number;
					public static CBLErrorWebSocketProtocolError: number;
					public static CBLErrorUnimplemented: number;
					public static CBLErrorInvalidRedirect: number;
					public static CBLErrorWebSocketGoingAway: number;
					public static CBLErrorNetworkBase: number;
					public static CBLErrorUnexpectedError: number;
					public static CBLErrorInvalidQuery: number;
					public static CBLErrorTimeout: number;
					public static CBLErrorTLSHandshakeFailed: number;
					public static CBLErrorHTTPEntityTooLarge: number;
					public static CBLErrorHTTPConflict: number;
					public static CBLErrorDatabaseTooNew: number;
					public static CBLErrorNotOpen: number;
					public static CBLErrorWebSocketCloseUserPermanent: number;
					public static CBLErrorCorruptRevisionData: number;
					public static CBLErrorDatabaseTooOld: number;
					public static CBLErrorTooManyRedirects: number;
					public static CBLErrorHTTPProxyAuthRequired: number;
					public static CBLErrorInvalidQueryParam: number;
					public static CBLErrorCantOpenFile: number;
					public static CBLErrorWebSocketBadMessageFormat: number;
					public static CBLErrorCrypto: number;
					public static CBLErrorBusy: number;
					public static CBLErrorDNSFailure: number;
					public static CBLErrorHTTPInternalServerError: number;
					public static CBLErrorNotInTransaction: number;
					public static CBLErrorHTTPImATeapot: number;
					public static CBLErrorTLSCertUnknownRoot: number;
					public static CBLErrorHTTPAuthRequired: number;
					public static CBLErrorUnknownHost: number;
					public static CBLErrorInvalidURL: number;
					public static CBLErrorTLSClientCertRejected: number;
					public static CBLErrorWebSocketDataError: number;
					public static CBLErrorWebSocketMessageTooBig: number;
					public static CBLErrorHTTPNotFound: number;
					public static CBLErrorHTTPNotImplemented: number;
					public static CBLErrorHTTPForbidden: number;
					public static CBLErrorBadRevisionID: number;
					public static CBLErrorMemoryError: number;
					public static CBLErrorMissingIndex: number;
					public static CBLErrorRemoteError: number;
					public static CBLErrorBadDocID: number;
					public static CBLErrorWebSocketBase: number;
					public static CBLErrorWebSocketMissingExtension: number;
					public static CBLErrorUnsupportedEncryption: number;
					public static CBLErrorWebSocketCloseUserTransient: number;
					public static CBLErrorCorruptData: number;
					public static CBLErrorHTTPServiceUnavailable: number;
					public static CBLErrorIOError: number;
					public static CBLErrorWebSocketCantFulfill: number;
					public static CBLErrorCantUpgradeDatabase: number;
				}
				export class Domain {
					public static class: java.lang.Class<com.couchbase.lite.CBLError.Domain>;
					/**
					 * Constructs a new instance of the com.couchbase.lite.CBLError$Domain interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static FleeceErrorDomain: string;
					public static CBLErrorDomain: string;
					public static SQLiteErrorDomain: string;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class CBLStatus {
				public static class: java.lang.Class<com.couchbase.lite.CBLStatus>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class CBLVersion {
				public static class: java.lang.Class<com.couchbase.lite.CBLVersion>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ChangeListener<ChangeType>  extends java.lang.Object {
				public static class: java.lang.Class<com.couchbase.lite.ChangeListener<any>>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.ChangeListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					changed(param0: ChangeType): void;
				});
				public constructor();
				public changed(param0: ChangeType): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ChangeListenerToken<ChangeType>  extends com.couchbase.lite.ListenerToken {
				public static class: java.lang.Class<com.couchbase.lite.ChangeListenerToken<any>>;
				public getKey(): any;
				public setKey(param0: any): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ChangeNotifier<ChangeType>  extends java.lang.Object {
				public static class: java.lang.Class<com.couchbase.lite.ChangeNotifier<any>>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Collation {
				public static class: java.lang.Class<com.couchbase.lite.Collation>;
				public static ascii(): com.couchbase.lite.Collation.ASCII;
				public static unicode(): com.couchbase.lite.Collation.Unicode;
				public toString(): string;
			}
			export module Collation {
				export class ASCII extends com.couchbase.lite.Collation {
					public static class: java.lang.Class<com.couchbase.lite.Collation.ASCII>;
					public ignoreCase(param0: boolean): com.couchbase.lite.Collation.ASCII;
				}
				export class Unicode extends com.couchbase.lite.Collation {
					public static class: java.lang.Class<com.couchbase.lite.Collation.Unicode>;
					public locale(param0: string): com.couchbase.lite.Collation.Unicode;
					public ignoreCase(param0: boolean): com.couchbase.lite.Collation.Unicode;
					public ignoreAccents(param0: boolean): com.couchbase.lite.Collation.Unicode;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ConcurrencyControl {
				public static class: java.lang.Class<com.couchbase.lite.ConcurrencyControl>;
				public static LAST_WRITE_WINS: com.couchbase.lite.ConcurrencyControl;
				public static FAIL_ON_CONFLICT: com.couchbase.lite.ConcurrencyControl;
				public static values(): native.Array<com.couchbase.lite.ConcurrencyControl>;
				public static valueOf(param0: string): com.couchbase.lite.ConcurrencyControl;
				public getValue(): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class CouchbaseLiteException implements com.couchbase.lite.CBLError.Domain {
				public static class: java.lang.Class<com.couchbase.lite.CouchbaseLiteException>;
				public constructor(param0: string, param1: string, param2: number);
				public constructor(param0: string, param1: number, param2: java.lang.Throwable);
				public getInfo(): java.util.Map<string,any>;
				public constructor(param0: string, param1: java.lang.Throwable, param2: string, param3: number);
				public constructor(param0: string, param1: number);
				public getCode(): number;
				public getDomain(): string;
				public constructor(param0: string, param1: number, param2: java.util.Map<string,any>);
				public toString(): string;
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DataSource {
				public static class: java.lang.Class<com.couchbase.lite.DataSource>;
				public static database(param0: com.couchbase.lite.Database): com.couchbase.lite.DataSource.As;
			}
			export module DataSource {
				export class As extends com.couchbase.lite.DataSource {
					public static class: java.lang.Class<com.couchbase.lite.DataSource.As>;
					public as(param0: string): com.couchbase.lite.DataSource;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Database extends com.couchbase.lite.AbstractDatabase {
				public static class: java.lang.Class<com.couchbase.lite.Database>;
				public constructor(param0: string, param1: com.couchbase.lite.DatabaseConfiguration);
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DatabaseChange {
				public static class: java.lang.Class<com.couchbase.lite.DatabaseChange>;
				public getDocumentIDs(): java.util.List<string>;
				public toString(): string;
				public getDatabase(): com.couchbase.lite.Database;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DatabaseChangeListener extends com.couchbase.lite.ChangeListener<com.couchbase.lite.DatabaseChange> {
				public static class: java.lang.Class<com.couchbase.lite.DatabaseChangeListener>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.DatabaseChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					changed(param0: com.couchbase.lite.DatabaseChange): void;
					changed(param0: any): void;
				});
				public constructor();
				public changed(param0: com.couchbase.lite.DatabaseChange): void;
				public changed(param0: any): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DatabaseConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.DatabaseConfiguration>;
				public constructor(param0: globalAndroid.content.Context);
				public setDirectory(param0: string): com.couchbase.lite.DatabaseConfiguration;
				public constructor(param0: com.couchbase.lite.DatabaseConfiguration);
				public getDirectory(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DefaultExecutor {
				public static class: java.lang.Class<com.couchbase.lite.DefaultExecutor>;
				public static instance(): com.couchbase.lite.DefaultExecutor;
				public execute(param0: java.lang.Runnable): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Dictionary extends java.lang.Object {
				public static class: java.lang.Class<com.couchbase.lite.Dictionary>;
				public _sharedLock: any;
				public finalize(): void;
				public getKeys(): java.util.List<string>;
				public getValue(param0: string): any;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: string): java.lang.Number;
				public toMutable(): com.couchbase.lite.MutableDictionary;
				public contains(param0: string): boolean;
				public hashCode(): number;
				public getBoolean(param0: string): boolean;
				public getDictionary(param0: string): com.couchbase.lite.Dictionary;
				public equals(param0: any): boolean;
				public getString(param0: string): string;
				public getFloat(param0: string): number;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public isEmpty(): boolean;
				public getLong(param0: string): number;
				public getDouble(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public getDate(param0: string): java.util.Date;
				public iterator(): java.util.Iterator<string>;
				public count(): number;
				public encodeTo(param0: com.couchbase.litecore.fleece.FLEncoder): void;
				public toMap(): java.util.Map<string,any>;
				public getInt(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.Array;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DictionaryInterface {
				public static class: java.lang.Class<com.couchbase.lite.DictionaryInterface>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.DictionaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					count(): number;
					getKeys(): java.util.List<string>;
					getValue(param0: string): any;
					getString(param0: string): string;
					getNumber(param0: string): java.lang.Number;
					getInt(param0: string): number;
					getLong(param0: string): number;
					getFloat(param0: string): number;
					getDouble(param0: string): number;
					getBoolean(param0: string): boolean;
					getBlob(param0: string): com.couchbase.lite.Blob;
					getDate(param0: string): java.util.Date;
					getArray(param0: string): com.couchbase.lite.ArrayInterface;
					getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
					toMap(): java.util.Map<string,any>;
					contains(param0: string): boolean;
				});
				public constructor();
				public getLong(param0: string): number;
				public getKeys(): java.util.List<string>;
				public getValue(param0: string): any;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: string): java.lang.Number;
				public getDouble(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public contains(param0: string): boolean;
				public getDate(param0: string): java.util.Date;
				public getBoolean(param0: string): boolean;
				public getString(param0: string): string;
				public getFloat(param0: string): number;
				public count(): number;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public toMap(): java.util.Map<string,any>;
				public getInt(param0: string): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DocContext extends com.couchbase.litecore.fleece.MContext {
				public static class: java.lang.Class<com.couchbase.lite.DocContext>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Document extends java.lang.Object {
				public static class: java.lang.Class<com.couchbase.lite.Document>;
				public getId(): string;
				public getSequence(): number;
				public finalize(): void;
				public getKeys(): java.util.List<string>;
				public toMutable(): com.couchbase.lite.MutableDocument;
				public getValue(param0: string): any;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: string): java.lang.Number;
				public contains(param0: string): boolean;
				public hashCode(): number;
				public getBoolean(param0: string): boolean;
				public getDictionary(param0: string): com.couchbase.lite.Dictionary;
				public equals(param0: any): boolean;
				public getString(param0: string): string;
				public getFloat(param0: string): number;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public getLong(param0: string): number;
				public getDouble(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public getDate(param0: string): java.util.Date;
				public iterator(): java.util.Iterator<string>;
				public count(): number;
				public toMap(): java.util.Map<string,any>;
				public getInt(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.Array;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DocumentChange {
				public static class: java.lang.Class<com.couchbase.lite.DocumentChange>;
				public getDocumentID(): string;
				public toString(): string;
				public getDatabase(): com.couchbase.lite.Database;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DocumentChangeListener extends com.couchbase.lite.ChangeListener<com.couchbase.lite.DocumentChange> {
				public static class: java.lang.Class<com.couchbase.lite.DocumentChangeListener>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.DocumentChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					changed(param0: com.couchbase.lite.DocumentChange): void;
					changed(param0: any): void;
				});
				public constructor();
				public changed(param0: com.couchbase.lite.DocumentChange): void;
				public changed(param0: any): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DocumentChangeNotifier extends com.couchbase.lite.ChangeNotifier<com.couchbase.lite.DocumentChange> {
				public static class: java.lang.Class<com.couchbase.lite.DocumentChangeNotifier>;
				public finalize(): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Endpoint {
				public static class: java.lang.Class<com.couchbase.lite.Endpoint>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.Endpoint interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class Expression {
				public static class: java.lang.Class<com.couchbase.lite.Expression>;
				public static parameter(param0: string): com.couchbase.lite.Expression;
				public static negated(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public modulo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public is(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public between(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static string(param0: string): com.couchbase.lite.Expression;
				public isNot(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public collate(param0: com.couchbase.lite.Collation): com.couchbase.lite.Expression;
				public in(param0: native.Array<com.couchbase.lite.Expression>): com.couchbase.lite.Expression;
				public add(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static booleanValue(param0: boolean): com.couchbase.lite.Expression;
				public static property(param0: string): com.couchbase.lite.PropertyExpression;
				public static number(param0: java.lang.Number): com.couchbase.lite.Expression;
				public static doubleValue(param0: number): com.couchbase.lite.Expression;
				public isNullOrMissing(): com.couchbase.lite.Expression;
				public static all(): com.couchbase.lite.PropertyExpression;
				public greaterThan(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static date(param0: java.util.Date): com.couchbase.lite.Expression;
				public divide(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public notEqualTo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public greaterThanOrEqualTo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public like(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public subtract(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static not(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static floatValue(param0: number): com.couchbase.lite.Expression;
				public and(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public or(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public lessThanOrEqualTo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public toString(): string;
				public lessThan(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static value(param0: any): com.couchbase.lite.Expression;
				public static longValue(param0: number): com.couchbase.lite.Expression;
				public notNullOrMissing(): com.couchbase.lite.Expression;
				public regex(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public equalTo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static intValue(param0: number): com.couchbase.lite.Expression;
				public multiply(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
			}
			export module Expression {
				export class AggregateExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.AggregateExpression>;
					public getExpressions(): java.util.List<com.couchbase.lite.Expression>;
				}
				export class BinaryExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.BinaryExpression>;
				}
				export module BinaryExpression {
					export class OpType {
						public static class: java.lang.Class<com.couchbase.lite.Expression.BinaryExpression.OpType>;
						public static Add: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static Between: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static Divide: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static EqualTo: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static GreaterThan: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static GreaterThanOrEqualTo: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static In: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static Is: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static IsNot: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static LessThan: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static LessThanOrEqualTo: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static Like: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static Modulus: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static Multiply: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static NotEqualTo: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static Subtract: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static RegexLike: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static values(): native.Array<com.couchbase.lite.Expression.BinaryExpression.OpType>;
						public static valueOf(param0: string): com.couchbase.lite.Expression.BinaryExpression.OpType;
					}
				}
				export class CollationExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.CollationExpression>;
				}
				export class CompoundExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.CompoundExpression>;
				}
				export module CompoundExpression {
					export class OpType {
						public static class: java.lang.Class<com.couchbase.lite.Expression.CompoundExpression.OpType>;
						public static And: com.couchbase.lite.Expression.CompoundExpression.OpType;
						public static Or: com.couchbase.lite.Expression.CompoundExpression.OpType;
						public static Not: com.couchbase.lite.Expression.CompoundExpression.OpType;
						public static valueOf(param0: string): com.couchbase.lite.Expression.CompoundExpression.OpType;
						public static values(): native.Array<com.couchbase.lite.Expression.CompoundExpression.OpType>;
					}
				}
				export class FunctionExpresson extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.FunctionExpresson>;
				}
				export class ParameterExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.ParameterExpression>;
				}
				export class UnaryExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.UnaryExpression>;
				}
				export module UnaryExpression {
					export class OpType {
						public static class: java.lang.Class<com.couchbase.lite.Expression.UnaryExpression.OpType>;
						public static Missing: com.couchbase.lite.Expression.UnaryExpression.OpType;
						public static NotMissing: com.couchbase.lite.Expression.UnaryExpression.OpType;
						public static NotNull: com.couchbase.lite.Expression.UnaryExpression.OpType;
						public static Null: com.couchbase.lite.Expression.UnaryExpression.OpType;
						public static valueOf(param0: string): com.couchbase.lite.Expression.UnaryExpression.OpType;
						public static values(): native.Array<com.couchbase.lite.Expression.UnaryExpression.OpType>;
					}
				}
				export class ValueExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.ValueExpression>;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Fleece extends com.couchbase.litecore.fleece.FLConstants.FLValueType {
				public static class: java.lang.Class<com.couchbase.lite.Fleece>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class From extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.JoinRouter, com.couchbase.lite.WhereRouter, com.couchbase.lite.GroupByRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.From>;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
				public execute(): com.couchbase.lite.ResultSet;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public join(param0: native.Array<com.couchbase.lite.Join>): com.couchbase.lite.Joins;
				public where(param0: com.couchbase.lite.Expression): com.couchbase.lite.Where;
				public orderBy(param0: native.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public groupBy(param0: native.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class FromRouter {
				public static class: java.lang.Class<com.couchbase.lite.FromRouter>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.FromRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					from(param0: com.couchbase.lite.DataSource): com.couchbase.lite.From;
				});
				public constructor();
				public from(param0: com.couchbase.lite.DataSource): com.couchbase.lite.From;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class FullTextExpression {
				public static class: java.lang.Class<com.couchbase.lite.FullTextExpression>;
				public match(param0: string): com.couchbase.lite.Expression;
				public static index(param0: string): com.couchbase.lite.FullTextExpression;
			}
			export module FullTextExpression {
				export class FullTextMatchExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.FullTextExpression.FullTextMatchExpression>;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class FullTextFunction {
				public static class: java.lang.Class<com.couchbase.lite.FullTextFunction>;
				public static rank(param0: string): com.couchbase.lite.Expression;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class FullTextIndex extends com.couchbase.lite.AbstractIndex {
				public static class: java.lang.Class<com.couchbase.lite.FullTextIndex>;
				public setLanguage(param0: string): com.couchbase.lite.FullTextIndex;
				public ignoreAccents(param0: boolean): com.couchbase.lite.FullTextIndex;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class FullTextIndexItem {
				public static class: java.lang.Class<com.couchbase.lite.FullTextIndexItem>;
				public static property(param0: string): com.couchbase.lite.FullTextIndexItem;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Function {
				public static class: java.lang.Class<com.couchbase.lite.Function>;
				public static abs(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static contains(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static length(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static trunc(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static ln(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static trim(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static e(): com.couchbase.lite.Expression;
				public static rtrim(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static sum(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static upper(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static sign(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static tan(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static degrees(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static avg(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static round(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static min(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static max(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static atan2(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static cos(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static pi(): com.couchbase.lite.Expression;
				public static ltrim(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static atan(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static acos(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static power(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static trunc(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static asin(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static sqrt(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static floor(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static radians(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static ceil(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static lower(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static exp(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static round(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static count(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static log(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static sin(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class GroupBy extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.HavingRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.GroupBy>;
				public having(param0: com.couchbase.lite.Expression): com.couchbase.lite.Having;
				public execute(): com.couchbase.lite.ResultSet;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public orderBy(param0: native.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class GroupByRouter {
				public static class: java.lang.Class<com.couchbase.lite.GroupByRouter>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.GroupByRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					groupBy(param0: native.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
				});
				public constructor();
				public groupBy(param0: native.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Having extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.Having>;
				public execute(): com.couchbase.lite.ResultSet;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public orderBy(param0: native.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class HavingRouter {
				public static class: java.lang.Class<com.couchbase.lite.HavingRouter>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.HavingRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					having(param0: com.couchbase.lite.Expression): com.couchbase.lite.Having;
				});
				public constructor();
				public having(param0: com.couchbase.lite.Expression): com.couchbase.lite.Having;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Index {
				public static class: java.lang.Class<com.couchbase.lite.Index>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.Index interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class IndexBuilder {
				public static class: java.lang.Class<com.couchbase.lite.IndexBuilder>;
				public static fullTextIndex(param0: native.Array<com.couchbase.lite.FullTextIndexItem>): com.couchbase.lite.FullTextIndex;
				public static valueIndex(param0: native.Array<com.couchbase.lite.ValueIndexItem>): com.couchbase.lite.ValueIndex;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class IndexType {
				public static class: java.lang.Class<com.couchbase.lite.IndexType>;
				public static Value: com.couchbase.lite.IndexType;
				public static FullText: com.couchbase.lite.IndexType;
				public static Geo: com.couchbase.lite.IndexType;
				public static values(): native.Array<com.couchbase.lite.IndexType>;
				public static valueOf(param0: string): com.couchbase.lite.IndexType;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Join {
				public static class: java.lang.Class<com.couchbase.lite.Join>;
				public static crossJoin(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join;
				public static join(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
				public static leftJoin(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
				public static leftOuterJoin(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
				public static innerJoin(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
			}
			export module Join {
				export class On extends com.couchbase.lite.Join {
					public static class: java.lang.Class<com.couchbase.lite.Join.On>;
					public on(param0: com.couchbase.lite.Expression): com.couchbase.lite.Join;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class JoinRouter {
				public static class: java.lang.Class<com.couchbase.lite.JoinRouter>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.JoinRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					join(param0: native.Array<com.couchbase.lite.Join>): com.couchbase.lite.Joins;
				});
				public constructor();
				public join(param0: native.Array<com.couchbase.lite.Join>): com.couchbase.lite.Joins;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Joins extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.WhereRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.Joins>;
				public execute(): com.couchbase.lite.ResultSet;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public where(param0: com.couchbase.lite.Expression): com.couchbase.lite.Where;
				public orderBy(param0: native.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Limit extends com.couchbase.lite.AbstractQuery {
				public static class: java.lang.Class<com.couchbase.lite.Limit>;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.LimitRouter>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.LimitRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
					limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				});
				public constructor();
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ListenerToken {
				public static class: java.lang.Class<com.couchbase.lite.ListenerToken>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.ListenerToken interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class LiveQuery extends com.couchbase.lite.DatabaseChangeListener {
				public static class: java.lang.Class<com.couchbase.lite.LiveQuery>;
				public changed(param0: com.couchbase.lite.DatabaseChange): void;
				public finalize(): void;
				public toString(): string;
				public changed(param0: any): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class LogDomain {
				public static class: java.lang.Class<com.couchbase.lite.LogDomain>;
				public static ALL: com.couchbase.lite.LogDomain;
				public static DATABASE: com.couchbase.lite.LogDomain;
				public static QUERY: com.couchbase.lite.LogDomain;
				public static REPLICATOR: com.couchbase.lite.LogDomain;
				public static NETWORK: com.couchbase.lite.LogDomain;
				public static values(): native.Array<com.couchbase.lite.LogDomain>;
				public static valueOf(param0: string): com.couchbase.lite.LogDomain;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class LogLevel {
				public static class: java.lang.Class<com.couchbase.lite.LogLevel>;
				public static DEBUG: com.couchbase.lite.LogLevel;
				public static VERBOSE: com.couchbase.lite.LogLevel;
				public static INFO: com.couchbase.lite.LogLevel;
				public static WARNING: com.couchbase.lite.LogLevel;
				public static ERROR: com.couchbase.lite.LogLevel;
				public static NONE: com.couchbase.lite.LogLevel;
				public static values(): native.Array<com.couchbase.lite.LogLevel>;
				public static valueOf(param0: string): com.couchbase.lite.LogLevel;
				public getValue(): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class MValueDelegate implements com.couchbase.litecore.fleece.MValue.Delegate, com.couchbase.litecore.fleece.FLConstants.FLValueType {
				public static class: java.lang.Class<com.couchbase.lite.MValueDelegate>;
				public toNative(param0: com.couchbase.litecore.fleece.MValue, param1: com.couchbase.litecore.fleece.MCollection, param2: java.util.concurrent.atomic.AtomicBoolean): any;
				public encodeNative(param0: com.couchbase.litecore.fleece.Encoder, param1: any): void;
				public collectionFromNative(param0: any): com.couchbase.litecore.fleece.MCollection;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Meta {
				public static class: java.lang.Class<com.couchbase.lite.Meta>;
				public static id: com.couchbase.lite.MetaExpression;
				public static sequence: com.couchbase.lite.MetaExpression;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class MetaExpression extends com.couchbase.lite.Expression {
				public static class: java.lang.Class<com.couchbase.lite.MetaExpression>;
				public from(param0: string): com.couchbase.lite.Expression;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class MutableArray extends com.couchbase.lite.Array implements com.couchbase.lite.MutableArrayInterface {
				public static class: java.lang.Class<com.couchbase.lite.MutableArray>;
				public insertBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
				public addDictionary(param0: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
				public insertArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
				public insertDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArray;
				public setDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArray;
				public insertNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArray;
				public setDouble(param0: number, param1: number): com.couchbase.lite.MutableArray;
				public remove(param0: number): com.couchbase.lite.MutableArray;
				public insertDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
				public insertDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArray;
				public addDictionary(param0: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArray;
				public insertFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public getDictionary(param0: number): com.couchbase.lite.Dictionary;
				public setInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public setBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArray;
				public addArray(param0: com.couchbase.lite.Array): com.couchbase.lite.MutableArray;
				public addFloat(param0: number): com.couchbase.lite.MutableArray;
				public insertDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public insertLong(param0: number, param1: number): com.couchbase.lite.MutableArray;
				public setValue(param0: number, param1: any): com.couchbase.lite.MutableArray;
				public getString(param0: number): string;
				public getNumber(param0: number): java.lang.Number;
				public setString(param0: number, param1: string): com.couchbase.lite.MutableArray;
				public insertInt(param0: number, param1: number): com.couchbase.lite.MutableArray;
				public insertValue(param0: number, param1: any): com.couchbase.lite.MutableArray;
				public addInt(param0: number): com.couchbase.lite.MutableArray;
				public setData(param0: java.util.List<any>): com.couchbase.lite.MutableArrayInterface;
				public toList(): java.util.List<any>;
				public addLong(param0: number): com.couchbase.lite.MutableArrayInterface;
				public insertDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
				public addFloat(param0: number): com.couchbase.lite.MutableArrayInterface;
				public insertNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
				public insertValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
				public setLong(param0: number, param1: number): com.couchbase.lite.MutableArray;
				public setBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArray;
				public addValue(param0: any): com.couchbase.lite.MutableArrayInterface;
				public getBlob(param0: number): com.couchbase.lite.Blob;
				public getValue(param0: number): any;
				public count(): number;
				public insertInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public setBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
				public setBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
				public encodeTo(param0: com.couchbase.litecore.fleece.FLEncoder): void;
				public setArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArray;
				public insertFloat(param0: number, param1: number): com.couchbase.lite.MutableArray;
				public setData(param0: java.util.List<any>): com.couchbase.lite.MutableArray;
				public getDouble(param0: number): number;
				public insertDouble(param0: number, param1: number): com.couchbase.lite.MutableArray;
				public getDictionary(param0: number): com.couchbase.lite.MutableDictionary;
				public getDictionary(param0: number): com.couchbase.lite.MutableDictionaryInterface;
				public constructor();
				public addBoolean(param0: boolean): com.couchbase.lite.MutableArray;
				public setDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public setArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
				public addNumber(param0: java.lang.Number): com.couchbase.lite.MutableArray;
				public getInt(param0: number): number;
				public setFloat(param0: number, param1: number): com.couchbase.lite.MutableArray;
				public insertBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArray;
				public setLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public addString(param0: string): com.couchbase.lite.MutableArray;
				public addDouble(param0: number): com.couchbase.lite.MutableArray;
				public setString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
				public setDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
				public addInt(param0: number): com.couchbase.lite.MutableArrayInterface;
				public insertArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArray;
				public insertBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
				public getArray(param0: number): com.couchbase.lite.MutableArrayInterface;
				public addNumber(param0: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
				public addBoolean(param0: boolean): com.couchbase.lite.MutableArrayInterface;
				public getDate(param0: number): java.util.Date;
				public getBoolean(param0: number): boolean;
				public insertBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArray;
				public addBlob(param0: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
				public addDate(param0: java.util.Date): com.couchbase.lite.MutableArrayInterface;
				public getArray(param0: number): com.couchbase.lite.ArrayInterface;
				public getFloat(param0: number): number;
				public getArray(param0: number): com.couchbase.lite.Array;
				public insertString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
				public addDate(param0: java.util.Date): com.couchbase.lite.MutableArray;
				public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
				public insertString(param0: number, param1: string): com.couchbase.lite.MutableArray;
				public setNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
				public setFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public insertLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public addString(param0: string): com.couchbase.lite.MutableArrayInterface;
				public getArray(param0: number): com.couchbase.lite.MutableArray;
				public addDouble(param0: number): com.couchbase.lite.MutableArrayInterface;
				public getLong(param0: number): number;
				public addLong(param0: number): com.couchbase.lite.MutableArray;
				public setDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArray;
				public addValue(param0: any): com.couchbase.lite.MutableArray;
				public setValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
				public addBlob(param0: com.couchbase.lite.Blob): com.couchbase.lite.MutableArray;
				public addArray(param0: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
				public setInt(param0: number, param1: number): com.couchbase.lite.MutableArray;
				public setDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
				public constructor(param0: java.util.List<any>);
				public setNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArray;
				public remove(param0: number): com.couchbase.lite.MutableArrayInterface;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class MutableArrayInterface extends com.couchbase.lite.ArrayInterface {
				public static class: java.lang.Class<com.couchbase.lite.MutableArrayInterface>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.MutableArrayInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setData(param0: java.util.List<any>): com.couchbase.lite.MutableArrayInterface;
					setValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
					setString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
					setNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
					setInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					setLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					setFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					setDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					setBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
					setBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
					setDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
					setArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
					setDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
					addValue(param0: any): com.couchbase.lite.MutableArrayInterface;
					addString(param0: string): com.couchbase.lite.MutableArrayInterface;
					addNumber(param0: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
					addInt(param0: number): com.couchbase.lite.MutableArrayInterface;
					addLong(param0: number): com.couchbase.lite.MutableArrayInterface;
					addFloat(param0: number): com.couchbase.lite.MutableArrayInterface;
					addDouble(param0: number): com.couchbase.lite.MutableArrayInterface;
					addBoolean(param0: boolean): com.couchbase.lite.MutableArrayInterface;
					addBlob(param0: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
					addDate(param0: java.util.Date): com.couchbase.lite.MutableArrayInterface;
					addArray(param0: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
					addDictionary(param0: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
					insertValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
					insertString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
					insertNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
					insertInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					insertLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					insertFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					insertDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					insertBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
					insertBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
					insertDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
					insertArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
					insertDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
					remove(param0: number): com.couchbase.lite.MutableArrayInterface;
					getArray(param0: number): com.couchbase.lite.MutableArrayInterface;
					getDictionary(param0: number): com.couchbase.lite.MutableDictionaryInterface;
					count(): number;
					getValue(param0: number): any;
					getString(param0: number): string;
					getNumber(param0: number): java.lang.Number;
					getInt(param0: number): number;
					getLong(param0: number): number;
					getFloat(param0: number): number;
					getDouble(param0: number): number;
					getBoolean(param0: number): boolean;
					getBlob(param0: number): com.couchbase.lite.Blob;
					getDate(param0: number): java.util.Date;
					getArray(param0: number): com.couchbase.lite.ArrayInterface;
					getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
					toList(): java.util.List<any>;
				});
				public constructor();
				public insertBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
				public getDouble(param0: number): number;
				public addDictionary(param0: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
				public getDictionary(param0: number): com.couchbase.lite.MutableDictionaryInterface;
				public insertArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
				public setDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public insertDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
				public setArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
				public getInt(param0: number): number;
				public setLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public setString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
				public setDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
				public addInt(param0: number): com.couchbase.lite.MutableArrayInterface;
				public insertBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
				public getArray(param0: number): com.couchbase.lite.MutableArrayInterface;
				public addNumber(param0: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
				public addBoolean(param0: boolean): com.couchbase.lite.MutableArrayInterface;
				public insertFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public getDate(param0: number): java.util.Date;
				public setInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public getBoolean(param0: number): boolean;
				public insertDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public addBlob(param0: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
				public addDate(param0: java.util.Date): com.couchbase.lite.MutableArrayInterface;
				public getArray(param0: number): com.couchbase.lite.ArrayInterface;
				public getFloat(param0: number): number;
				public insertString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
				public getString(param0: number): string;
				public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: number): java.lang.Number;
				public setNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
				public setFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public insertLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public setData(param0: java.util.List<any>): com.couchbase.lite.MutableArrayInterface;
				public toList(): java.util.List<any>;
				public addString(param0: string): com.couchbase.lite.MutableArrayInterface;
				public addDouble(param0: number): com.couchbase.lite.MutableArrayInterface;
				public getLong(param0: number): number;
				public addLong(param0: number): com.couchbase.lite.MutableArrayInterface;
				public insertDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
				public addFloat(param0: number): com.couchbase.lite.MutableArrayInterface;
				public insertNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
				public insertValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
				public setValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
				public addValue(param0: any): com.couchbase.lite.MutableArrayInterface;
				public addArray(param0: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
				public getBlob(param0: number): com.couchbase.lite.Blob;
				public setDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
				public getValue(param0: number): any;
				public count(): number;
				public insertInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public setBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
				public setBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
				public remove(param0: number): com.couchbase.lite.MutableArrayInterface;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class MutableDictionary extends com.couchbase.lite.Dictionary implements com.couchbase.lite.MutableDictionaryInterface {
				public static class: java.lang.Class<com.couchbase.lite.MutableDictionary>;
				public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDictionaryInterface;
				public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionary;
				public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionary;
				public constructor();
				public getArray(param0: string): com.couchbase.lite.MutableArray;
				public remove(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public getNumber(param0: string): java.lang.Number;
				public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionaryInterface;
				public getDictionary(param0: string): com.couchbase.lite.Dictionary;
				public getBoolean(param0: string): boolean;
				public getFloat(param0: string): number;
				public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDictionary;
				public setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionary;
				public setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getLong(param0: string): number;
				public setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionaryInterface;
				public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionaryInterface;
				public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionary;
				public setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public constructor(param0: java.util.Map<string,any>);
				public setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionaryInterface;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getDictionary(param0: string): com.couchbase.lite.MutableDictionary;
				public isChanged(): boolean;
				public getArray(param0: string): com.couchbase.lite.Array;
				public getDictionary(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public finalize(): void;
				public setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionary;
				public getKeys(): java.util.List<string>;
				public setString(param0: string, param1: string): com.couchbase.lite.MutableDictionary;
				public getValue(param0: string): any;
				public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionaryInterface;
				public getArray(param0: string): com.couchbase.lite.MutableArrayInterface;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public setString(param0: string, param1: string): com.couchbase.lite.MutableDictionaryInterface;
				public contains(param0: string): boolean;
				public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getString(param0: string): string;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public remove(param0: string): com.couchbase.lite.MutableDictionary;
				public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDictionary;
				public setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionary;
				public setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionary;
				public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionaryInterface;
				public setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionary;
				public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionary;
				public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionary;
				public getDouble(param0: string): number;
				public getDate(param0: string): java.util.Date;
				public count(): number;
				public encodeTo(param0: com.couchbase.litecore.fleece.FLEncoder): void;
				public toMap(): java.util.Map<string,any>;
				public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDictionaryInterface;
				public getInt(param0: string): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class MutableDictionaryInterface extends com.couchbase.lite.DictionaryInterface {
				public static class: java.lang.Class<com.couchbase.lite.MutableDictionaryInterface>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.MutableDictionaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionaryInterface;
					setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionaryInterface;
					setString(param0: string, param1: string): com.couchbase.lite.MutableDictionaryInterface;
					setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDictionaryInterface;
					setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
					setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
					setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
					setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
					setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionaryInterface;
					setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionaryInterface;
					setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDictionaryInterface;
					setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionaryInterface;
					setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionaryInterface;
					remove(param0: string): com.couchbase.lite.MutableDictionaryInterface;
					getArray(param0: string): com.couchbase.lite.MutableArrayInterface;
					getDictionary(param0: string): com.couchbase.lite.MutableDictionaryInterface;
					count(): number;
					getKeys(): java.util.List<string>;
					getValue(param0: string): any;
					getString(param0: string): string;
					getNumber(param0: string): java.lang.Number;
					getInt(param0: string): number;
					getLong(param0: string): number;
					getFloat(param0: string): number;
					getDouble(param0: string): number;
					getBoolean(param0: string): boolean;
					getBlob(param0: string): com.couchbase.lite.Blob;
					getDate(param0: string): java.util.Date;
					getArray(param0: string): com.couchbase.lite.ArrayInterface;
					getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
					toMap(): java.util.Map<string,any>;
					contains(param0: string): boolean;
				});
				public constructor();
				public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDictionaryInterface;
				public getKeys(): java.util.List<string>;
				public getValue(param0: string): any;
				public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionaryInterface;
				public getArray(param0: string): com.couchbase.lite.MutableArrayInterface;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public setString(param0: string, param1: string): com.couchbase.lite.MutableDictionaryInterface;
				public remove(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public getNumber(param0: string): java.lang.Number;
				public contains(param0: string): boolean;
				public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionaryInterface;
				public getBoolean(param0: string): boolean;
				public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getString(param0: string): string;
				public getFloat(param0: string): number;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getLong(param0: string): number;
				public setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionaryInterface;
				public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionaryInterface;
				public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionaryInterface;
				public setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionaryInterface;
				public getDouble(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public getDate(param0: string): java.util.Date;
				public setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public count(): number;
				public toMap(): java.util.Map<string,any>;
				public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDictionaryInterface;
				public getInt(param0: string): number;
				public getDictionary(param0: string): com.couchbase.lite.MutableDictionaryInterface;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class MutableDocument extends com.couchbase.lite.Document implements com.couchbase.lite.MutableDictionaryInterface, com.couchbase.litecore.C4Constants {
				public static class: java.lang.Class<com.couchbase.lite.MutableDocument>;
				public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDictionaryInterface;
				public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDocument;
				public setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDocument;
				public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDocument;
				public constructor();
				public getArray(param0: string): com.couchbase.lite.MutableArray;
				public remove(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public getNumber(param0: string): java.lang.Number;
				public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionaryInterface;
				public getDictionary(param0: string): com.couchbase.lite.Dictionary;
				public getBoolean(param0: string): boolean;
				public getFloat(param0: string): number;
				public setLong(param0: string, param1: number): com.couchbase.lite.MutableDocument;
				public setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getLong(param0: string): number;
				public setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionaryInterface;
				public setValue(param0: string, param1: any): com.couchbase.lite.MutableDocument;
				public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionaryInterface;
				public setString(param0: string, param1: string): com.couchbase.lite.MutableDocument;
				public setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public constructor(param0: java.util.Map<string,any>);
				public setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionaryInterface;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getDictionary(param0: string): com.couchbase.lite.MutableDictionary;
				public getArray(param0: string): com.couchbase.lite.Array;
				public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDocument;
				public getDictionary(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDocument;
				public getKeys(): java.util.List<string>;
				public constructor(param0: string);
				public toMutable(): com.couchbase.lite.MutableDocument;
				public remove(param0: string): com.couchbase.lite.MutableDocument;
				public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDocument;
				public getValue(param0: string): any;
				public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionaryInterface;
				public getArray(param0: string): com.couchbase.lite.MutableArrayInterface;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public setString(param0: string, param1: string): com.couchbase.lite.MutableDictionaryInterface;
				public contains(param0: string): boolean;
				public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getString(param0: string): string;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public constructor(param0: string, param1: java.util.Map<string,any>);
				public setInt(param0: string, param1: number): com.couchbase.lite.MutableDocument;
				public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionaryInterface;
				public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDocument;
				public setFloat(param0: string, param1: number): com.couchbase.lite.MutableDocument;
				public getDouble(param0: string): number;
				public getDate(param0: string): java.util.Date;
				public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDocument;
				public count(): number;
				public toMap(): java.util.Map<string,any>;
				public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDictionaryInterface;
				public getInt(param0: string): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class NativeLibraryLoader {
				public static class: java.lang.Class<com.couchbase.lite.NativeLibraryLoader>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class NetworkReachabilityListener {
				public static class: java.lang.Class<com.couchbase.lite.NetworkReachabilityListener>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class NetworkReachabilityManager {
				public static class: java.lang.Class<com.couchbase.lite.NetworkReachabilityManager>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class OrderBy extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.OrderBy>;
				public execute(): com.couchbase.lite.ResultSet;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class OrderByRouter {
				public static class: java.lang.Class<com.couchbase.lite.OrderByRouter>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.OrderByRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					orderBy(param0: native.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				});
				public constructor();
				public orderBy(param0: native.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class Ordering {
				public static class: java.lang.Class<com.couchbase.lite.Ordering>;
				public static expression(param0: com.couchbase.lite.Expression): com.couchbase.lite.Ordering.SortOrder;
				public static property(param0: string): com.couchbase.lite.Ordering.SortOrder;
			}
			export module Ordering {
				export class SortOrder extends com.couchbase.lite.Ordering {
					public static class: java.lang.Class<com.couchbase.lite.Ordering.SortOrder>;
					public descending(): com.couchbase.lite.Ordering;
					public ascending(): com.couchbase.lite.Ordering;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Parameters {
				public static class: java.lang.Class<com.couchbase.lite.Parameters>;
				public setInt(param0: string, param1: number): com.couchbase.lite.Parameters;
				public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.Parameters;
				public setDouble(param0: string, param1: number): com.couchbase.lite.Parameters;
				public setLong(param0: string, param1: number): com.couchbase.lite.Parameters;
				public constructor(param0: com.couchbase.lite.Parameters);
				public setString(param0: string, param1: string): com.couchbase.lite.Parameters;
				public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.Parameters;
				public setValue(param0: string, param1: any): com.couchbase.lite.Parameters;
				public setBoolean(param0: string, param1: boolean): com.couchbase.lite.Parameters;
				public constructor();
				public setFloat(param0: string, param1: number): com.couchbase.lite.Parameters;
				public getValue(param0: string): any;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class PropertyExpression extends com.couchbase.lite.Expression {
				public static class: java.lang.Class<com.couchbase.lite.PropertyExpression>;
				public from(param0: string): com.couchbase.lite.Expression;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Query {
				public static class: java.lang.Class<com.couchbase.lite.Query>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.Query interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getParameters(): com.couchbase.lite.Parameters;
					setParameters(param0: com.couchbase.lite.Parameters): void;
					execute(): com.couchbase.lite.ResultSet;
					explain(): string;
					addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
					addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
					removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				});
				public constructor();
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class QueryBuilder {
				public static class: java.lang.Class<com.couchbase.lite.QueryBuilder>;
				public static selectDistinct(param0: native.Array<com.couchbase.lite.SelectResult>): com.couchbase.lite.Select;
				public static select(param0: native.Array<com.couchbase.lite.SelectResult>): com.couchbase.lite.Select;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class QueryChange {
				public static class: java.lang.Class<com.couchbase.lite.QueryChange>;
				public getResults(): com.couchbase.lite.ResultSet;
				public getError(): java.lang.Throwable;
				public getQuery(): com.couchbase.lite.Query;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class QueryChangeListener extends com.couchbase.lite.ChangeListener<com.couchbase.lite.QueryChange> {
				public static class: java.lang.Class<com.couchbase.lite.QueryChangeListener>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.QueryChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					changed(param0: com.couchbase.lite.QueryChange): void;
					changed(param0: any): void;
				});
				public constructor();
				public changed(param0: com.couchbase.lite.QueryChange): void;
				public changed(param0: any): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Replicator extends com.couchbase.lite.AbstractReplicator {
				public static class: java.lang.Class<com.couchbase.lite.Replicator>;
				public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatorChange {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorChange>;
				public getStatus(): com.couchbase.lite.AbstractReplicator.Status;
				public toString(): string;
				public getReplicator(): com.couchbase.lite.Replicator;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatorChangeListener {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorChangeListener>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.ReplicatorChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					changed(param0: com.couchbase.lite.ReplicatorChange): void;
				});
				public constructor();
				public changed(param0: com.couchbase.lite.ReplicatorChange): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatorChangeListenerToken extends com.couchbase.lite.ListenerToken {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorChangeListenerToken>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatorConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorConfiguration>;
				public setContinuous(param0: boolean): com.couchbase.lite.ReplicatorConfiguration;
				public setReplicatorType(param0: com.couchbase.lite.ReplicatorConfiguration.ReplicatorType): com.couchbase.lite.ReplicatorConfiguration;
				public setPinnedServerCertificate(param0: native.Array<number>): com.couchbase.lite.ReplicatorConfiguration;
				public setHeaders(param0: java.util.Map<string,string>): com.couchbase.lite.ReplicatorConfiguration;
				public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
				public getPinnedServerCertificate(): native.Array<number>;
				public setAuthenticator(param0: com.couchbase.lite.Authenticator): com.couchbase.lite.ReplicatorConfiguration;
				public getDatabase(): com.couchbase.lite.Database;
				public isContinuous(): boolean;
				public getHeaders(): java.util.Map<string,string>;
				public getChannels(): java.util.List<string>;
				public constructor(param0: com.couchbase.lite.Database, param1: com.couchbase.lite.Endpoint);
				public getDocumentIDs(): java.util.List<string>;
				public getReplicatorType(): com.couchbase.lite.ReplicatorConfiguration.ReplicatorType;
				public getAuthenticator(): com.couchbase.lite.Authenticator;
				public setChannels(param0: java.util.List<string>): com.couchbase.lite.ReplicatorConfiguration;
				public setDocumentIDs(param0: java.util.List<string>): com.couchbase.lite.ReplicatorConfiguration;
				public getTarget(): com.couchbase.lite.Endpoint;
			}
			export module ReplicatorConfiguration {
				export class ReplicatorType {
					public static class: java.lang.Class<com.couchbase.lite.ReplicatorConfiguration.ReplicatorType>;
					public static PUSH_AND_PULL: com.couchbase.lite.ReplicatorConfiguration.ReplicatorType;
					public static PUSH: com.couchbase.lite.ReplicatorConfiguration.ReplicatorType;
					public static PULL: com.couchbase.lite.ReplicatorConfiguration.ReplicatorType;
					public static valueOf(param0: string): com.couchbase.lite.ReplicatorConfiguration.ReplicatorType;
					public static values(): native.Array<com.couchbase.lite.ReplicatorConfiguration.ReplicatorType>;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Result extends java.lang.Object {
				public static class: java.lang.Class<com.couchbase.lite.Result>;
				public getDouble(param0: number): number;
				public getString(param0: number): string;
				public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: number): java.lang.Number;
				public getKeys(): java.util.List<string>;
				public getValue(param0: string): any;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: string): java.lang.Number;
				public contains(param0: string): boolean;
				public toList(): java.util.List<any>;
				public getLong(param0: number): number;
				public getBoolean(param0: string): boolean;
				public getDictionary(param0: string): com.couchbase.lite.Dictionary;
				public getString(param0: string): string;
				public getFloat(param0: string): number;
				public getInt(param0: number): number;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public getLong(param0: string): number;
				public getDate(param0: number): java.util.Date;
				public getBoolean(param0: number): boolean;
				public getDictionary(param0: number): com.couchbase.lite.Dictionary;
				public getBlob(param0: number): com.couchbase.lite.Blob;
				public getDouble(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public getDate(param0: string): java.util.Date;
				public iterator(): java.util.Iterator<string>;
				public getValue(param0: number): any;
				public count(): number;
				public getArray(param0: number): com.couchbase.lite.ArrayInterface;
				public toMap(): java.util.Map<string,any>;
				public getFloat(param0: number): number;
				public getInt(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.Array;
				public getArray(param0: number): com.couchbase.lite.Array;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ResultContext extends com.couchbase.lite.DocContext {
				public static class: java.lang.Class<com.couchbase.lite.ResultContext>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ResultSet extends java.lang.Iterable<com.couchbase.lite.Result> {
				public static class: java.lang.Class<com.couchbase.lite.ResultSet>;
				public allResults(): java.util.List<com.couchbase.lite.Result>;
				public next(): com.couchbase.lite.Result;
				public iterator(): java.util.Iterator<com.couchbase.lite.Result>;
				public finalize(): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Select extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.FromRouter {
				public static class: java.lang.Class<com.couchbase.lite.Select>;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public from(param0: com.couchbase.lite.DataSource): com.couchbase.lite.From;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class SelectResult {
				public static class: java.lang.Class<com.couchbase.lite.SelectResult>;
				public static property(param0: string): com.couchbase.lite.SelectResult.As;
				public static all(): com.couchbase.lite.SelectResult.From;
				public static expression(param0: com.couchbase.lite.Expression): com.couchbase.lite.SelectResult.As;
			}
			export module SelectResult {
				export class As extends com.couchbase.lite.SelectResult {
					public static class: java.lang.Class<com.couchbase.lite.SelectResult.As>;
					public as(param0: string): com.couchbase.lite.SelectResult;
				}
				export class From extends com.couchbase.lite.SelectResult {
					public static class: java.lang.Class<com.couchbase.lite.SelectResult.From>;
					public from(param0: string): com.couchbase.lite.SelectResult;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class SessionAuthenticator extends com.couchbase.lite.Authenticator {
				public static class: java.lang.Class<com.couchbase.lite.SessionAuthenticator>;
				public getCookieName(): string;
				public getSessionID(): string;
				public constructor(param0: string);
				public constructor(param0: string, param1: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class URLEndpoint extends com.couchbase.lite.Endpoint {
				public static class: java.lang.Class<com.couchbase.lite.URLEndpoint>;
				public getURL(): java.net.URI;
				public toString(): string;
				public constructor(param0: java.net.URI);
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ValueIndex extends com.couchbase.lite.AbstractIndex {
				public static class: java.lang.Class<com.couchbase.lite.ValueIndex>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ValueIndexItem {
				public static class: java.lang.Class<com.couchbase.lite.ValueIndexItem>;
				public static property(param0: string): com.couchbase.lite.ValueIndexItem;
				public static expression(param0: com.couchbase.lite.Expression): com.couchbase.lite.ValueIndexItem;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class VariableExpression extends com.couchbase.lite.Expression {
				public static class: java.lang.Class<com.couchbase.lite.VariableExpression>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Where extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.GroupByRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.Where>;
				public execute(): com.couchbase.lite.ResultSet;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public orderBy(param0: native.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public groupBy(param0: native.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class WhereRouter {
				public static class: java.lang.Class<com.couchbase.lite.WhereRouter>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.WhereRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					where(param0: com.couchbase.lite.Expression): com.couchbase.lite.Where;
				});
				public constructor();
				public where(param0: com.couchbase.lite.Expression): com.couchbase.lite.Where;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module replicator {
					export class CBLWebSocket extends com.couchbase.litecore.C4Socket {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.CBLWebSocket>;
						public requestClose(param0: number, param1: string): void;
						public static socket_open(param0: number, param1: number, param2: string, param3: string, param4: number, param5: string, param6: native.Array<number>): void;
						public start(): void;
						public close(): void;
						public completedReceive(param0: number): void;
						public send(param0: native.Array<number>): void;
					}
					export module CBLWebSocket {
						export class CBLWebSocketListener {
							public static class: java.lang.Class<com.couchbase.lite.internal.replicator.CBLWebSocket.CBLWebSocketListener>;
							public onMessage(param0: okhttp3.WebSocket, param1: okio.ByteString): void;
							public onOpen(param0: okhttp3.WebSocket, param1: okhttp3.Response): void;
							public onMessage(param0: okhttp3.WebSocket, param1: string): void;
							public onFailure(param0: okhttp3.WebSocket, param1: java.lang.Throwable, param2: okhttp3.Response): void;
							public onClosing(param0: okhttp3.WebSocket, param1: number, param2: string): void;
							public onClosed(param0: okhttp3.WebSocket, param1: number, param2: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module support {
					export class Log {
						public static class: java.lang.Class<com.couchbase.lite.internal.support.Log>;
						public static DATABASE: string;
						public static QUERY: string;
						public static SYNC: string;
						public static WEB_SOCKET: string;
						public static DEBUG: number;
						public static VERBOSE: number;
						public static INFO: number;
						public static WARN: number;
						public static ERROR: number;
						public static NONE: number;
						public static v(param0: string, param1: string): void;
						public static w(param0: string, param1: string): void;
						public static info(param0: string, param1: string, param2: java.lang.Throwable): void;
						public static info(param0: string, param1: string): void;
						public static w(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
						public static v(param0: string, param1: string, param2: native.Array<any>): void;
						public static v(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
						public static e(param0: string, param1: string): void;
						public static i(param0: string, param1: string, param2: java.lang.Throwable): void;
						public static w(param0: string, param1: java.lang.Throwable): void;
						public static i(param0: string, param1: string): void;
						public static i(param0: string, param1: string, param2: native.Array<any>): void;
						public static w(param0: string, param1: string, param2: java.lang.Throwable): void;
						public static setLogLevel(param0: com.couchbase.lite.LogDomain, param1: com.couchbase.lite.LogLevel): void;
						public static e(param0: string, param1: string, param2: native.Array<any>): void;
						public static i(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
						public static w(param0: string, param1: string, param2: native.Array<any>): void;
						public static e(param0: string, param1: string, param2: java.lang.Throwable): void;
						public static e(param0: string, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
						public static v(param0: string, param1: string, param2: java.lang.Throwable): void;
						public static enableLogging(param0: string, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module support {
					export class Logger {
						public static class: java.lang.Class<com.couchbase.lite.internal.support.Logger>;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class ClassUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.ClassUtils>;
						public static cast(param0: any, param1: java.lang.Class): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class DateUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.DateUtils>;
						public static fromJson(param0: string): java.util.Date;
						public static toJson(param0: java.util.Date): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class ExecutorUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.ExecutorUtils>;
						public static shutdownAndAwaitTermination(param0: java.util.concurrent.ExecutorService, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class FileUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.FileUtils>;
						public static deleteRecursive(param0: string): boolean;
						public static deleteRecursive(param0: java.io.File): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class JsonUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.JsonUtils>;
						public static fromJson(param0: org.json.JSONArray): java.util.List<any>;
						public static toJson(param0: java.util.List<any>): org.json.JSONArray;
						public static toJson(param0: java.util.Map<string,any>): org.json.JSONObject;
						public static fromJson(param0: org.json.JSONObject): java.util.Map<string,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class StringUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.StringUtils>;
						public static stringByDeletingLastPathComponent(param0: string): string;
						public static lastPathComponent(param0: string): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4 {
				public static class: java.lang.Class<com.couchbase.litecore.C4>;
				public static getBuildInfo(): string;
				public static getenv(param0: string): string;
				public static getVersion(): string;
				public static setenv(param0: string, param1: string, param2: number): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4Base {
				public static class: java.lang.Class<com.couchbase.litecore.C4Base>;
				public static getMessage(param0: number, param1: number, param2: number): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4BlobKey {
				public static class: java.lang.Class<com.couchbase.litecore.C4BlobKey>;
				public finalize(): void;
				public toString(): string;
				public constructor(param0: string);
				public free(): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4BlobReadStream {
				public static class: java.lang.Class<com.couchbase.litecore.C4BlobReadStream>;
				public close(): void;
				public read(param0: number): native.Array<number>;
				public finalize(): void;
				public seek(param0: number): void;
				public getLength(): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4BlobStore {
				public static class: java.lang.Class<com.couchbase.litecore.C4BlobStore>;
				public openWriteStream(): com.couchbase.litecore.C4BlobWriteStream;
				public getFilePath(param0: com.couchbase.litecore.C4BlobKey): string;
				public delete(): void;
				public getContents(param0: com.couchbase.litecore.C4BlobKey): com.couchbase.litecore.fleece.FLSliceResult;
				public delete(param0: com.couchbase.litecore.C4BlobKey): void;
				public finalize(): void;
				public getSize(param0: com.couchbase.litecore.C4BlobKey): number;
				public create(param0: native.Array<number>): com.couchbase.litecore.C4BlobKey;
				public static open(param0: string, param1: number): com.couchbase.litecore.C4BlobStore;
				public free(): void;
				public openReadStream(param0: com.couchbase.litecore.C4BlobKey): com.couchbase.litecore.C4BlobReadStream;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4BlobWriteStream {
				public static class: java.lang.Class<com.couchbase.litecore.C4BlobWriteStream>;
				public computeBlobKey(): com.couchbase.litecore.C4BlobKey;
				public close(): void;
				public install(): void;
				public write(param0: native.Array<number>): void;
				public finalize(): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4Constants {
				public static class: java.lang.Class<com.couchbase.litecore.C4Constants>;
				/**
				 * Constructs a new instance of the com.couchbase.litecore.C4Constants interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
			export module C4Constants {
				export class C4DatabaseFlags {
					public static class: java.lang.Class<com.couchbase.litecore.C4Constants.C4DatabaseFlags>;
					/**
					 * Constructs a new instance of the com.couchbase.litecore.C4Constants$C4DatabaseFlags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static kC4DB_Create: number;
					public static kC4DB_AutoCompact: number;
					public static kC4DB_ReadOnly: number;
					public static kC4DB_SharedKeys: number;
					public static kC4DB_NonObservable: number;
					public static kC4DB_NoUpgrade: number;
				}
				export class C4DocumentFlags {
					public static class: java.lang.Class<com.couchbase.litecore.C4Constants.C4DocumentFlags>;
					/**
					 * Constructs a new instance of the com.couchbase.litecore.C4Constants$C4DocumentFlags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static kDocExists: number;
					public static kDocHasAttachments: number;
					public static kDocDeleted: number;
					public static kDocConflicted: number;
				}
				export class C4DocumentVersioning {
					public static class: java.lang.Class<com.couchbase.litecore.C4Constants.C4DocumentVersioning>;
					/**
					 * Constructs a new instance of the com.couchbase.litecore.C4Constants$C4DocumentVersioning interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static kC4RevisionTrees: number;
					public static kC4VersionVectors: number;
				}
				export class C4EncryptionAlgorithm {
					public static class: java.lang.Class<com.couchbase.litecore.C4Constants.C4EncryptionAlgorithm>;
					/**
					 * Constructs a new instance of the com.couchbase.litecore.C4Constants$C4EncryptionAlgorithm interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static kC4EncryptionAES256: number;
					public static kC4EncryptionNone: number;
				}
				export class C4EncryptionKeySize {
					public static class: java.lang.Class<com.couchbase.litecore.C4Constants.C4EncryptionKeySize>;
					/**
					 * Constructs a new instance of the com.couchbase.litecore.C4Constants$C4EncryptionKeySize interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static kC4EncryptionKeySizeAES256: number;
				}
				export class C4EnumeratorFlags {
					public static class: java.lang.Class<com.couchbase.litecore.C4Constants.C4EnumeratorFlags>;
					/**
					 * Constructs a new instance of the com.couchbase.litecore.C4Constants$C4EnumeratorFlags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static kC4Descending: number;
					public static kC4IncludeNonConflicted: number;
					public static kC4Default: number;
					public static kC4IncludeDeleted: number;
					public static kC4IncludeBodies: number;
				}
				export class C4ErrorDomain {
					public static class: java.lang.Class<com.couchbase.litecore.C4Constants.C4ErrorDomain>;
					/**
					 * Constructs a new instance of the com.couchbase.litecore.C4Constants$C4ErrorDomain interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static SQLiteDomain: number;
					public static NetworkDomain: number;
					public static kC4MaxErrorDomainPlus1: number;
					public static POSIXDomain: number;
					public static WebSocketDomain: number;
					public static LiteCoreDomain: number;
					public static FleeceDomain: number;
				}
				export class C4IndexType {
					public static class: java.lang.Class<com.couchbase.litecore.C4Constants.C4IndexType>;
					/**
					 * Constructs a new instance of the com.couchbase.litecore.C4Constants$C4IndexType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static kC4GeoIndex: number;
					public static kC4FullTextIndex: number;
					public static kC4ValueIndex: number;
				}
				export class C4LogDomain {
					public static class: java.lang.Class<com.couchbase.litecore.C4Constants.C4LogDomain>;
					/**
					 * Constructs a new instance of the com.couchbase.litecore.C4Constants$C4LogDomain interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static Query: string;
					public static Database: string;
					public static Sync: string;
					public static WebSocket: string;
					public static SyncBusy: string;
					public static BLIP: string;
				}
				export class C4LogLevel {
					public static class: java.lang.Class<com.couchbase.litecore.C4Constants.C4LogLevel>;
					/**
					 * Constructs a new instance of the com.couchbase.litecore.C4Constants$C4LogLevel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static kC4LogDebug: number;
					public static kC4LogInfo: number;
					public static kC4LogNone: number;
					public static kC4LogWarning: number;
					public static kC4LogVerbose: number;
					public static kC4LogError: number;
				}
				export class C4RevisionFlags {
					public static class: java.lang.Class<com.couchbase.litecore.C4Constants.C4RevisionFlags>;
					/**
					 * Constructs a new instance of the com.couchbase.litecore.C4Constants$C4RevisionFlags interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static kRevKeepBody: number;
					public static kRevDeleted: number;
					public static kRevHasAttachments: number;
					public static kRevLeaf: number;
					public static kRevNew: number;
					public static kRevIsConflict: number;
				}
				export class LiteCoreError {
					public static class: java.lang.Class<com.couchbase.litecore.C4Constants.LiteCoreError>;
					/**
					 * Constructs a new instance of the com.couchbase.litecore.C4Constants$LiteCoreError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static kC4ErrorMissingIndex: number;
					public static kC4ErrorNotFound: number;
					public static kC4ErrorInvalidQueryParam: number;
					public static kC4ErrorInvalidParameter: number;
					public static kC4ErrorUnsupported: number;
					public static kC4ErrorInvalidQuery: number;
					public static kC4ErrorMemoryError: number;
					public static kC4ErrorRemoteError: number;
					public static kC4ErrorNotInTransaction: number;
					public static kC4ErrorBusy: number;
					public static kC4ErrorConflict: number;
					public static kC4NumErrorCodesPlus1: number;
					public static kC4ErrorBadRevisionID: number;
					public static kC4ErrorUnimplemented: number;
					public static kC4ErrorUnexpectedError: number;
					public static kC4ErrorCantUpgradeDatabase: number;
					public static kC4ErrorCrypto: number;
					public static kC4ErrorUnsupportedEncryption: number;
					public static kC4ErrorIOError: number;
					public static kC4ErrorCorruptData: number;
					public static kC4ErrorWrongFormat: number;
					public static kC4ErrorCorruptRevisionData: number;
					public static kC4ErrorNotOpen: number;
					public static kC4ErrorTransactionNotClosed: number;
					public static kC4ErrorNotWriteable: number;
					public static kC4ErrorCantOpenFile: number;
					public static kC4ErrorBadDocID: number;
					public static kC4ErrorDatabaseTooNew: number;
					public static kC4ErrorNotADatabaseFile: number;
					public static kC4ErrorAssertionFailed: number;
					public static kC4ErrorDatabaseTooOld: number;
				}
				export class NetworkError {
					public static class: java.lang.Class<com.couchbase.litecore.C4Constants.NetworkError>;
					/**
					 * Constructs a new instance of the com.couchbase.litecore.C4Constants$NetworkError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static kC4NetErrDNSFailure: number;
					public static kC4NetErrTimeout: number;
					public static kC4NetErrTooManyRedirects: number;
					public static kC4NetErrTLSHandshakeFailed: number;
					public static kC4NetErrUnknownHost: number;
					public static kC4NetErrTLSClientCertRequired: number;
					public static kC4NetErrInvalidRedirect: number;
					public static kC4NetErrInvalidURL: number;
					public static kC4NetErrTLSCertUnknownRoot: number;
					public static kC4NetErrTLSClientCertRejected: number;
					public static kC4NetErrTLSCertExpired: number;
					public static kC4NetErrTLSCertUntrusted: number;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4Database extends com.couchbase.litecore.C4Constants {
				public static class: java.lang.Class<com.couchbase.litecore.C4Database>;
				public beginTransaction(): void;
				public endTransaction(param0: boolean): void;
				public create(param0: string, param1: native.Array<number>, param2: number): com.couchbase.litecore.C4Document;
				public constructor(param0: string, param1: number, param2: string, param3: number, param4: number, param5: native.Array<number>);
				public get(param0: string, param1: boolean): com.couchbase.litecore.C4Document;
				public getPrivateUUID(): native.Array<number>;
				public finalize(): void;
				public getDocumentCount(): number;
				public createFleeceEncoder(): com.couchbase.litecore.fleece.FLEncoder;
				public getMaxRevTreeDepth(): number;
				public compact(): void;
				public getLastSequence(): number;
				public put(param0: com.couchbase.litecore.fleece.FLSliceResult, param1: string, param2: number, param3: boolean, param4: boolean, param5: native.Array<string>, param6: boolean, param7: number, param8: number): com.couchbase.litecore.C4Document;
				public createDatabaseObserver(param0: com.couchbase.litecore.C4DatabaseObserverListener, param1: any): com.couchbase.litecore.C4DatabaseObserver;
				public delete(): void;
				public rawGet(param0: string, param1: string): com.couchbase.litecore.C4RawDocument;
				public enumerateAllDocs(param0: number): com.couchbase.litecore.C4DocEnumerator;
				public getFLSharedKeys(): com.couchbase.litecore.fleece.FLSharedKeys;
				public getExpiration(param0: string): number;
				public nextDocExpiration(): number;
				public rawPut(param0: string, param1: string, param2: string, param3: string): void;
				public encodeJSON(param0: native.Array<number>): com.couchbase.litecore.fleece.FLSliceResult;
				public createReplicator(param0: com.couchbase.litecore.C4Socket, param1: number, param2: number, param3: native.Array<number>, param4: com.couchbase.litecore.C4ReplicatorListener, param5: any): com.couchbase.litecore.C4Replicator;
				public setMaxRevTreeDepth(param0: number): void;
				public close(): void;
				public setExpiration(param0: string, param1: number): void;
				public getBlobStore(): com.couchbase.litecore.C4BlobStore;
				public createReplicator(param0: string, param1: string, param2: number, param3: string, param4: string, param5: com.couchbase.litecore.C4Database, param6: number, param7: number, param8: native.Array<number>, param9: com.couchbase.litecore.C4ReplicatorListener, param10: any, param11: number, param12: number): com.couchbase.litecore.C4Replicator;
				public free(): boolean;
				public static deleteAtPath(param0: string): void;
				public createQuery(param0: string): com.couchbase.litecore.C4Query;
				public getPath(): string;
				public createDocumentObserver(param0: string, param1: com.couchbase.litecore.C4DocumentObserverListener, param2: any): com.couchbase.litecore.C4DocumentObserver;
				public getIndexes(): com.couchbase.litecore.fleece.FLValue;
				public isInTransaction(): boolean;
				public rekey(param0: number, param1: native.Array<number>): void;
				public getPublicUUID(): native.Array<number>;
				public static copy(param0: string, param1: string, param2: number, param3: string, param4: number, param5: number, param6: native.Array<number>): void;
				public put(param0: native.Array<number>, param1: string, param2: number, param3: boolean, param4: boolean, param5: native.Array<string>, param6: boolean, param7: number, param8: number): com.couchbase.litecore.C4Document;
				public create(param0: string, param1: com.couchbase.litecore.fleece.FLSliceResult, param2: number): com.couchbase.litecore.C4Document;
				public enumerateChanges(param0: number, param1: number): com.couchbase.litecore.C4DocEnumerator;
				public deleteIndex(param0: string): void;
				public createIndex(param0: string, param1: string, param2: number, param3: string, param4: boolean): boolean;
				public getBySequence(param0: number): com.couchbase.litecore.C4Document;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4DatabaseChange {
				public static class: java.lang.Class<com.couchbase.litecore.C4DatabaseChange>;
				public isExternal(): boolean;
				public getBodySize(): number;
				public getSequence(): number;
				public getRevID(): string;
				public constructor();
				public getDocID(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4DatabaseObserver {
				public static class: java.lang.Class<com.couchbase.litecore.C4DatabaseObserver>;
				public finalize(): void;
				public free(): void;
				public getChanges(param0: number): native.Array<com.couchbase.litecore.C4DatabaseChange>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4DatabaseObserverListener {
				public static class: java.lang.Class<com.couchbase.litecore.C4DatabaseObserverListener>;
				/**
				 * Constructs a new instance of the com.couchbase.litecore.C4DatabaseObserverListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					callback(param0: com.couchbase.litecore.C4DatabaseObserver, param1: any): void;
				});
				public constructor();
				public callback(param0: com.couchbase.litecore.C4DatabaseObserver, param1: any): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4DocEnumerator extends com.couchbase.litecore.C4Constants {
				public static class: java.lang.Class<com.couchbase.litecore.C4DocEnumerator>;
				public getDocument(): com.couchbase.litecore.C4Document;
				public close(): void;
				public next(): boolean;
				public finalize(): void;
				public free(): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4Document extends com.couchbase.litecore.RefCounted implements com.couchbase.litecore.C4Constants {
				public static class: java.lang.Class<com.couchbase.litecore.C4Document>;
				public getSelectedFlags(): number;
				public hasRevisionBody(): boolean;
				public getSequence(): number;
				public bodyAsJSON(param0: boolean): string;
				public finalize(): void;
				public selectCurrentRevision(): boolean;
				public selectParentRevision(): boolean;
				public resolveConflict(param0: string, param1: string, param2: native.Array<number>, param3: number): void;
				public getSelectedBody2(): com.couchbase.litecore.fleece.FLDict;
				public getDocID(): string;
				public save(param0: number): void;
				public selectNextLeafRevision(param0: boolean, param1: boolean): void;
				public deleted(): boolean;
				public isSelectedRevFlags(param0: number): boolean;
				public getFlags(): number;
				public getRevID(): string;
				public getSelectedBody(): native.Array<number>;
				public selectFirstPossibleAncestorOf(param0: string): boolean;
				public static dictContainsBlobs(param0: com.couchbase.litecore.fleece.FLSliceResult, param1: com.couchbase.litecore.fleece.FLSharedKeys): boolean;
				public getSelectedSequence(): number;
				public update(param0: native.Array<number>, param1: number): com.couchbase.litecore.C4Document;
				public loadRevisionBody(): void;
				public selectCommonAncestorRevision(param0: string, param1: string): boolean;
				public purgeRevision(param0: string): number;
				public conflicted(): boolean;
				public update(param0: com.couchbase.litecore.fleece.FLSliceResult, param1: number): com.couchbase.litecore.C4Document;
				public exists(): boolean;
				public selectNextRevision(): boolean;
				public getSelectedRevID(): string;
				public selectNextPossibleAncestorOf(param0: string): boolean;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4DocumentObserver {
				public static class: java.lang.Class<com.couchbase.litecore.C4DocumentObserver>;
				public finalize(): void;
				public free(): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4DocumentObserverListener {
				public static class: java.lang.Class<com.couchbase.litecore.C4DocumentObserverListener>;
				/**
				 * Constructs a new instance of the com.couchbase.litecore.C4DocumentObserverListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					callback(param0: com.couchbase.litecore.C4DocumentObserver, param1: string, param2: number, param3: any): void;
				});
				public constructor();
				public callback(param0: com.couchbase.litecore.C4DocumentObserver, param1: string, param2: number, param3: any): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4Error {
				public static class: java.lang.Class<com.couchbase.litecore.C4Error>;
				public constructor(param0: number, param1: number, param2: number);
				public getCode(): number;
				public getInternalInfo(): number;
				public toString(): string;
				public getDomain(): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4FullTextMatch {
				public static class: java.lang.Class<com.couchbase.litecore.C4FullTextMatch>;
				public property(): number;
				public length(): number;
				public toList(): java.util.List<java.lang.Long>;
				public start(): number;
				public finalize(): void;
				public dataSource(): number;
				public term(): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4Key {
				public static class: java.lang.Class<com.couchbase.litecore.C4Key>;
				public static pbkdf2(param0: string, param1: native.Array<number>, param2: number, param3: number): native.Array<number>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4Listener {
				public static class: java.lang.Class<com.couchbase.litecore.C4Listener>;
				public constructor(param0: com.couchbase.litecore.C4ListenerConfig);
				public static getAvailableAPIs(): number;
				public finalize(): void;
				public static getURINameFromPath(param0: string): string;
				public shareDB(param0: string, param1: com.couchbase.litecore.C4Database): boolean;
				public unshareDB(param0: string): boolean;
				public free(): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4ListenerAPIs {
				public static class: java.lang.Class<com.couchbase.litecore.C4ListenerAPIs>;
				/**
				 * Constructs a new instance of the com.couchbase.litecore.C4ListenerAPIs interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static kC4RESTAPI: number;
				public static kC4SyncAPI: number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4ListenerConfig {
				public static class: java.lang.Class<com.couchbase.litecore.C4ListenerConfig>;
				public constructor(param0: number, param1: number, param2: string, param3: boolean, param4: boolean, param5: boolean, param6: boolean);
				public setDirectory(param0: string): void;
				public isAllowPush(): boolean;
				public setPort(param0: number): void;
				public setAllowCreateDBs(param0: boolean): void;
				public getPort(): number;
				public setApis(param0: number): void;
				public setAllowDeleteDBs(param0: boolean): void;
				public toString(): string;
				public constructor();
				public setAllowPush(param0: boolean): void;
				public setAllowPull(param0: boolean): void;
				public getApis(): number;
				public isAllowDeleteDBs(): boolean;
				public isAllowCreateDBs(): boolean;
				public getDirectory(): string;
				public isAllowPull(): boolean;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4Log {
				public static class: java.lang.Class<com.couchbase.litecore.C4Log>;
				public static setLevel(param0: string, param1: number): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4Query {
				public static class: java.lang.Class<com.couchbase.litecore.C4Query>;
				public run(param0: com.couchbase.litecore.C4QueryOptions, param1: string): com.couchbase.litecore.C4QueryEnumerator;
				public finalize(): void;
				public getFullTextMatched(param0: com.couchbase.litecore.C4FullTextMatch): native.Array<number>;
				public columnCount(): number;
				public free(): void;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4QueryEnumerator {
				public static class: java.lang.Class<com.couchbase.litecore.C4QueryEnumerator>;
				public next(): boolean;
				public close(): void;
				public getMissingColumns(): number;
				public refresh(): com.couchbase.litecore.C4QueryEnumerator;
				public getRowCount(): number;
				public getColumns(): com.couchbase.litecore.fleece.FLArrayIterator;
				public getFullTextMatchCount(): number;
				public getFullTextMatchs(param0: number): com.couchbase.litecore.C4FullTextMatch;
				public finalize(): void;
				public seek(param0: number): boolean;
				public free(): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4QueryOptions {
				public static class: java.lang.Class<com.couchbase.litecore.C4QueryOptions>;
				public isRankFullText(): boolean;
				public setRankFullText(param0: boolean): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4RawDocument {
				public static class: java.lang.Class<com.couchbase.litecore.C4RawDocument>;
				public body(): string;
				public finalize(): void;
				public meta(): string;
				public free(): void;
				public key(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4Replicator {
				public static class: java.lang.Class<com.couchbase.litecore.C4Replicator>;
				public static kC4Replicator2Scheme: string;
				public static kC4Replicator2TLSScheme: string;
				public stop(): void;
				public getStatus(): com.couchbase.litecore.C4ReplicatorStatus;
				public static mayBeNetworkDependent(param0: com.couchbase.litecore.C4Error): boolean;
				public finalize(): void;
				public getResponseHeaders(): native.Array<number>;
				public static mayBeTransient(param0: com.couchbase.litecore.C4Error): boolean;
				public free(): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4ReplicatorListener {
				public static class: java.lang.Class<com.couchbase.litecore.C4ReplicatorListener>;
				/**
				 * Constructs a new instance of the com.couchbase.litecore.C4ReplicatorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					statusChanged(param0: com.couchbase.litecore.C4Replicator, param1: com.couchbase.litecore.C4ReplicatorStatus, param2: any): void;
					documentError(param0: com.couchbase.litecore.C4Replicator, param1: boolean, param2: string, param3: com.couchbase.litecore.C4Error, param4: boolean, param5: any): void;
				});
				public constructor();
				public statusChanged(param0: com.couchbase.litecore.C4Replicator, param1: com.couchbase.litecore.C4ReplicatorStatus, param2: any): void;
				public documentError(param0: com.couchbase.litecore.C4Replicator, param1: boolean, param2: string, param3: com.couchbase.litecore.C4Error, param4: boolean, param5: any): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4ReplicatorMode {
				public static class: java.lang.Class<com.couchbase.litecore.C4ReplicatorMode>;
				/**
				 * Constructs a new instance of the com.couchbase.litecore.C4ReplicatorMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static kC4Continuous: number;
				public static kC4Disabled: number;
				public static kC4Passive: number;
				public static kC4OneShot: number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4ReplicatorStatus {
				public static class: java.lang.Class<com.couchbase.litecore.C4ReplicatorStatus>;
				public getActivityLevel(): number;
				public getErrorDomain(): number;
				public getC4Error(): com.couchbase.litecore.C4Error;
				public constructor(param0: number, param1: number, param2: number);
				public getErrorInternalInfo(): number;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
				public setActivityLevel(param0: number): void;
				public getErrorCode(): number;
				public toString(): string;
				public copy(): com.couchbase.litecore.C4ReplicatorStatus;
				public getProgressUnitsTotal(): number;
				public constructor();
				public getProgressUnitsCompleted(): number;
				public constructor(param0: number);
				public getProgressDocumentCount(): number;
			}
			export module C4ReplicatorStatus {
				export class C4ReplicatorActivityLevel {
					public static class: java.lang.Class<com.couchbase.litecore.C4ReplicatorStatus.C4ReplicatorActivityLevel>;
					/**
					 * Constructs a new instance of the com.couchbase.litecore.C4ReplicatorStatus$C4ReplicatorActivityLevel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static kC4Busy: number;
					public static kC4Connecting: number;
					public static kC4Idle: number;
					public static kC4Stopped: number;
					public static kC4Offline: number;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export abstract class C4Socket {
				public static class: java.lang.Class<com.couchbase.litecore.C4Socket>;
				public static WEBSOCKET_SCHEME: string;
				public static WEBSOCKET_SECURE_CONNECTION_SCHEME: string;
				public static kC4ReplicatorOptionExtraHeaders: string;
				public static kC4ReplicatorOptionCookies: string;
				public static kC4ReplicatorOptionAuthentication: string;
				public static kC4ReplicatorOptionPinnedServerCert: string;
				public static kC4ReplicatorOptionDocIDs: string;
				public static kC4ReplicatorOptionChannels: string;
				public static kC4ReplicatorOptionFilter: string;
				public static kC4ReplicatorOptionFilterParams: string;
				public static kC4ReplicatorOptionSkipDeleted: string;
				public static kC4ReplicatorOptionNoIncomingConflicts: string;
				public static kC4ReplicatorOptionOutgoingConflicts: string;
				public static kC4ReplicatorCheckpointInterval: string;
				public static kC4ReplicatorOptionRemoteDBUniqueID: string;
				public static kC4ReplicatorHeartbeatInterval: string;
				public static kC4ReplicatorResetCheckpoint: string;
				public static kC4ReplicatorOptionNoConflicts: string;
				public static kC4SocketOptionWSProtocols: string;
				public static kC4ReplicatorAuthType: string;
				public static kC4ReplicatorAuthUserName: string;
				public static kC4ReplicatorAuthPassword: string;
				public static kC4ReplicatorAuthClientCert: string;
				public static kC4AuthTypeBasic: string;
				public static kC4AuthTypeSession: string;
				public static kC4AuthTypeOpenIDConnect: string;
				public static kC4AuthTypeFacebook: string;
				public static kC4AuthTypeClientCert: string;
				public static kC4WebSocketClientFraming: number;
				public static kC4NoFraming: number;
				public static kC4WebSocketServerFraming: number;
				public static reverseLookupTable: java.util.Map<java.lang.Long,com.couchbase.litecore.C4Socket>;
				public static socketFactory: java.util.Map<java.lang.Integer,java.lang.Class>;
				public static socketFactoryContext: java.util.Map<java.lang.Integer,com.couchbase.lite.Replicator>;
				public handle: number;
				public nativeHandle: any;
				public close(): void;
				public gotHTTPResponse(param0: number, param1: native.Array<number>): void;
				public static opened(param0: number): void;
				public completedWrite(param0: number): void;
				public constructor();
				public static completedWrite(param0: number, param1: number): void;
				public static fromNative(param0: number, param1: string, param2: string, param3: number, param4: string, param5: number): number;
				public completedReceive(param0: number): void;
				public static registerFactory(): void;
				public static closed(param0: number, param1: number, param2: number, param3: string): void;
				public send(param0: native.Array<number>): void;
				public constructor(param0: number);
				public static gotHTTPResponse(param0: number, param1: number, param2: native.Array<number>): void;
				public static closeRequested(param0: number, param1: number, param2: string): void;
				public requestClose(param0: number, param1: string): void;
				public static received(param0: number, param1: native.Array<number>): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class C4WebSocketCloseCode {
				public static class: java.lang.Class<com.couchbase.litecore.C4WebSocketCloseCode>;
				/**
				 * Constructs a new instance of the com.couchbase.litecore.C4WebSocketCloseCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
				public static kWebSocketCloseBadMessageFormat: number;
				public static kWebSocketCloseUserPermanent: number;
				public static kWebSocketCloseNoCode: number;
				public static kWebSocketCloseAbnormal: number;
				public static kWebSocketCloseMissingExtension: number;
				public static kWebSocketCloseTLSFailure: number;
				public static kWebSocketCloseGoingAway: number;
				public static kWebSocketCloseNormal: number;
				public static kWebSocketClosePolicyError: number;
				public static kWebSocketCloseFirstAvailable: number;
				public static kWebSocketCloseCantFulfill: number;
				public static kWebSocketCloseProtocolError: number;
				public static kWebSocketCloseUserTransient: number;
				public static kWebSocketCloseDataError: number;
				public static kWebSocketCloseMessageTooBig: number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class LiteCoreException {
				public static class: java.lang.Class<com.couchbase.litecore.LiteCoreException>;
				public domain: number;
				public code: number;
				public constructor(param0: number, param1: number, param2: string);
				public getCode(): number;
				public static throwException(param0: number, param1: number, param2: string): void;
				public toString(): string;
				public getDomain(): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export abstract class RefCounted {
				public static class: java.lang.Class<com.couchbase.litecore.RefCounted>;
				public release(): void;
				public retain(): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export class SharedKeys {
				public static class: java.lang.Class<com.couchbase.litecore.SharedKeys>;
				public constructor(param0: com.couchbase.litecore.C4Database);
				public getFLSharedKeys(): com.couchbase.litecore.fleece.FLSharedKeys;
				public static valueToObject(param0: com.couchbase.litecore.fleece.FLValue, param1: com.couchbase.litecore.SharedKeys): any;
				public static getKey(param0: com.couchbase.litecore.fleece.FLDictIterator, param1: com.couchbase.litecore.SharedKeys): string;
				public constructor(param0: com.couchbase.litecore.fleece.FLSharedKeys);
				public static dictContainsBlobs(param0: com.couchbase.litecore.fleece.FLSliceResult, param1: com.couchbase.litecore.SharedKeys): boolean;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export class AllocSlice {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.AllocSlice>;
					public free(): void;
					public constructor(param0: native.Array<number>);
					public getBuf(): native.Array<number>;
					public finalize(): void;
					public getSize(): number;
					public constructor(param0: number, param1: boolean);
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export class Encodable {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.Encodable>;
					/**
					 * Constructs a new instance of the com.couchbase.litecore.fleece.Encodable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						encodeTo(param0: com.couchbase.litecore.fleece.Encoder): void;
					});
					public constructor();
					public encodeTo(param0: com.couchbase.litecore.fleece.Encoder): void;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export class Encoder {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.Encoder>;
					public free(): void;
					public writeKey(param0: string): boolean;
					public writeNull(): boolean;
					public writeObject(param0: any): boolean;
					public constructor(param0: com.couchbase.litecore.fleece.FLEncoder);
					public finalize(): void;
					public endDict(): boolean;
					public endArray(): boolean;
					public writeValue(param0: com.couchbase.litecore.fleece.FLValue): boolean;
					public release(): void;
					public write(param0: java.util.List): boolean;
					public beginDict(param0: number): boolean;
					public beginArray(param0: number): boolean;
					public writeValue(param0: com.couchbase.litecore.fleece.FLArray): boolean;
					public constructor();
					public finish(): com.couchbase.litecore.fleece.AllocSlice;
					public getFLEncoder(): com.couchbase.litecore.fleece.FLEncoder;
					public write(param0: java.util.Map): boolean;
					public writeValue(param0: com.couchbase.litecore.fleece.FLDict): boolean;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export class FLArray {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.FLArray>;
					public asArray(): java.util.List<any>;
					public count(): number;
					public get(param0: number): com.couchbase.litecore.fleece.FLValue;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export class FLArrayIterator {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.FLArrayIterator>;
					public free(): void;
					public getValue(): com.couchbase.litecore.fleece.FLValue;
					public begin(param0: com.couchbase.litecore.fleece.FLArray): void;
					public next(): boolean;
					public constructor();
					public finalize(): void;
					public getValueAt(param0: number): com.couchbase.litecore.fleece.FLValue;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export class FLConstants {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.FLConstants>;
					public constructor();
				}
				export module FLConstants {
					export class FLError {
						public static class: java.lang.Class<com.couchbase.litecore.fleece.FLConstants.FLError>;
						/**
						 * Constructs a new instance of the com.couchbase.litecore.fleece.FLConstants$FLError interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static InternalError: number;
						public static MemoryError: number;
						public static OutOfRange: number;
						public static NotFound: number;
						public static JSONError: number;
						public static InvalidData: number;
						public static EncodeError: number;
						public static NoError: number;
						public static UnknownValue: number;
					}
					export class FLValueType {
						public static class: java.lang.Class<com.couchbase.litecore.fleece.FLConstants.FLValueType>;
						/**
						 * Constructs a new instance of the com.couchbase.litecore.fleece.FLConstants$FLValueType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static kFLNull: number;
						public static kFLDict: number;
						public static kFLNumber: number;
						public static kFLArray: number;
						public static kFLBoolean: number;
						public static kFLString: number;
						public static kFLUndefined: number;
						public static kFLData: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export class FLDict {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.FLDict>;
					public static getKeyString(param0: com.couchbase.litecore.fleece.FLSharedKeys, param1: number): string;
					public asDict(): java.util.Map<string,any>;
					public toObject(param0: com.couchbase.litecore.SharedKeys): java.util.Map<string,any>;
					public count(): number;
					public getSharedKey(param0: string, param1: com.couchbase.litecore.fleece.FLSharedKeys): com.couchbase.litecore.fleece.FLValue;
					public constructor(param0: number);
					public toFLValue(): com.couchbase.litecore.fleece.FLValue;
					public getHandle(): number;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export class FLDictIterator {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.FLDictIterator>;
					public free(): void;
					public getValue(): com.couchbase.litecore.fleece.FLValue;
					public next(): boolean;
					public constructor();
					public begin(param0: com.couchbase.litecore.fleece.FLDict): void;
					public finalize(): void;
					public getKey(): com.couchbase.litecore.fleece.FLValue;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export class FLEncodable {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.FLEncodable>;
					/**
					 * Constructs a new instance of the com.couchbase.litecore.fleece.FLEncodable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						encodeTo(param0: com.couchbase.litecore.fleece.FLEncoder): void;
					});
					public constructor();
					public encodeTo(param0: com.couchbase.litecore.fleece.FLEncoder): void;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export class FLEncoder {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.FLEncoder>;
					public free(): void;
					public writeData(param0: native.Array<number>): boolean;
					public finish(): native.Array<number>;
					public finish2(): com.couchbase.litecore.fleece.FLSliceResult;
					public writeKey(param0: string): boolean;
					public finalize(): void;
					public writeString(param0: string): boolean;
					public endDict(): boolean;
					public endArray(): boolean;
					public writeValue(param0: any): boolean;
					public constructor(param0: number, param1: boolean);
					public setExtraInfo(param0: any): void;
					public getExtraInfo(): any;
					public write(param0: java.util.List): boolean;
					public beginDict(param0: number): boolean;
					public beginArray(param0: number): boolean;
					public constructor();
					public write(param0: java.util.Map): boolean;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export class FLSharedKeys {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.FLSharedKeys>;
					public constructor(param0: number);
					public getHandle(): number;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export class FLSliceResult {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.FLSliceResult>;
					public free(): void;
					public getBuf(): native.Array<number>;
					public finalize(): void;
					public getSize(): number;
					public constructor(param0: number);
					public getHandle(): number;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export class FLValue {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.FLValue>;
					public getType(): number;
					public asArray(): java.util.List<any>;
					public asData(): native.Array<number>;
					public asFLArray(): com.couchbase.litecore.fleece.FLArray;
					public asString(): string;
					public asDouble(): number;
					public asDict(): java.util.Map<string,any>;
					public toObject(param0: com.couchbase.litecore.SharedKeys): any;
					public toJSON(): string;
					public toStr(): string;
					public static json5ToJson(param0: string): string;
					public isUnsigned(): boolean;
					public constructor(param0: number);
					public isDouble(): boolean;
					public asFLDict(): com.couchbase.litecore.fleece.FLDict;
					public asBool(): boolean;
					public asUnsigned(): number;
					public static fromData(param0: com.couchbase.litecore.fleece.AllocSlice): com.couchbase.litecore.fleece.FLValue;
					public isNumber(): boolean;
					public static fromData(param0: native.Array<number>): com.couchbase.litecore.fleece.FLValue;
					public asInt(): number;
					public static toObject(param0: com.couchbase.litecore.fleece.FLValue): any;
					public isInteger(): boolean;
					public asFloat(): number;
					public toJSON5(): string;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export class MArray extends com.couchbase.litecore.fleece.MCollection {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.MArray>;
					public remove(param0: number, param1: number): boolean;
					public clear(): boolean;
					public initInSlot(param0: com.couchbase.litecore.fleece.MValue, param1: com.couchbase.litecore.fleece.MCollection): void;
					public count(): number;
					public initAsCopyOf(param0: com.couchbase.litecore.fleece.MCollection, param1: boolean): void;
					public append(param0: any): boolean;
					public remove(param0: number): boolean;
					public initAsCopyOf(param0: com.couchbase.litecore.fleece.MArray, param1: boolean): void;
					public get(param0: number): com.couchbase.litecore.fleece.MValue;
					public set(param0: number, param1: any): boolean;
					public constructor();
					public getBaseArray(): com.couchbase.litecore.fleece.FLArray;
					public initInSlot(param0: com.couchbase.litecore.fleece.MValue, param1: com.couchbase.litecore.fleece.MCollection, param2: boolean): void;
					public insert(param0: number, param1: any): boolean;
					public encodeTo(param0: com.couchbase.litecore.fleece.Encoder): void;
					public constructor(param0: com.couchbase.litecore.fleece.MContext, param1: boolean);
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export abstract class MCollection extends com.couchbase.litecore.fleece.Encodable {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.MCollection>;
					public getMutableChildren(): boolean;
					public constructor();
					public mutate(): void;
					public setSlot(param0: com.couchbase.litecore.fleece.MValue, param1: com.couchbase.litecore.fleece.MValue): void;
					public initAsCopyOf(param0: com.couchbase.litecore.fleece.MCollection, param1: boolean): void;
					public initInSlot(param0: com.couchbase.litecore.fleece.MValue, param1: com.couchbase.litecore.fleece.MCollection, param2: boolean): void;
					public getContext(): com.couchbase.litecore.fleece.MContext;
					public isMutable(): boolean;
					public encodeTo(param0: com.couchbase.litecore.fleece.Encoder): void;
					public isMutated(): boolean;
					public constructor(param0: com.couchbase.litecore.fleece.MContext, param1: boolean);
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export class MContext {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.MContext>;
					public static NULL: com.couchbase.litecore.fleece.MContext;
					public getData(): com.couchbase.litecore.fleece.AllocSlice;
					public constructor();
					public constructor(param0: com.couchbase.litecore.fleece.AllocSlice, param1: com.couchbase.litecore.fleece.FLSharedKeys);
					public getSharedKeys(): com.couchbase.litecore.fleece.FLSharedKeys;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export class MDict extends com.couchbase.litecore.fleece.MCollection implements java.lang.Iterable<string>  {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.MDict>;
					public get(param0: string): com.couchbase.litecore.fleece.MValue;
					public initAsCopyOf(param0: com.couchbase.litecore.fleece.MDict, param1: boolean): void;
					public set(param0: string, param1: com.couchbase.litecore.fleece.MValue): boolean;
					public clear(): boolean;
					public initInSlot(param0: com.couchbase.litecore.fleece.MValue, param1: com.couchbase.litecore.fleece.MCollection): void;
					public count(): number;
					public initAsCopyOf(param0: com.couchbase.litecore.fleece.MCollection, param1: boolean): void;
					public iterator(): java.util.Iterator<string>;
					public constructor();
					public initInSlot(param0: com.couchbase.litecore.fleece.MValue, param1: com.couchbase.litecore.fleece.MCollection, param2: boolean): void;
					public getKeys(): java.util.List<string>;
					public getSharedKeys(): com.couchbase.litecore.fleece.FLSharedKeys;
					public contains(param0: string): boolean;
					public remove(param0: string): boolean;
					public encodeTo(param0: com.couchbase.litecore.fleece.Encoder): void;
					public constructor(param0: com.couchbase.litecore.fleece.MContext, param1: boolean);
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export class MRoot extends com.couchbase.litecore.fleece.MCollection {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.MRoot>;
					public constructor(param0: com.couchbase.litecore.fleece.MContext, param1: com.couchbase.litecore.fleece.FLValue, param2: boolean);
					public constructor();
					public constructor(param0: com.couchbase.litecore.fleece.AllocSlice);
					public constructor(param0: com.couchbase.litecore.fleece.AllocSlice, param1: com.couchbase.litecore.fleece.FLSharedKeys, param2: boolean);
					public static asNative(param0: com.couchbase.litecore.fleece.AllocSlice, param1: com.couchbase.litecore.fleece.FLSharedKeys, param2: boolean): any;
					public encode(): com.couchbase.litecore.fleece.AllocSlice;
					public encodeTo(param0: com.couchbase.litecore.fleece.Encoder): void;
					public isMutated(): boolean;
					public constructor(param0: com.couchbase.litecore.fleece.MContext, param1: boolean);
					public asNative(): any;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module litecore {
			export module fleece {
				export class MValue extends com.couchbase.litecore.fleece.Encodable {
					public static class: java.lang.Class<com.couchbase.litecore.fleece.MValue>;
					public static EMPTY: com.couchbase.litecore.fleece.MValue;
					public constructor(param0: com.couchbase.litecore.fleece.FLValue);
					public static registerDelegate(param0: com.couchbase.litecore.fleece.MValue.Delegate): void;
					public getValue(): com.couchbase.litecore.fleece.FLValue;
					public constructor(param0: boolean);
					public isEmpty(): boolean;
					public asNative(param0: com.couchbase.litecore.fleece.MCollection): any;
					public mutate(): void;
					public finalize(): void;
					public constructor(param0: any);
					public encodeTo(param0: com.couchbase.litecore.fleece.Encoder): void;
					public isMutated(): boolean;
				}
				export module MValue {
					export class Delegate {
						public static class: java.lang.Class<com.couchbase.litecore.fleece.MValue.Delegate>;
						/**
						 * Constructs a new instance of the com.couchbase.litecore.fleece.MValue$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							toNative(param0: com.couchbase.litecore.fleece.MValue, param1: com.couchbase.litecore.fleece.MCollection, param2: java.util.concurrent.atomic.AtomicBoolean): any;
							collectionFromNative(param0: any): com.couchbase.litecore.fleece.MCollection;
							encodeNative(param0: com.couchbase.litecore.fleece.Encoder, param1: any): void;
						});
						public constructor();
						public toNative(param0: com.couchbase.litecore.fleece.MValue, param1: com.couchbase.litecore.fleece.MCollection, param2: java.util.concurrent.atomic.AtomicBoolean): any;
						public encodeNative(param0: com.couchbase.litecore.fleece.Encoder, param1: any): void;
						public collectionFromNative(param0: any): com.couchbase.litecore.fleece.MCollection;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class CustomHostnameVerifier {
				public static class: java.lang.Class<okhttp3.internal.tls.CustomHostnameVerifier>;
				public static INSTANCE: okhttp3.internal.tls.CustomHostnameVerifier;
				public verify(param0: string, param1: javax.net.ssl.SSLSession): boolean;
				public verifyHostname(param0: string, param1: string): boolean;
				public static allSubjectAltNames(param0: java.security.cert.X509Certificate): java.util.List<string>;
				public static getInstance(): okhttp3.internal.tls.CustomHostnameVerifier;
				public verify(param0: string, param1: java.security.cert.X509Certificate): boolean;
			}
		}
	}
}

//Generics information:
//com.couchbase.lite.ChangeListener:1
//com.couchbase.lite.ChangeListenerToken:1
//com.couchbase.lite.ChangeNotifier:1

