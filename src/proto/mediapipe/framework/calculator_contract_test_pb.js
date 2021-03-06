// source: mediapipe/framework/calculator_contract_test.proto
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
goog.exportSymbol('proto.mediapipe.CalculatorContractTestOptions', null, global);
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
proto.mediapipe.CalculatorContractTestOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mediapipe.CalculatorContractTestOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.CalculatorContractTestOptions.displayName = 'proto.mediapipe.CalculatorContractTestOptions';
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
proto.mediapipe.CalculatorContractTestOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.CalculatorContractTestOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.CalculatorContractTestOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.CalculatorContractTestOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    testField: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, -1.0)
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
 * @return {!proto.mediapipe.CalculatorContractTestOptions}
 */
proto.mediapipe.CalculatorContractTestOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.CalculatorContractTestOptions;
  return proto.mediapipe.CalculatorContractTestOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.CalculatorContractTestOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.CalculatorContractTestOptions}
 */
proto.mediapipe.CalculatorContractTestOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTestField(value);
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
proto.mediapipe.CalculatorContractTestOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.CalculatorContractTestOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.CalculatorContractTestOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.CalculatorContractTestOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `ext`.
 * @type {!jspb.ExtensionFieldInfo<!proto.mediapipe.CalculatorContractTestOptions>}
 */
proto.mediapipe.CalculatorContractTestOptions.ext = new jspb.ExtensionFieldInfo(
    188754615,
    {ext: 0},
    proto.mediapipe.CalculatorContractTestOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.mediapipe.CalculatorContractTestOptions.toObject),
    0);

mediapipe_framework_calculator_options_pb.CalculatorOptions.extensionsBinary[188754615] = new jspb.ExtensionFieldBinaryInfo(
    proto.mediapipe.CalculatorContractTestOptions.ext,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.mediapipe.CalculatorContractTestOptions.serializeBinaryToWriter,
    proto.mediapipe.CalculatorContractTestOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
mediapipe_framework_calculator_options_pb.CalculatorOptions.extensions[188754615] = proto.mediapipe.CalculatorContractTestOptions.ext;

/**
 * optional double test_field = 1;
 * @return {number}
 */
proto.mediapipe.CalculatorContractTestOptions.prototype.getTestField = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, -1.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.CalculatorContractTestOptions} returns this
 */
proto.mediapipe.CalculatorContractTestOptions.prototype.setTestField = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.CalculatorContractTestOptions} returns this
 */
proto.mediapipe.CalculatorContractTestOptions.prototype.clearTestField = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.CalculatorContractTestOptions.prototype.hasTestField = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `ext`.
 * @type {!jspb.ExtensionFieldInfo<!proto.mediapipe.CalculatorContractTestOptions>}
 */
proto.mediapipe.CalculatorContractTestOptions.ext = new jspb.ExtensionFieldInfo(
    188754615,
    {ext: 0},
    proto.mediapipe.CalculatorContractTestOptions,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         proto.mediapipe.CalculatorContractTestOptions.toObject),
    0);

mediapipe_framework_calculator_options_pb.CalculatorOptions.extensionsBinary[188754615] = new jspb.ExtensionFieldBinaryInfo(
    proto.mediapipe.CalculatorContractTestOptions.ext,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    proto.mediapipe.CalculatorContractTestOptions.serializeBinaryToWriter,
    proto.mediapipe.CalculatorContractTestOptions.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
mediapipe_framework_calculator_options_pb.CalculatorOptions.extensions[188754615] = proto.mediapipe.CalculatorContractTestOptions.ext;

goog.object.extend(exports, proto.mediapipe);
