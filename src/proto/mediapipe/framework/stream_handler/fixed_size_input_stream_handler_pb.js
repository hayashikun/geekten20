// source: mediapipe/framework/stream_handler/fixed_size_input_stream_handler.proto
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

var mediapipe_framework_mediapipe_options_pb = require('../../../mediapipe/framework/mediapipe_options_pb.js');
goog.object.extend(proto, mediapipe_framework_mediapipe_options_pb);
goog.exportSymbol('proto.mediapipe.FixedSizeInputStreamHandlerOptions', null, global);
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
proto.mediapipe.FixedSizeInputStreamHandlerOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mediapipe.FixedSizeInputStreamHandlerOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.FixedSizeInputStreamHandlerOptions.displayName = 'proto.mediapipe.FixedSizeInputStreamHandlerOptions';
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
proto.mediapipe.FixedSizeInputStreamHandlerOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.FixedSizeInputStreamHandlerOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.FixedSizeInputStreamHandlerOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.FixedSizeInputStreamHandlerOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    triggerQueueSize: jspb.Message.getFieldWithDefault(msg, 1, 2),
    targetQueueSize: jspb.Message.getFieldWithDefault(msg, 2, 1),
    fixedMinSize: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.mediapipe.FixedSizeInputStreamHandlerOptions}
 */
proto.mediapipe.FixedSizeInputStreamHandlerOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.FixedSizeInputStreamHandlerOptions;
  return proto.mediapipe.FixedSizeInputStreamHandlerOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.FixedSizeInputStreamHandlerOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.FixedSizeInputStreamHandlerOptions}
 */
proto.mediapipe.FixedSizeInputStreamHandlerOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTriggerQueueSize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTargetQueueSize(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFixedMinSize(value);
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
proto.mediapipe.FixedSizeInputStreamHandlerOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.FixedSizeInputStreamHandlerOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.FixedSizeInputStreamHandlerOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.FixedSizeInputStreamHandlerOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `ext`.
 * @type {!jspb.ExtensionFieldInfo<!proto.mediapipe.FixedSizeInputStreamHandlerOptions>}
 */
proto.mediapipe.FixedSizeInputStreamHandlerOptions.ext = new jspb.ExtensionFieldInfo(
    125744319,
    {ext: 0},
    proto.mediapipe.FixedSizeInputStreamHandlerOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.mediapipe.FixedSizeInputStreamHandlerOptions.toObject),
    0);

mediapipe_framework_mediapipe_options_pb.MediaPipeOptions.extensionsBinary[125744319] = new jspb.ExtensionFieldBinaryInfo(
    proto.mediapipe.FixedSizeInputStreamHandlerOptions.ext,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.mediapipe.FixedSizeInputStreamHandlerOptions.serializeBinaryToWriter,
    proto.mediapipe.FixedSizeInputStreamHandlerOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
mediapipe_framework_mediapipe_options_pb.MediaPipeOptions.extensions[125744319] = proto.mediapipe.FixedSizeInputStreamHandlerOptions.ext;

/**
 * optional int32 trigger_queue_size = 1;
 * @return {number}
 */
proto.mediapipe.FixedSizeInputStreamHandlerOptions.prototype.getTriggerQueueSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 2));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.FixedSizeInputStreamHandlerOptions} returns this
 */
proto.mediapipe.FixedSizeInputStreamHandlerOptions.prototype.setTriggerQueueSize = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.FixedSizeInputStreamHandlerOptions} returns this
 */
proto.mediapipe.FixedSizeInputStreamHandlerOptions.prototype.clearTriggerQueueSize = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.FixedSizeInputStreamHandlerOptions.prototype.hasTriggerQueueSize = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 target_queue_size = 2;
 * @return {number}
 */
proto.mediapipe.FixedSizeInputStreamHandlerOptions.prototype.getTargetQueueSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 1));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.FixedSizeInputStreamHandlerOptions} returns this
 */
proto.mediapipe.FixedSizeInputStreamHandlerOptions.prototype.setTargetQueueSize = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.FixedSizeInputStreamHandlerOptions} returns this
 */
proto.mediapipe.FixedSizeInputStreamHandlerOptions.prototype.clearTargetQueueSize = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.FixedSizeInputStreamHandlerOptions.prototype.hasTargetQueueSize = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool fixed_min_size = 3;
 * @return {boolean}
 */
proto.mediapipe.FixedSizeInputStreamHandlerOptions.prototype.getFixedMinSize = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mediapipe.FixedSizeInputStreamHandlerOptions} returns this
 */
proto.mediapipe.FixedSizeInputStreamHandlerOptions.prototype.setFixedMinSize = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.FixedSizeInputStreamHandlerOptions} returns this
 */
proto.mediapipe.FixedSizeInputStreamHandlerOptions.prototype.clearFixedMinSize = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.FixedSizeInputStreamHandlerOptions.prototype.hasFixedMinSize = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `ext`.
 * @type {!jspb.ExtensionFieldInfo<!proto.mediapipe.FixedSizeInputStreamHandlerOptions>}
 */
proto.mediapipe.FixedSizeInputStreamHandlerOptions.ext = new jspb.ExtensionFieldInfo(
    125744319,
    {ext: 0},
    proto.mediapipe.FixedSizeInputStreamHandlerOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.mediapipe.FixedSizeInputStreamHandlerOptions.toObject),
    0);

mediapipe_framework_mediapipe_options_pb.MediaPipeOptions.extensionsBinary[125744319] = new jspb.ExtensionFieldBinaryInfo(
    proto.mediapipe.FixedSizeInputStreamHandlerOptions.ext,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.mediapipe.FixedSizeInputStreamHandlerOptions.serializeBinaryToWriter,
    proto.mediapipe.FixedSizeInputStreamHandlerOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
mediapipe_framework_mediapipe_options_pb.MediaPipeOptions.extensions[125744319] = proto.mediapipe.FixedSizeInputStreamHandlerOptions.ext;

goog.object.extend(exports, proto.mediapipe);
