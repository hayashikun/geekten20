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

var mediapipe_framework_formats_detection_pb = require('../../mediapipe/framework/formats/detection_pb.js')
const proto = {};
proto.qoin = require('./hand_tracking_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.qoin.HandTrackingClient =
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
proto.qoin.HandTrackingPromiseClient =
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
 *   !proto.qoin.HandTrackingPullRequest,
 *   !proto.qoin.HandTrackingPullReply>}
 */
const methodDescriptor_HandTracking_HandTrackingPullStream = new grpc.web.MethodDescriptor(
  '/qoin.HandTracking/HandTrackingPullStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.qoin.HandTrackingPullRequest,
  proto.qoin.HandTrackingPullReply,
  /**
   * @param {!proto.qoin.HandTrackingPullRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.qoin.HandTrackingPullReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.qoin.HandTrackingPullRequest,
 *   !proto.qoin.HandTrackingPullReply>}
 */
const methodInfo_HandTracking_HandTrackingPullStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.qoin.HandTrackingPullReply,
  /**
   * @param {!proto.qoin.HandTrackingPullRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.qoin.HandTrackingPullReply.deserializeBinary
);


/**
 * @param {!proto.qoin.HandTrackingPullRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.qoin.HandTrackingPullReply>}
 *     The XHR Node Readable Stream
 */
proto.qoin.HandTrackingClient.prototype.handTrackingPullStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/qoin.HandTracking/HandTrackingPullStream',
      request,
      metadata || {},
      methodDescriptor_HandTracking_HandTrackingPullStream);
};


/**
 * @param {!proto.qoin.HandTrackingPullRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.qoin.HandTrackingPullReply>}
 *     The XHR Node Readable Stream
 */
proto.qoin.HandTrackingPromiseClient.prototype.handTrackingPullStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/qoin.HandTracking/HandTrackingPullStream',
      request,
      metadata || {},
      methodDescriptor_HandTracking_HandTrackingPullStream);
};


module.exports = proto.qoin;

