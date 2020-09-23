// source: mediapipe/framework/testdata/night_light_calculator.proto
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
goog.exportSymbol('proto.mediapipe.NightLightCalculatorOptions', null, global);
goog.exportSymbol('proto.mediapipe.NightLightCalculatorOptions.OutputHeader', null, global);
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
proto.mediapipe.NightLightCalculatorOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mediapipe.NightLightCalculatorOptions.repeatedFields_, null);
};
goog.inherits(proto.mediapipe.NightLightCalculatorOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.NightLightCalculatorOptions.displayName = 'proto.mediapipe.NightLightCalculatorOptions';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mediapipe.NightLightCalculatorOptions.repeatedFields_ = [5];



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
proto.mediapipe.NightLightCalculatorOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.NightLightCalculatorOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.NightLightCalculatorOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.NightLightCalculatorOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    frameRate: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    outputHeader: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    jitter: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    baseTimestampList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    roundLimits: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f,
    formatString: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f
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
 * @return {!proto.mediapipe.NightLightCalculatorOptions}
 */
proto.mediapipe.NightLightCalculatorOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.NightLightCalculatorOptions;
  return proto.mediapipe.NightLightCalculatorOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.NightLightCalculatorOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.NightLightCalculatorOptions}
 */
proto.mediapipe.NightLightCalculatorOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFrameRate(value);
      break;
    case 2:
      var value = /** @type {!proto.mediapipe.NightLightCalculatorOptions.OutputHeader} */ (reader.readEnum());
      msg.setOutputHeader(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setJitter(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.addBaseTimestamp(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRoundLimits(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormatString(value);
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
proto.mediapipe.NightLightCalculatorOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.NightLightCalculatorOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.NightLightCalculatorOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.NightLightCalculatorOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {!proto.mediapipe.NightLightCalculatorOptions.OutputHeader} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getBaseTimestampList();
  if (f.length > 0) {
    writer.writeRepeatedInt64(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.mediapipe.NightLightCalculatorOptions.OutputHeader = {
  NONE: 0,
  PASS_HEADER: 1,
  UPDATE_VIDEO_HEADER: 2
};


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `ext`.
 * @type {!jspb.ExtensionFieldInfo<!proto.mediapipe.NightLightCalculatorOptions>}
 */
proto.mediapipe.NightLightCalculatorOptions.ext = new jspb.ExtensionFieldInfo(
    190865679,
    {ext: 0},
    proto.mediapipe.NightLightCalculatorOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.mediapipe.NightLightCalculatorOptions.toObject),
    0);

mediapipe_framework_calculator_options_pb.CalculatorOptions.extensionsBinary[190865679] = new jspb.ExtensionFieldBinaryInfo(
    proto.mediapipe.NightLightCalculatorOptions.ext,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.mediapipe.NightLightCalculatorOptions.serializeBinaryToWriter,
    proto.mediapipe.NightLightCalculatorOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
mediapipe_framework_calculator_options_pb.CalculatorOptions.extensions[190865679] = proto.mediapipe.NightLightCalculatorOptions.ext;

/**
 * optional double frame_rate = 1;
 * @return {number}
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.getFrameRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.NightLightCalculatorOptions} returns this
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.setFrameRate = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.NightLightCalculatorOptions} returns this
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.clearFrameRate = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.hasFrameRate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OutputHeader output_header = 2;
 * @return {!proto.mediapipe.NightLightCalculatorOptions.OutputHeader}
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.getOutputHeader = function() {
  return /** @type {!proto.mediapipe.NightLightCalculatorOptions.OutputHeader} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.mediapipe.NightLightCalculatorOptions.OutputHeader} value
 * @return {!proto.mediapipe.NightLightCalculatorOptions} returns this
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.setOutputHeader = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.NightLightCalculatorOptions} returns this
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.clearOutputHeader = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.hasOutputHeader = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double jitter = 4;
 * @return {number}
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.getJitter = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.NightLightCalculatorOptions} returns this
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.setJitter = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.NightLightCalculatorOptions} returns this
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.clearJitter = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.hasJitter = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated int64 base_timestamp = 5;
 * @return {!Array<number>}
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.getBaseTimestampList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.mediapipe.NightLightCalculatorOptions} returns this
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.setBaseTimestampList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.mediapipe.NightLightCalculatorOptions} returns this
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.addBaseTimestamp = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mediapipe.NightLightCalculatorOptions} returns this
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.clearBaseTimestampList = function() {
  return this.setBaseTimestampList([]);
};


/**
 * optional bool round_limits = 8;
 * @return {boolean}
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.getRoundLimits = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mediapipe.NightLightCalculatorOptions} returns this
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.setRoundLimits = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.NightLightCalculatorOptions} returns this
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.clearRoundLimits = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.hasRoundLimits = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string format_string = 9;
 * @return {string}
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.getFormatString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.mediapipe.NightLightCalculatorOptions} returns this
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.setFormatString = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.NightLightCalculatorOptions} returns this
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.clearFormatString = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.NightLightCalculatorOptions.prototype.hasFormatString = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `ext`.
 * @type {!jspb.ExtensionFieldInfo<!proto.mediapipe.NightLightCalculatorOptions>}
 */
proto.mediapipe.NightLightCalculatorOptions.ext = new jspb.ExtensionFieldInfo(
    190865679,
    {ext: 0},
    proto.mediapipe.NightLightCalculatorOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.mediapipe.NightLightCalculatorOptions.toObject),
    0);

mediapipe_framework_calculator_options_pb.CalculatorOptions.extensionsBinary[190865679] = new jspb.ExtensionFieldBinaryInfo(
    proto.mediapipe.NightLightCalculatorOptions.ext,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.mediapipe.NightLightCalculatorOptions.serializeBinaryToWriter,
    proto.mediapipe.NightLightCalculatorOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
mediapipe_framework_calculator_options_pb.CalculatorOptions.extensions[190865679] = proto.mediapipe.NightLightCalculatorOptions.ext;

goog.object.extend(exports, proto.mediapipe);
