// source: mediapipe/framework/formats/annotation/locus.proto
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

var mediapipe_framework_formats_annotation_rasterization_pb = require('../../../../mediapipe/framework/formats/annotation/rasterization_pb.js');
goog.object.extend(proto, mediapipe_framework_formats_annotation_rasterization_pb);
goog.exportSymbol('proto.mediapipe.BoundingBox', null, global);
goog.exportSymbol('proto.mediapipe.Locus', null, global);
goog.exportSymbol('proto.mediapipe.Locus.LocusType', null, global);
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
proto.mediapipe.Locus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mediapipe.Locus.repeatedFields_, null);
};
goog.inherits(proto.mediapipe.Locus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.Locus.displayName = 'proto.mediapipe.Locus';
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
proto.mediapipe.BoundingBox = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mediapipe.BoundingBox, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.BoundingBox.displayName = 'proto.mediapipe.BoundingBox';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mediapipe.Locus.repeatedFields_ = [8];



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
proto.mediapipe.Locus.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.Locus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.Locus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.Locus.toObject = function(includeInstance, msg) {
  var f, obj = {
    locusType: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    locusId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    locusIdSeed: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    concatenatable: jspb.Message.getBooleanFieldWithDefault(msg, 5, true),
    boundingBox: (f = msg.getBoundingBox()) && proto.mediapipe.BoundingBox.toObject(includeInstance, f),
    timestamp: jspb.Message.getFieldWithDefault(msg, 7, -1),
    region: (f = msg.getRegion()) && mediapipe_framework_formats_annotation_rasterization_pb.Rasterization.toObject(includeInstance, f),
    componentLocusList: jspb.Message.toObjectList(msg.getComponentLocusList(),
    proto.mediapipe.Locus.toObject, includeInstance)
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
 * @return {!proto.mediapipe.Locus}
 */
proto.mediapipe.Locus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.Locus;
  return proto.mediapipe.Locus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.Locus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.Locus}
 */
proto.mediapipe.Locus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mediapipe.Locus.LocusType} */ (reader.readEnum());
      msg.setLocusType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setLocusId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setLocusIdSeed(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConcatenatable(value);
      break;
    case 3:
      var value = new proto.mediapipe.BoundingBox;
      reader.readMessage(value,proto.mediapipe.BoundingBox.deserializeBinaryFromReader);
      msg.setBoundingBox(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimestamp(value);
      break;
    case 4:
      var value = new mediapipe_framework_formats_annotation_rasterization_pb.Rasterization;
      reader.readMessage(value,mediapipe_framework_formats_annotation_rasterization_pb.Rasterization.deserializeBinaryFromReader);
      msg.setRegion(value);
      break;
    case 8:
      var value = new proto.mediapipe.Locus;
      reader.readMessage(value,proto.mediapipe.Locus.deserializeBinaryFromReader);
      msg.addComponentLocus(value);
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
proto.mediapipe.Locus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.Locus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.Locus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.Locus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.mediapipe.Locus.LocusType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFixed64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeFixed64(
      6,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getBoundingBox();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mediapipe.BoundingBox.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getRegion();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      mediapipe_framework_formats_annotation_rasterization_pb.Rasterization.serializeBinaryToWriter
    );
  }
  f = message.getComponentLocusList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.mediapipe.Locus.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.mediapipe.Locus.LocusType = {
  GLOBAL: 1,
  BOUNDING_BOX: 2,
  REGION: 3,
  VIDEO_TUBE: 4
};

/**
 * optional LocusType locus_type = 1;
 * @return {!proto.mediapipe.Locus.LocusType}
 */
proto.mediapipe.Locus.prototype.getLocusType = function() {
  return /** @type {!proto.mediapipe.Locus.LocusType} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.mediapipe.Locus.LocusType} value
 * @return {!proto.mediapipe.Locus} returns this
 */
proto.mediapipe.Locus.prototype.setLocusType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.Locus} returns this
 */
proto.mediapipe.Locus.prototype.clearLocusType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.Locus.prototype.hasLocusType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional fixed64 locus_id = 2;
 * @return {number}
 */
proto.mediapipe.Locus.prototype.getLocusId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.Locus} returns this
 */
proto.mediapipe.Locus.prototype.setLocusId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.Locus} returns this
 */
proto.mediapipe.Locus.prototype.clearLocusId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.Locus.prototype.hasLocusId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional fixed64 locus_id_seed = 6;
 * @return {number}
 */
proto.mediapipe.Locus.prototype.getLocusIdSeed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.Locus} returns this
 */
proto.mediapipe.Locus.prototype.setLocusIdSeed = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.Locus} returns this
 */
proto.mediapipe.Locus.prototype.clearLocusIdSeed = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.Locus.prototype.hasLocusIdSeed = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool concatenatable = 5;
 * @return {boolean}
 */
proto.mediapipe.Locus.prototype.getConcatenatable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, true));
};


/**
 * @param {boolean} value
 * @return {!proto.mediapipe.Locus} returns this
 */
proto.mediapipe.Locus.prototype.setConcatenatable = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.Locus} returns this
 */
proto.mediapipe.Locus.prototype.clearConcatenatable = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.Locus.prototype.hasConcatenatable = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional BoundingBox bounding_box = 3;
 * @return {?proto.mediapipe.BoundingBox}
 */
proto.mediapipe.Locus.prototype.getBoundingBox = function() {
  return /** @type{?proto.mediapipe.BoundingBox} */ (
    jspb.Message.getWrapperField(this, proto.mediapipe.BoundingBox, 3));
};


/**
 * @param {?proto.mediapipe.BoundingBox|undefined} value
 * @return {!proto.mediapipe.Locus} returns this
*/
proto.mediapipe.Locus.prototype.setBoundingBox = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mediapipe.Locus} returns this
 */
proto.mediapipe.Locus.prototype.clearBoundingBox = function() {
  return this.setBoundingBox(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.Locus.prototype.hasBoundingBox = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 timestamp = 7;
 * @return {number}
 */
proto.mediapipe.Locus.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, -1));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.Locus} returns this
 */
proto.mediapipe.Locus.prototype.setTimestamp = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.Locus} returns this
 */
proto.mediapipe.Locus.prototype.clearTimestamp = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.Locus.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Rasterization region = 4;
 * @return {?proto.mediapipe.Rasterization}
 */
proto.mediapipe.Locus.prototype.getRegion = function() {
  return /** @type{?proto.mediapipe.Rasterization} */ (
    jspb.Message.getWrapperField(this, mediapipe_framework_formats_annotation_rasterization_pb.Rasterization, 4));
};


/**
 * @param {?proto.mediapipe.Rasterization|undefined} value
 * @return {!proto.mediapipe.Locus} returns this
*/
proto.mediapipe.Locus.prototype.setRegion = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mediapipe.Locus} returns this
 */
proto.mediapipe.Locus.prototype.clearRegion = function() {
  return this.setRegion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.Locus.prototype.hasRegion = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated Locus component_locus = 8;
 * @return {!Array<!proto.mediapipe.Locus>}
 */
proto.mediapipe.Locus.prototype.getComponentLocusList = function() {
  return /** @type{!Array<!proto.mediapipe.Locus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mediapipe.Locus, 8));
};


/**
 * @param {!Array<!proto.mediapipe.Locus>} value
 * @return {!proto.mediapipe.Locus} returns this
*/
proto.mediapipe.Locus.prototype.setComponentLocusList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.mediapipe.Locus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mediapipe.Locus}
 */
proto.mediapipe.Locus.prototype.addComponentLocus = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.mediapipe.Locus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mediapipe.Locus} returns this
 */
proto.mediapipe.Locus.prototype.clearComponentLocusList = function() {
  return this.setComponentLocusList([]);
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
proto.mediapipe.BoundingBox.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.BoundingBox.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.BoundingBox} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.BoundingBox.toObject = function(includeInstance, msg) {
  var f, obj = {
    leftX: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    upperY: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    rightX: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    lowerY: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.mediapipe.BoundingBox}
 */
proto.mediapipe.BoundingBox.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.BoundingBox;
  return proto.mediapipe.BoundingBox.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.BoundingBox} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.BoundingBox}
 */
proto.mediapipe.BoundingBox.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeftX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUpperY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRightX(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLowerY(value);
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
proto.mediapipe.BoundingBox.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.BoundingBox.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.BoundingBox} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.BoundingBox.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional int32 left_x = 1;
 * @return {number}
 */
proto.mediapipe.BoundingBox.prototype.getLeftX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.BoundingBox} returns this
 */
proto.mediapipe.BoundingBox.prototype.setLeftX = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.BoundingBox} returns this
 */
proto.mediapipe.BoundingBox.prototype.clearLeftX = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.BoundingBox.prototype.hasLeftX = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 upper_y = 2;
 * @return {number}
 */
proto.mediapipe.BoundingBox.prototype.getUpperY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.BoundingBox} returns this
 */
proto.mediapipe.BoundingBox.prototype.setUpperY = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.BoundingBox} returns this
 */
proto.mediapipe.BoundingBox.prototype.clearUpperY = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.BoundingBox.prototype.hasUpperY = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 right_x = 3;
 * @return {number}
 */
proto.mediapipe.BoundingBox.prototype.getRightX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.BoundingBox} returns this
 */
proto.mediapipe.BoundingBox.prototype.setRightX = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.BoundingBox} returns this
 */
proto.mediapipe.BoundingBox.prototype.clearRightX = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.BoundingBox.prototype.hasRightX = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 lower_y = 4;
 * @return {number}
 */
proto.mediapipe.BoundingBox.prototype.getLowerY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.BoundingBox} returns this
 */
proto.mediapipe.BoundingBox.prototype.setLowerY = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.BoundingBox} returns this
 */
proto.mediapipe.BoundingBox.prototype.clearLowerY = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.BoundingBox.prototype.hasLowerY = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.mediapipe);
