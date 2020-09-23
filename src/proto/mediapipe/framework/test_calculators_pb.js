// source: mediapipe/framework/test_calculators.proto
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

var mediapipe_framework_calculator_pb = require('../../mediapipe/framework/calculator_pb.js');
goog.object.extend(proto, mediapipe_framework_calculator_pb);
goog.exportSymbol('proto.mediapipe.RandomMatrixCalculatorOptions', null, global);
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
proto.mediapipe.RandomMatrixCalculatorOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mediapipe.RandomMatrixCalculatorOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.RandomMatrixCalculatorOptions.displayName = 'proto.mediapipe.RandomMatrixCalculatorOptions';
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
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.RandomMatrixCalculatorOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.RandomMatrixCalculatorOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.RandomMatrixCalculatorOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    rows: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    cols: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    startTimestamp: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    limitTimestamp: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    timestampStep: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.mediapipe.RandomMatrixCalculatorOptions}
 */
proto.mediapipe.RandomMatrixCalculatorOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.RandomMatrixCalculatorOptions;
  return proto.mediapipe.RandomMatrixCalculatorOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.RandomMatrixCalculatorOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.RandomMatrixCalculatorOptions}
 */
proto.mediapipe.RandomMatrixCalculatorOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRows(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCols(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartTimestamp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimitTimestamp(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestampStep(value);
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
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.RandomMatrixCalculatorOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.RandomMatrixCalculatorOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.RandomMatrixCalculatorOptions.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `ext`.
 * @type {!jspb.ExtensionFieldInfo<!proto.mediapipe.RandomMatrixCalculatorOptions>}
 */
proto.mediapipe.RandomMatrixCalculatorOptions.ext = new jspb.ExtensionFieldInfo(
    52056136,
    {ext: 0},
    proto.mediapipe.RandomMatrixCalculatorOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.mediapipe.RandomMatrixCalculatorOptions.toObject),
    0);

mediapipe_framework_calculator_options_pb.CalculatorOptions.extensionsBinary[52056136] = new jspb.ExtensionFieldBinaryInfo(
    proto.mediapipe.RandomMatrixCalculatorOptions.ext,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.mediapipe.RandomMatrixCalculatorOptions.serializeBinaryToWriter,
    proto.mediapipe.RandomMatrixCalculatorOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
mediapipe_framework_calculator_options_pb.CalculatorOptions.extensions[52056136] = proto.mediapipe.RandomMatrixCalculatorOptions.ext;

/**
 * optional int32 rows = 1;
 * @return {number}
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.getRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.RandomMatrixCalculatorOptions} returns this
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.setRows = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.RandomMatrixCalculatorOptions} returns this
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.clearRows = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.hasRows = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 cols = 2;
 * @return {number}
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.getCols = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.RandomMatrixCalculatorOptions} returns this
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.setCols = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.RandomMatrixCalculatorOptions} returns this
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.clearCols = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.hasCols = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 start_timestamp = 3;
 * @return {number}
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.getStartTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.RandomMatrixCalculatorOptions} returns this
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.setStartTimestamp = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.RandomMatrixCalculatorOptions} returns this
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.clearStartTimestamp = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.hasStartTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 limit_timestamp = 4;
 * @return {number}
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.getLimitTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.RandomMatrixCalculatorOptions} returns this
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.setLimitTimestamp = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.RandomMatrixCalculatorOptions} returns this
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.clearLimitTimestamp = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.hasLimitTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 timestamp_step = 5;
 * @return {number}
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.getTimestampStep = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.RandomMatrixCalculatorOptions} returns this
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.setTimestampStep = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.RandomMatrixCalculatorOptions} returns this
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.clearTimestampStep = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.RandomMatrixCalculatorOptions.prototype.hasTimestampStep = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `ext`.
 * @type {!jspb.ExtensionFieldInfo<!proto.mediapipe.RandomMatrixCalculatorOptions>}
 */
proto.mediapipe.RandomMatrixCalculatorOptions.ext = new jspb.ExtensionFieldInfo(
    52056136,
    {ext: 0},
    proto.mediapipe.RandomMatrixCalculatorOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.mediapipe.RandomMatrixCalculatorOptions.toObject),
    0);

mediapipe_framework_calculator_options_pb.CalculatorOptions.extensionsBinary[52056136] = new jspb.ExtensionFieldBinaryInfo(
    proto.mediapipe.RandomMatrixCalculatorOptions.ext,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.mediapipe.RandomMatrixCalculatorOptions.serializeBinaryToWriter,
    proto.mediapipe.RandomMatrixCalculatorOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
mediapipe_framework_calculator_options_pb.CalculatorOptions.extensions[52056136] = proto.mediapipe.RandomMatrixCalculatorOptions.ext;

goog.object.extend(exports, proto.mediapipe);