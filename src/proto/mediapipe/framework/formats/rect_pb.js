// source: mediapipe/framework/formats/rect.proto
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

goog.exportSymbol('proto.mediapipe.NormalizedRect', null, global);
goog.exportSymbol('proto.mediapipe.Rect', null, global);
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
proto.mediapipe.Rect = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mediapipe.Rect, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.Rect.displayName = 'proto.mediapipe.Rect';
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
proto.mediapipe.NormalizedRect = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mediapipe.NormalizedRect, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.NormalizedRect.displayName = 'proto.mediapipe.NormalizedRect';
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
proto.mediapipe.Rect.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.Rect.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.Rect} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.Rect.toObject = function(includeInstance, msg) {
  var f, obj = {
    xCenter: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    yCenter: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    height: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    width: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    rotation: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    rectId: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.mediapipe.Rect}
 */
proto.mediapipe.Rect.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.Rect;
  return proto.mediapipe.Rect.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.Rect} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.Rect}
 */
proto.mediapipe.Rect.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setXCenter(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYCenter(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRotation(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRectId(value);
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
proto.mediapipe.Rect.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.Rect.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.Rect} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.Rect.serializeBinaryToWriter = function(message, writer) {
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
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * required int32 x_center = 1;
 * @return {number}
 */
proto.mediapipe.Rect.prototype.getXCenter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.Rect} returns this
 */
proto.mediapipe.Rect.prototype.setXCenter = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.Rect} returns this
 */
proto.mediapipe.Rect.prototype.clearXCenter = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.Rect.prototype.hasXCenter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int32 y_center = 2;
 * @return {number}
 */
proto.mediapipe.Rect.prototype.getYCenter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.Rect} returns this
 */
proto.mediapipe.Rect.prototype.setYCenter = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.Rect} returns this
 */
proto.mediapipe.Rect.prototype.clearYCenter = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.Rect.prototype.hasYCenter = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required int32 height = 3;
 * @return {number}
 */
proto.mediapipe.Rect.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.Rect} returns this
 */
proto.mediapipe.Rect.prototype.setHeight = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.Rect} returns this
 */
proto.mediapipe.Rect.prototype.clearHeight = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.Rect.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required int32 width = 4;
 * @return {number}
 */
proto.mediapipe.Rect.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.Rect} returns this
 */
proto.mediapipe.Rect.prototype.setWidth = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.Rect} returns this
 */
proto.mediapipe.Rect.prototype.clearWidth = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.Rect.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional float rotation = 5;
 * @return {number}
 */
proto.mediapipe.Rect.prototype.getRotation = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.Rect} returns this
 */
proto.mediapipe.Rect.prototype.setRotation = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.Rect} returns this
 */
proto.mediapipe.Rect.prototype.clearRotation = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.Rect.prototype.hasRotation = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 rect_id = 6;
 * @return {number}
 */
proto.mediapipe.Rect.prototype.getRectId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.Rect} returns this
 */
proto.mediapipe.Rect.prototype.setRectId = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.Rect} returns this
 */
proto.mediapipe.Rect.prototype.clearRectId = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.Rect.prototype.hasRectId = function() {
  return jspb.Message.getField(this, 6) != null;
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
proto.mediapipe.NormalizedRect.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.NormalizedRect.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.NormalizedRect} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.NormalizedRect.toObject = function(includeInstance, msg) {
  var f, obj = {
    xCenter: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    yCenter: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    height: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    width: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    rotation: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    rectId: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.mediapipe.NormalizedRect}
 */
proto.mediapipe.NormalizedRect.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.NormalizedRect;
  return proto.mediapipe.NormalizedRect.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.NormalizedRect} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.NormalizedRect}
 */
proto.mediapipe.NormalizedRect.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setXCenter(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setYCenter(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setHeight(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setWidth(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRotation(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRectId(value);
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
proto.mediapipe.NormalizedRect.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.NormalizedRect.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.NormalizedRect} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.NormalizedRect.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * required float x_center = 1;
 * @return {number}
 */
proto.mediapipe.NormalizedRect.prototype.getXCenter = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.NormalizedRect} returns this
 */
proto.mediapipe.NormalizedRect.prototype.setXCenter = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.NormalizedRect} returns this
 */
proto.mediapipe.NormalizedRect.prototype.clearXCenter = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.NormalizedRect.prototype.hasXCenter = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required float y_center = 2;
 * @return {number}
 */
proto.mediapipe.NormalizedRect.prototype.getYCenter = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.NormalizedRect} returns this
 */
proto.mediapipe.NormalizedRect.prototype.setYCenter = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.NormalizedRect} returns this
 */
proto.mediapipe.NormalizedRect.prototype.clearYCenter = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.NormalizedRect.prototype.hasYCenter = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required float height = 3;
 * @return {number}
 */
proto.mediapipe.NormalizedRect.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.NormalizedRect} returns this
 */
proto.mediapipe.NormalizedRect.prototype.setHeight = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.NormalizedRect} returns this
 */
proto.mediapipe.NormalizedRect.prototype.clearHeight = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.NormalizedRect.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required float width = 4;
 * @return {number}
 */
proto.mediapipe.NormalizedRect.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.NormalizedRect} returns this
 */
proto.mediapipe.NormalizedRect.prototype.setWidth = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.NormalizedRect} returns this
 */
proto.mediapipe.NormalizedRect.prototype.clearWidth = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.NormalizedRect.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional float rotation = 5;
 * @return {number}
 */
proto.mediapipe.NormalizedRect.prototype.getRotation = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.NormalizedRect} returns this
 */
proto.mediapipe.NormalizedRect.prototype.setRotation = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.NormalizedRect} returns this
 */
proto.mediapipe.NormalizedRect.prototype.clearRotation = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.NormalizedRect.prototype.hasRotation = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 rect_id = 6;
 * @return {number}
 */
proto.mediapipe.NormalizedRect.prototype.getRectId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.NormalizedRect} returns this
 */
proto.mediapipe.NormalizedRect.prototype.setRectId = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.NormalizedRect} returns this
 */
proto.mediapipe.NormalizedRect.prototype.clearRectId = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.NormalizedRect.prototype.hasRectId = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.mediapipe);
