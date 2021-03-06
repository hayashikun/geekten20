// source: qoin/proto/face_mesh.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var mediapipe_framework_formats_landmark_pb = require('../../mediapipe/framework/formats/landmark_pb.js');
goog.object.extend(proto, mediapipe_framework_formats_landmark_pb);
goog.exportSymbol('proto.qoin.FaceMeshPullReply', null, global);
goog.exportSymbol('proto.qoin.FaceMeshPullRequest', null, global);
goog.exportSymbol('proto.qoin.FaceMeshPushReply', null, global);
goog.exportSymbol('proto.qoin.FaceMeshPushRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qoin.FaceMeshPullRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qoin.FaceMeshPullRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qoin.FaceMeshPullRequest.displayName = 'proto.qoin.FaceMeshPullRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qoin.FaceMeshPullReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qoin.FaceMeshPullReply.repeatedFields_, null);
};
goog.inherits(proto.qoin.FaceMeshPullReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qoin.FaceMeshPullReply.displayName = 'proto.qoin.FaceMeshPullReply';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qoin.FaceMeshPushRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.qoin.FaceMeshPushRequest.repeatedFields_, null);
};
goog.inherits(proto.qoin.FaceMeshPushRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qoin.FaceMeshPushRequest.displayName = 'proto.qoin.FaceMeshPushRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.qoin.FaceMeshPushReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.qoin.FaceMeshPushReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.qoin.FaceMeshPushReply.displayName = 'proto.qoin.FaceMeshPushReply';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qoin.FaceMeshPullRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qoin.FaceMeshPullRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qoin.FaceMeshPullRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qoin.FaceMeshPullRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qoin.FaceMeshPullRequest}
 */
proto.qoin.FaceMeshPullRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qoin.FaceMeshPullRequest;
  return proto.qoin.FaceMeshPullRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qoin.FaceMeshPullRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qoin.FaceMeshPullRequest}
 */
proto.qoin.FaceMeshPullRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qoin.FaceMeshPullRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qoin.FaceMeshPullRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qoin.FaceMeshPullRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qoin.FaceMeshPullRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qoin.FaceMeshPullReply.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qoin.FaceMeshPullReply.prototype.toObject = function(opt_includeInstance) {
  return proto.qoin.FaceMeshPullReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qoin.FaceMeshPullReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qoin.FaceMeshPullReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    landmarkListList: jspb.Message.toObjectList(msg.getLandmarkListList(),
    mediapipe_framework_formats_landmark_pb.NormalizedLandmarkList.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qoin.FaceMeshPullReply}
 */
proto.qoin.FaceMeshPullReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qoin.FaceMeshPullReply;
  return proto.qoin.FaceMeshPullReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qoin.FaceMeshPullReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qoin.FaceMeshPullReply}
 */
proto.qoin.FaceMeshPullReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new mediapipe_framework_formats_landmark_pb.NormalizedLandmarkList;
      reader.readMessage(value,mediapipe_framework_formats_landmark_pb.NormalizedLandmarkList.deserializeBinaryFromReader);
      msg.addLandmarkList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qoin.FaceMeshPullReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qoin.FaceMeshPullReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qoin.FaceMeshPullReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qoin.FaceMeshPullReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLandmarkListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      mediapipe_framework_formats_landmark_pb.NormalizedLandmarkList.serializeBinaryToWriter
    );
  }
};


/**
 * repeated mediapipe.NormalizedLandmarkList landmark_list = 1;
 * @return {!Array<!proto.mediapipe.NormalizedLandmarkList>}
 */
proto.qoin.FaceMeshPullReply.prototype.getLandmarkListList = function() {
  return /** @type{!Array<!proto.mediapipe.NormalizedLandmarkList>} */ (
    jspb.Message.getRepeatedWrapperField(this, mediapipe_framework_formats_landmark_pb.NormalizedLandmarkList, 1));
};


/**
 * @param {!Array<!proto.mediapipe.NormalizedLandmarkList>} value
 * @return {!proto.qoin.FaceMeshPullReply} returns this
*/
proto.qoin.FaceMeshPullReply.prototype.setLandmarkListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mediapipe.NormalizedLandmarkList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mediapipe.NormalizedLandmarkList}
 */
proto.qoin.FaceMeshPullReply.prototype.addLandmarkList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mediapipe.NormalizedLandmarkList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qoin.FaceMeshPullReply} returns this
 */
proto.qoin.FaceMeshPullReply.prototype.clearLandmarkListList = function() {
  return this.setLandmarkListList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.qoin.FaceMeshPushRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qoin.FaceMeshPushRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.qoin.FaceMeshPushRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qoin.FaceMeshPushRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qoin.FaceMeshPushRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    landmarkListList: jspb.Message.toObjectList(msg.getLandmarkListList(),
    mediapipe_framework_formats_landmark_pb.NormalizedLandmarkList.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qoin.FaceMeshPushRequest}
 */
proto.qoin.FaceMeshPushRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qoin.FaceMeshPushRequest;
  return proto.qoin.FaceMeshPushRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qoin.FaceMeshPushRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qoin.FaceMeshPushRequest}
 */
proto.qoin.FaceMeshPushRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new mediapipe_framework_formats_landmark_pb.NormalizedLandmarkList;
      reader.readMessage(value,mediapipe_framework_formats_landmark_pb.NormalizedLandmarkList.deserializeBinaryFromReader);
      msg.addLandmarkList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qoin.FaceMeshPushRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qoin.FaceMeshPushRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qoin.FaceMeshPushRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qoin.FaceMeshPushRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLandmarkListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      mediapipe_framework_formats_landmark_pb.NormalizedLandmarkList.serializeBinaryToWriter
    );
  }
};


/**
 * repeated mediapipe.NormalizedLandmarkList landmark_list = 1;
 * @return {!Array<!proto.mediapipe.NormalizedLandmarkList>}
 */
proto.qoin.FaceMeshPushRequest.prototype.getLandmarkListList = function() {
  return /** @type{!Array<!proto.mediapipe.NormalizedLandmarkList>} */ (
    jspb.Message.getRepeatedWrapperField(this, mediapipe_framework_formats_landmark_pb.NormalizedLandmarkList, 1));
};


/**
 * @param {!Array<!proto.mediapipe.NormalizedLandmarkList>} value
 * @return {!proto.qoin.FaceMeshPushRequest} returns this
*/
proto.qoin.FaceMeshPushRequest.prototype.setLandmarkListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mediapipe.NormalizedLandmarkList=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mediapipe.NormalizedLandmarkList}
 */
proto.qoin.FaceMeshPushRequest.prototype.addLandmarkList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mediapipe.NormalizedLandmarkList, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.qoin.FaceMeshPushRequest} returns this
 */
proto.qoin.FaceMeshPushRequest.prototype.clearLandmarkListList = function() {
  return this.setLandmarkListList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.qoin.FaceMeshPushReply.prototype.toObject = function(opt_includeInstance) {
  return proto.qoin.FaceMeshPushReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.qoin.FaceMeshPushReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qoin.FaceMeshPushReply.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.qoin.FaceMeshPushReply}
 */
proto.qoin.FaceMeshPushReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.qoin.FaceMeshPushReply;
  return proto.qoin.FaceMeshPushReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.qoin.FaceMeshPushReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.qoin.FaceMeshPushReply}
 */
proto.qoin.FaceMeshPushReply.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.qoin.FaceMeshPushReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.qoin.FaceMeshPushReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.qoin.FaceMeshPushReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.qoin.FaceMeshPushReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.qoin);
