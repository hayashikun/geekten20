/**
 * @fileoverview gRPC-Web generated client stub for qoin
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.qoin = require('./hello_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.qoin.GreeterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.qoin.GreeterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.qoin.HelloRequest,
 *   !proto.qoin.HelloReply>}
 */
const methodDescriptor_Greeter_SayHello = new grpc.web.MethodDescriptor(
  '/qoin.Greeter/SayHello',
  grpc.web.MethodType.UNARY,
  proto.qoin.HelloRequest,
  proto.qoin.HelloReply,
  /**
   * @param {!proto.qoin.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.qoin.HelloReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.qoin.HelloRequest,
 *   !proto.qoin.HelloReply>}
 */
const methodInfo_Greeter_SayHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.qoin.HelloReply,
  /**
   * @param {!proto.qoin.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.qoin.HelloReply.deserializeBinary
);


/**
 * @param {!proto.qoin.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.qoin.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.qoin.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.qoin.GreeterClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/qoin.Greeter/SayHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHello,
      callback);
};


/**
 * @param {!proto.qoin.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.qoin.HelloReply>}
 *     Promise that resolves to the response
 */
proto.qoin.GreeterPromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/qoin.Greeter/SayHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHello);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.qoin.HelloRequest,
 *   !proto.qoin.HelloReply>}
 */
const methodDescriptor_Greeter_SayHelloAgain = new grpc.web.MethodDescriptor(
  '/qoin.Greeter/SayHelloAgain',
  grpc.web.MethodType.UNARY,
  proto.qoin.HelloRequest,
  proto.qoin.HelloReply,
  /**
   * @param {!proto.qoin.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.qoin.HelloReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.qoin.HelloRequest,
 *   !proto.qoin.HelloReply>}
 */
const methodInfo_Greeter_SayHelloAgain = new grpc.web.AbstractClientBase.MethodInfo(
  proto.qoin.HelloReply,
  /**
   * @param {!proto.qoin.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.qoin.HelloReply.deserializeBinary
);


/**
 * @param {!proto.qoin.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.qoin.HelloReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.qoin.HelloReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.qoin.GreeterClient.prototype.sayHelloAgain =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/qoin.Greeter/SayHelloAgain',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHelloAgain,
      callback);
};


/**
 * @param {!proto.qoin.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.qoin.HelloReply>}
 *     Promise that resolves to the response
 */
proto.qoin.GreeterPromiseClient.prototype.sayHelloAgain =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/qoin.Greeter/SayHelloAgain',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHelloAgain);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.qoin.HelloRequest,
 *   !proto.qoin.HelloReply>}
 */
const methodDescriptor_Greeter_HelloStream = new grpc.web.MethodDescriptor(
  '/qoin.Greeter/HelloStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.qoin.HelloRequest,
  proto.qoin.HelloReply,
  /**
   * @param {!proto.qoin.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.qoin.HelloReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.qoin.HelloRequest,
 *   !proto.qoin.HelloReply>}
 */
const methodInfo_Greeter_HelloStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.qoin.HelloReply,
  /**
   * @param {!proto.qoin.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.qoin.HelloReply.deserializeBinary
);


/**
 * @param {!proto.qoin.HelloRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.qoin.HelloReply>}
 *     The XHR Node Readable Stream
 */
proto.qoin.GreeterClient.prototype.helloStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/qoin.Greeter/HelloStream',
      request,
      metadata || {},
      methodDescriptor_Greeter_HelloStream);
};


/**
 * @param {!proto.qoin.HelloRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.qoin.HelloReply>}
 *     The XHR Node Readable Stream
 */
proto.qoin.GreeterPromiseClient.prototype.helloStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/qoin.Greeter/HelloStream',
      request,
      metadata || {},
      methodDescriptor_Greeter_HelloStream);
};


module.exports = proto.qoin;

