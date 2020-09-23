// source: mediapipe/framework/formats/image_file_properties.proto
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

goog.exportSymbol('proto.mediapipe.ImageFileProperties', null, global);
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
proto.mediapipe.ImageFileProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mediapipe.ImageFileProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.ImageFileProperties.displayName = 'proto.mediapipe.ImageFileProperties';
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
proto.mediapipe.ImageFileProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.ImageFileProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.ImageFileProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.ImageFileProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
    imageWidth: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    imageHeight: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    focalLengthMm: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    focalLength35mm: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    focalLengthPixels: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.mediapipe.ImageFileProperties}
 */
proto.mediapipe.ImageFileProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.ImageFileProperties;
  return proto.mediapipe.ImageFileProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.ImageFileProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.ImageFileProperties}
 */
proto.mediapipe.ImageFileProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setImageWidth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setImageHeight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFocalLengthMm(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFocalLength35mm(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setFocalLengthPixels(value);
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
proto.mediapipe.ImageFileProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.ImageFileProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.ImageFileProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.ImageFileProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
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
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional uint32 image_width = 1;
 * @return {number}
 */
proto.mediapipe.ImageFileProperties.prototype.getImageWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.ImageFileProperties} returns this
 */
proto.mediapipe.ImageFileProperties.prototype.setImageWidth = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.ImageFileProperties} returns this
 */
proto.mediapipe.ImageFileProperties.prototype.clearImageWidth = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.ImageFileProperties.prototype.hasImageWidth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint32 image_height = 2;
 * @return {number}
 */
proto.mediapipe.ImageFileProperties.prototype.getImageHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.ImageFileProperties} returns this
 */
proto.mediapipe.ImageFileProperties.prototype.setImageHeight = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.ImageFileProperties} returns this
 */
proto.mediapipe.ImageFileProperties.prototype.clearImageHeight = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.ImageFileProperties.prototype.hasImageHeight = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double focal_length_mm = 3;
 * @return {number}
 */
proto.mediapipe.ImageFileProperties.prototype.getFocalLengthMm = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.ImageFileProperties} returns this
 */
proto.mediapipe.ImageFileProperties.prototype.setFocalLengthMm = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.ImageFileProperties} returns this
 */
proto.mediapipe.ImageFileProperties.prototype.clearFocalLengthMm = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.ImageFileProperties.prototype.hasFocalLengthMm = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double focal_length_35mm = 4;
 * @return {number}
 */
proto.mediapipe.ImageFileProperties.prototype.getFocalLength35mm = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.ImageFileProperties} returns this
 */
proto.mediapipe.ImageFileProperties.prototype.setFocalLength35mm = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.ImageFileProperties} returns this
 */
proto.mediapipe.ImageFileProperties.prototype.clearFocalLength35mm = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.ImageFileProperties.prototype.hasFocalLength35mm = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double focal_length_pixels = 5;
 * @return {number}
 */
proto.mediapipe.ImageFileProperties.prototype.getFocalLengthPixels = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.ImageFileProperties} returns this
 */
proto.mediapipe.ImageFileProperties.prototype.setFocalLengthPixels = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.ImageFileProperties} returns this
 */
proto.mediapipe.ImageFileProperties.prototype.clearFocalLengthPixels = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.ImageFileProperties.prototype.hasFocalLengthPixels = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.mediapipe);
