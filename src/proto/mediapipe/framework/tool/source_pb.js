// source: mediapipe/framework/tool/source.proto
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

var mediapipe_framework_calculator_pb = require('../../../mediapipe/framework/calculator_pb.js');
goog.object.extend(proto, mediapipe_framework_calculator_pb);
goog.exportSymbol('proto.mediapipe.SidePacketsToStreamsCalculatorOptions', null, global);
goog.exportSymbol('proto.mediapipe.SidePacketsToStreamsCalculatorOptions.SetTimestampMode', null, global);
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
proto.mediapipe.SidePacketsToStreamsCalculatorOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mediapipe.SidePacketsToStreamsCalculatorOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.SidePacketsToStreamsCalculatorOptions.displayName = 'proto.mediapipe.SidePacketsToStreamsCalculatorOptions';
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
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.SidePacketsToStreamsCalculatorOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.SidePacketsToStreamsCalculatorOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    numInputs: jspb.Message.getFieldWithDefault(msg, 1, 1),
    setTimestamp: jspb.Message.getFieldWithDefault(msg, 2, 0),
    vectorsOfPackets: jspb.Message.getBooleanFieldWithDefault(msg, 3, true)
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
 * @return {!proto.mediapipe.SidePacketsToStreamsCalculatorOptions}
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.SidePacketsToStreamsCalculatorOptions;
  return proto.mediapipe.SidePacketsToStreamsCalculatorOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.SidePacketsToStreamsCalculatorOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.SidePacketsToStreamsCalculatorOptions}
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumInputs(value);
      break;
    case 2:
      var value = /** @type {!proto.mediapipe.SidePacketsToStreamsCalculatorOptions.SetTimestampMode} */ (reader.readEnum());
      msg.setSetTimestamp(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVectorsOfPackets(value);
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
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.SidePacketsToStreamsCalculatorOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.SidePacketsToStreamsCalculatorOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {!proto.mediapipe.SidePacketsToStreamsCalculatorOptions.SetTimestampMode} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
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
 * @enum {number}
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.SetTimestampMode = {
  VECTOR_INDEX: 0,
  PRE_STREAM: 1,
  WHOLE_STREAM: 2,
  NONE: 3
};


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `ext`.
 * @type {!jspb.ExtensionFieldInfo<!proto.mediapipe.SidePacketsToStreamsCalculatorOptions>}
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.ext = new jspb.ExtensionFieldInfo(
    60982839,
    {ext: 0},
    proto.mediapipe.SidePacketsToStreamsCalculatorOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.mediapipe.SidePacketsToStreamsCalculatorOptions.toObject),
    0);

mediapipe_framework_calculator_options_pb.CalculatorOptions.extensionsBinary[60982839] = new jspb.ExtensionFieldBinaryInfo(
    proto.mediapipe.SidePacketsToStreamsCalculatorOptions.ext,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.mediapipe.SidePacketsToStreamsCalculatorOptions.serializeBinaryToWriter,
    proto.mediapipe.SidePacketsToStreamsCalculatorOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
mediapipe_framework_calculator_options_pb.CalculatorOptions.extensions[60982839] = proto.mediapipe.SidePacketsToStreamsCalculatorOptions.ext;

/**
 * optional int32 num_inputs = 1;
 * @return {number}
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.prototype.getNumInputs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.SidePacketsToStreamsCalculatorOptions} returns this
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.prototype.setNumInputs = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.SidePacketsToStreamsCalculatorOptions} returns this
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.prototype.clearNumInputs = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.prototype.hasNumInputs = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SetTimestampMode set_timestamp = 2;
 * @return {!proto.mediapipe.SidePacketsToStreamsCalculatorOptions.SetTimestampMode}
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.prototype.getSetTimestamp = function() {
  return /** @type {!proto.mediapipe.SidePacketsToStreamsCalculatorOptions.SetTimestampMode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mediapipe.SidePacketsToStreamsCalculatorOptions.SetTimestampMode} value
 * @return {!proto.mediapipe.SidePacketsToStreamsCalculatorOptions} returns this
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.prototype.setSetTimestamp = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.SidePacketsToStreamsCalculatorOptions} returns this
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.prototype.clearSetTimestamp = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.prototype.hasSetTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool vectors_of_packets = 3;
 * @return {boolean}
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.prototype.getVectorsOfPackets = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, true));
};


/**
 * @param {boolean} value
 * @return {!proto.mediapipe.SidePacketsToStreamsCalculatorOptions} returns this
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.prototype.setVectorsOfPackets = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.SidePacketsToStreamsCalculatorOptions} returns this
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.prototype.clearVectorsOfPackets = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.prototype.hasVectorsOfPackets = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `ext`.
 * @type {!jspb.ExtensionFieldInfo<!proto.mediapipe.SidePacketsToStreamsCalculatorOptions>}
 */
proto.mediapipe.SidePacketsToStreamsCalculatorOptions.ext = new jspb.ExtensionFieldInfo(
    60982839,
    {ext: 0},
    proto.mediapipe.SidePacketsToStreamsCalculatorOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.mediapipe.SidePacketsToStreamsCalculatorOptions.toObject),
    0);

mediapipe_framework_calculator_options_pb.CalculatorOptions.extensionsBinary[60982839] = new jspb.ExtensionFieldBinaryInfo(
    proto.mediapipe.SidePacketsToStreamsCalculatorOptions.ext,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.mediapipe.SidePacketsToStreamsCalculatorOptions.serializeBinaryToWriter,
    proto.mediapipe.SidePacketsToStreamsCalculatorOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
mediapipe_framework_calculator_options_pb.CalculatorOptions.extensions[60982839] = proto.mediapipe.SidePacketsToStreamsCalculatorOptions.ext;

goog.object.extend(exports, proto.mediapipe);
