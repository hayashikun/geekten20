// source: mediapipe/framework/packet_test.proto
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

goog.exportSymbol('proto.mediapipe.InputOnlyProto', null, global);
goog.exportSymbol('proto.mediapipe.PacketTestProto', null, global);
goog.exportSymbol('proto.mediapipe.SerializationProxyProto', null, global);
goog.exportSymbol('proto.mediapipe.SimpleProto', null, global);
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
proto.mediapipe.PacketTestProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.mediapipe.PacketTestProto.repeatedFields_, null);
};
goog.inherits(proto.mediapipe.PacketTestProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.PacketTestProto.displayName = 'proto.mediapipe.PacketTestProto';
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
proto.mediapipe.SimpleProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mediapipe.SimpleProto.repeatedFields_, null);
};
goog.inherits(proto.mediapipe.SimpleProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.SimpleProto.displayName = 'proto.mediapipe.SimpleProto';
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
proto.mediapipe.SerializationProxyProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mediapipe.SerializationProxyProto.repeatedFields_, null);
};
goog.inherits(proto.mediapipe.SerializationProxyProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.SerializationProxyProto.displayName = 'proto.mediapipe.SerializationProxyProto';
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
proto.mediapipe.InputOnlyProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mediapipe.InputOnlyProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.InputOnlyProto.displayName = 'proto.mediapipe.InputOnlyProto';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mediapipe.PacketTestProto.repeatedFields_ = [1777,268437233];



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
proto.mediapipe.PacketTestProto.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.PacketTestProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.PacketTestProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.PacketTestProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    xList: (f = jspb.Message.getRepeatedField(msg, 1777)) == null ? undefined : f,
    yList: (f = jspb.Message.getRepeatedField(msg, 268437233)) == null ? undefined : f
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
 * @return {!proto.mediapipe.PacketTestProto}
 */
proto.mediapipe.PacketTestProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.PacketTestProto;
  return proto.mediapipe.PacketTestProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.PacketTestProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.PacketTestProto}
 */
proto.mediapipe.PacketTestProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1777:
      var value = /** @type {number} */ (reader.readInt32());
      msg.addX(value);
      break;
    case 268437233:
      var value = /** @type {number} */ (reader.readInt32());
      msg.addY(value);
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
proto.mediapipe.PacketTestProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.PacketTestProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.PacketTestProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.PacketTestProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getXList();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      1777,
      f
    );
  }
  f = message.getYList();
  if (f.length > 0) {
    writer.writeRepeatedInt32(
      268437233,
      f
    );
  }
};


/**
 * repeated int32 x = 1777;
 * @return {!Array<number>}
 */
proto.mediapipe.PacketTestProto.prototype.getXList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1777));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.mediapipe.PacketTestProto} returns this
 */
proto.mediapipe.PacketTestProto.prototype.setXList = function(value) {
  return jspb.Message.setField(this, 1777, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.mediapipe.PacketTestProto} returns this
 */
proto.mediapipe.PacketTestProto.prototype.addX = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1777, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mediapipe.PacketTestProto} returns this
 */
proto.mediapipe.PacketTestProto.prototype.clearXList = function() {
  return this.setXList([]);
};


/**
 * repeated int32 y = 268437233;
 * @return {!Array<number>}
 */
proto.mediapipe.PacketTestProto.prototype.getYList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 268437233));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.mediapipe.PacketTestProto} returns this
 */
proto.mediapipe.PacketTestProto.prototype.setYList = function(value) {
  return jspb.Message.setField(this, 268437233, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.mediapipe.PacketTestProto} returns this
 */
proto.mediapipe.PacketTestProto.prototype.addY = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 268437233, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mediapipe.PacketTestProto} returns this
 */
proto.mediapipe.PacketTestProto.prototype.clearYList = function() {
  return this.setYList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mediapipe.SimpleProto.repeatedFields_ = [1];



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
proto.mediapipe.SimpleProto.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.SimpleProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.SimpleProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.SimpleProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueList: msg.getValueList_asB64()
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
 * @return {!proto.mediapipe.SimpleProto}
 */
proto.mediapipe.SimpleProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.SimpleProto;
  return proto.mediapipe.SimpleProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.SimpleProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.SimpleProto}
 */
proto.mediapipe.SimpleProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addValue(value);
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
proto.mediapipe.SimpleProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.SimpleProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.SimpleProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.SimpleProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes value = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.mediapipe.SimpleProto.prototype.getValueList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes value = 1;
 * This is a type-conversion wrapper around `getValueList()`
 * @return {!Array<string>}
 */
proto.mediapipe.SimpleProto.prototype.getValueList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getValueList()));
};


/**
 * repeated bytes value = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getValueList()`
 * @return {!Array<!Uint8Array>}
 */
proto.mediapipe.SimpleProto.prototype.getValueList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getValueList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.mediapipe.SimpleProto} returns this
 */
proto.mediapipe.SimpleProto.prototype.setValueList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.mediapipe.SimpleProto} returns this
 */
proto.mediapipe.SimpleProto.prototype.addValue = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mediapipe.SimpleProto} returns this
 */
proto.mediapipe.SimpleProto.prototype.clearValueList = function() {
  return this.setValueList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mediapipe.SerializationProxyProto.repeatedFields_ = [2,3];



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
proto.mediapipe.SerializationProxyProto.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.SerializationProxyProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.SerializationProxyProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.SerializationProxyProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    boolValue: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f,
    floatValueList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f,
    stringValueList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.mediapipe.SerializationProxyProto}
 */
proto.mediapipe.SerializationProxyProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.SerializationProxyProto;
  return proto.mediapipe.SerializationProxyProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.SerializationProxyProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.SerializationProxyProto}
 */
proto.mediapipe.SerializationProxyProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.addFloatValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addStringValue(value);
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
proto.mediapipe.SerializationProxyProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.SerializationProxyProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.SerializationProxyProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.SerializationProxyProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getFloatValueList();
  if (f.length > 0) {
    writer.writeRepeatedFloat(
      2,
      f
    );
  }
  f = message.getStringValueList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional bool bool_value = 1;
 * @return {boolean}
 */
proto.mediapipe.SerializationProxyProto.prototype.getBoolValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mediapipe.SerializationProxyProto} returns this
 */
proto.mediapipe.SerializationProxyProto.prototype.setBoolValue = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.SerializationProxyProto} returns this
 */
proto.mediapipe.SerializationProxyProto.prototype.clearBoolValue = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.SerializationProxyProto.prototype.hasBoolValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated float float_value = 2;
 * @return {!Array<number>}
 */
proto.mediapipe.SerializationProxyProto.prototype.getFloatValueList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.mediapipe.SerializationProxyProto} returns this
 */
proto.mediapipe.SerializationProxyProto.prototype.setFloatValueList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.mediapipe.SerializationProxyProto} returns this
 */
proto.mediapipe.SerializationProxyProto.prototype.addFloatValue = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mediapipe.SerializationProxyProto} returns this
 */
proto.mediapipe.SerializationProxyProto.prototype.clearFloatValueList = function() {
  return this.setFloatValueList([]);
};


/**
 * repeated string string_value = 3;
 * @return {!Array<string>}
 */
proto.mediapipe.SerializationProxyProto.prototype.getStringValueList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.mediapipe.SerializationProxyProto} returns this
 */
proto.mediapipe.SerializationProxyProto.prototype.setStringValueList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.mediapipe.SerializationProxyProto} returns this
 */
proto.mediapipe.SerializationProxyProto.prototype.addStringValue = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mediapipe.SerializationProxyProto} returns this
 */
proto.mediapipe.SerializationProxyProto.prototype.clearStringValueList = function() {
  return this.setStringValueList([]);
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
proto.mediapipe.InputOnlyProto.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.InputOnlyProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.InputOnlyProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.InputOnlyProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.mediapipe.InputOnlyProto}
 */
proto.mediapipe.InputOnlyProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.InputOnlyProto;
  return proto.mediapipe.InputOnlyProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.InputOnlyProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.InputOnlyProto}
 */
proto.mediapipe.InputOnlyProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
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
proto.mediapipe.InputOnlyProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.InputOnlyProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.InputOnlyProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.InputOnlyProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.mediapipe.InputOnlyProto.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mediapipe.InputOnlyProto} returns this
 */
proto.mediapipe.InputOnlyProto.prototype.setX = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.InputOnlyProto} returns this
 */
proto.mediapipe.InputOnlyProto.prototype.clearX = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.InputOnlyProto.prototype.hasX = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.mediapipe);