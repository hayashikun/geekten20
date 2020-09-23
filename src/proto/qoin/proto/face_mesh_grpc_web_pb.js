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


var mediapipe_framework_formats_landmark_pb = require('../../mediapipe/framework/formats/landmark_pb.js')
const proto = {};
proto.qoin = require('./face_mesh_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.qoin.FaceMeshClient =
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
proto.qoin.FaceMeshPromiseClient =
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
 *   !proto.qoin.FaceMeshPullRequest,
 *   !proto.qoin.FaceMeshPullReply>}
 */
const methodDescriptor_FaceMesh_FaceMeshPullStream = new grpc.web.MethodDescriptor(
  '/qoin.FaceMesh/FaceMeshPullStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.qoin.FaceMeshPullRequest,
  proto.qoin.FaceMeshPullReply,
  /**
   * @param {!proto.qoin.FaceMeshPullRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.qoin.FaceMeshPullReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.qoin.FaceMeshPullRequest,
 *   !proto.qoin.FaceMeshPullReply>}
 */
const methodInfo_FaceMesh_FaceMeshPullStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.qoin.FaceMeshPullReply,
  /**
   * @param {!proto.qoin.FaceMeshPullRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.qoin.FaceMeshPullReply.deserializeBinary
);


/**
 * @param {!proto.qoin.FaceMeshPullRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.qoin.FaceMeshPullReply>}
 *     The XHR Node Readable Stream
 */
proto.qoin.FaceMeshClient.prototype.faceMeshPullStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/qoin.FaceMesh/FaceMeshPullStream',
      request,
      metadata || {},
      methodDescriptor_FaceMesh_FaceMeshPullStream);
};


/**
 * @param {!proto.qoin.FaceMeshPullRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.qoin.FaceMeshPullReply>}
 *     The XHR Node Readable Stream
 */
proto.qoin.FaceMeshPromiseClient.prototype.faceMeshPullStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/qoin.FaceMesh/FaceMeshPullStream',
      request,
      metadata || {},
      methodDescriptor_FaceMesh_FaceMeshPullStream);
};


module.exports = proto.qoin;

