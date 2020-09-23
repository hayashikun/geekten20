// source: mediapipe/framework/formats/landmark.proto
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

goog.exportSymbol('proto.mediapipe.Landmark', null, global);
goog.exportSymbol('proto.mediapipe.LandmarkList', null, global);
goog.exportSymbol('proto.mediapipe.NormalizedLandmark', null, global);
goog.exportSymbol('proto.mediapipe.NormalizedLandmarkList', null, global);
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
proto.mediapipe.Landmark = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mediapipe.Landmark, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.Landmark.displayName = 'proto.mediapipe.Landmark';
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
proto.mediapipe.LandmarkList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mediapipe.LandmarkList.repeatedFields_, null);
};
goog.inherits(proto.mediapipe.LandmarkList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.LandmarkList.displayName = 'proto.mediapipe.LandmarkList';
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
proto.mediapipe.NormalizedLandmark = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mediapipe.NormalizedLandmark, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.NormalizedLandmark.displayName = 'proto.mediapipe.NormalizedLandmark';
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
proto.mediapipe.NormalizedLandmarkList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mediapipe.NormalizedLandmarkList.repeatedFields_, null);
};
goog.inherits(proto.mediapipe.NormalizedLandmarkList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.NormalizedLandmarkList.displayName = 'proto.mediapipe.NormalizedLandmarkList';
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
proto.mediapipe.Landmark.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.Landmark.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.Landmark} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.Landmark.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    y: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    z: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    visibility: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.mediapipe.Landmark}
 */
proto.mediapipe.Landmark.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.Landmark;
  return proto.mediapipe.Landmark.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.Landmark} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.Landmark}
 */
proto.mediapipe.Landmark.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setZ(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVisibility(value);
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
proto.mediapipe.Landmark.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.Landmark.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.Landmark} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.Landmark.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional float x = 1;
 * @return {number}
 */
proto.mediapipe.Landmark.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.Landmark} returns this
 */
proto.mediapipe.Landmark.prototype.setX = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.Landmark} returns this
 */
proto.mediapipe.Landmark.prototype.clearX = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.Landmark.prototype.hasX = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.mediapipe.Landmark.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.Landmark} returns this
 */
proto.mediapipe.Landmark.prototype.setY = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.Landmark} returns this
 */
proto.mediapipe.Landmark.prototype.clearY = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.Landmark.prototype.hasY = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float z = 3;
 * @return {number}
 */
proto.mediapipe.Landmark.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.Landmark} returns this
 */
proto.mediapipe.Landmark.prototype.setZ = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.Landmark} returns this
 */
proto.mediapipe.Landmark.prototype.clearZ = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.Landmark.prototype.hasZ = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional float visibility = 4;
 * @return {number}
 */
proto.mediapipe.Landmark.prototype.getVisibility = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.Landmark} returns this
 */
proto.mediapipe.Landmark.prototype.setVisibility = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.Landmark} returns this
 */
proto.mediapipe.Landmark.prototype.clearVisibility = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.Landmark.prototype.hasVisibility = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mediapipe.LandmarkList.repeatedFields_ = [1];



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
proto.mediapipe.LandmarkList.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.LandmarkList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.LandmarkList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.LandmarkList.toObject = function(includeInstance, msg) {
  var f, obj = {
    landmarkList: jspb.Message.toObjectList(msg.getLandmarkList(),
    proto.mediapipe.Landmark.toObject, includeInstance)
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
 * @return {!proto.mediapipe.LandmarkList}
 */
proto.mediapipe.LandmarkList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.LandmarkList;
  return proto.mediapipe.LandmarkList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.LandmarkList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.LandmarkList}
 */
proto.mediapipe.LandmarkList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mediapipe.Landmark;
      reader.readMessage(value,proto.mediapipe.Landmark.deserializeBinaryFromReader);
      msg.addLandmark(value);
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
proto.mediapipe.LandmarkList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.LandmarkList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.LandmarkList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.LandmarkList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLandmarkList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mediapipe.Landmark.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Landmark landmark = 1;
 * @return {!Array<!proto.mediapipe.Landmark>}
 */
proto.mediapipe.LandmarkList.prototype.getLandmarkList = function() {
  return /** @type{!Array<!proto.mediapipe.Landmark>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mediapipe.Landmark, 1));
};


/**
 * @param {!Array<!proto.mediapipe.Landmark>} value
 * @return {!proto.mediapipe.LandmarkList} returns this
*/
proto.mediapipe.LandmarkList.prototype.setLandmarkList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mediapipe.Landmark=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mediapipe.Landmark}
 */
proto.mediapipe.LandmarkList.prototype.addLandmark = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mediapipe.Landmark, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mediapipe.LandmarkList} returns this
 */
proto.mediapipe.LandmarkList.prototype.clearLandmarkList = function() {
  return this.setLandmarkList([]);
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
proto.mediapipe.NormalizedLandmark.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.NormalizedLandmark.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.NormalizedLandmark} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.NormalizedLandmark.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    y: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    z: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    visibility: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.mediapipe.NormalizedLandmark}
 */
proto.mediapipe.NormalizedLandmark.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.NormalizedLandmark;
  return proto.mediapipe.NormalizedLandmark.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.NormalizedLandmark} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.NormalizedLandmark}
 */
proto.mediapipe.NormalizedLandmark.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setZ(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setVisibility(value);
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
proto.mediapipe.NormalizedLandmark.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.NormalizedLandmark.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.NormalizedLandmark} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.NormalizedLandmark.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional float x = 1;
 * @return {number}
 */
proto.mediapipe.NormalizedLandmark.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.NormalizedLandmark} returns this
 */
proto.mediapipe.NormalizedLandmark.prototype.setX = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.NormalizedLandmark} returns this
 */
proto.mediapipe.NormalizedLandmark.prototype.clearX = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.NormalizedLandmark.prototype.hasX = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.mediapipe.NormalizedLandmark.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.NormalizedLandmark} returns this
 */
proto.mediapipe.NormalizedLandmark.prototype.setY = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.NormalizedLandmark} returns this
 */
proto.mediapipe.NormalizedLandmark.prototype.clearY = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.NormalizedLandmark.prototype.hasY = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float z = 3;
 * @return {number}
 */
proto.mediapipe.NormalizedLandmark.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.NormalizedLandmark} returns this
 */
proto.mediapipe.NormalizedLandmark.prototype.setZ = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.NormalizedLandmark} returns this
 */
proto.mediapipe.NormalizedLandmark.prototype.clearZ = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.NormalizedLandmark.prototype.hasZ = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional float visibility = 4;
 * @return {number}
 */
proto.mediapipe.NormalizedLandmark.prototype.getVisibility = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.NormalizedLandmark} returns this
 */
proto.mediapipe.NormalizedLandmark.prototype.setVisibility = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.NormalizedLandmark} returns this
 */
proto.mediapipe.NormalizedLandmark.prototype.clearVisibility = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.NormalizedLandmark.prototype.hasVisibility = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mediapipe.NormalizedLandmarkList.repeatedFields_ = [1];



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
proto.mediapipe.NormalizedLandmarkList.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.NormalizedLandmarkList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.NormalizedLandmarkList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.NormalizedLandmarkList.toObject = function(includeInstance, msg) {
  var f, obj = {
    landmarkList: jspb.Message.toObjectList(msg.getLandmarkList(),
    proto.mediapipe.NormalizedLandmark.toObject, includeInstance)
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
 * @return {!proto.mediapipe.NormalizedLandmarkList}
 */
proto.mediapipe.NormalizedLandmarkList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.NormalizedLandmarkList;
  return proto.mediapipe.NormalizedLandmarkList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.NormalizedLandmarkList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.NormalizedLandmarkList}
 */
proto.mediapipe.NormalizedLandmarkList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mediapipe.NormalizedLandmark;
      reader.readMessage(value,proto.mediapipe.NormalizedLandmark.deserializeBinaryFromReader);
      msg.addLandmark(value);
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
proto.mediapipe.NormalizedLandmarkList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.NormalizedLandmarkList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.NormalizedLandmarkList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.NormalizedLandmarkList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLandmarkList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mediapipe.NormalizedLandmark.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NormalizedLandmark landmark = 1;
 * @return {!Array<!proto.mediapipe.NormalizedLandmark>}
 */
proto.mediapipe.NormalizedLandmarkList.prototype.getLandmarkList = function() {
  return /** @type{!Array<!proto.mediapipe.NormalizedLandmark>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mediapipe.NormalizedLandmark, 1));
};


/**
 * @param {!Array<!proto.mediapipe.NormalizedLandmark>} value
 * @return {!proto.mediapipe.NormalizedLandmarkList} returns this
*/
proto.mediapipe.NormalizedLandmarkList.prototype.setLandmarkList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mediapipe.NormalizedLandmark=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mediapipe.NormalizedLandmark}
 */
proto.mediapipe.NormalizedLandmarkList.prototype.addLandmark = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mediapipe.NormalizedLandmark, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mediapipe.NormalizedLandmarkList} returns this
 */
proto.mediapipe.NormalizedLandmarkList.prototype.clearLandmarkList = function() {
  return this.setLandmarkList([]);
};


goog.object.extend(exports, proto.mediapipe);
