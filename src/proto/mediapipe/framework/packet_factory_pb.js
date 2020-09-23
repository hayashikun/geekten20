// source: mediapipe/framework/packet_factory.proto
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

goog.exportSymbol('proto.mediapipe.PacketFactoryConfig', null, global);
goog.exportSymbol('proto.mediapipe.PacketFactoryOptions', null, global);
goog.exportSymbol('proto.mediapipe.PacketManagerConfig', null, global);
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
proto.mediapipe.PacketFactoryOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 1, null, null);
};
goog.inherits(proto.mediapipe.PacketFactoryOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.PacketFactoryOptions.displayName = 'proto.mediapipe.PacketFactoryOptions';
}

/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldInfo>}
 */
proto.mediapipe.PacketFactoryOptions.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.mediapipe.PacketFactoryOptions.extensionsBinary = {};

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
proto.mediapipe.PacketFactoryConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.mediapipe.PacketFactoryConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.PacketFactoryConfig.displayName = 'proto.mediapipe.PacketFactoryConfig';
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
proto.mediapipe.PacketManagerConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mediapipe.PacketManagerConfig.repeatedFields_, null);
};
goog.inherits(proto.mediapipe.PacketManagerConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mediapipe.PacketManagerConfig.displayName = 'proto.mediapipe.PacketManagerConfig';
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
proto.mediapipe.PacketFactoryOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.PacketFactoryOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.PacketFactoryOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.PacketFactoryOptions.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.mediapipe.PacketFactoryOptions.extensions, proto.mediapipe.PacketFactoryOptions.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mediapipe.PacketFactoryOptions}
 */
proto.mediapipe.PacketFactoryOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.PacketFactoryOptions;
  return proto.mediapipe.PacketFactoryOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.PacketFactoryOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.PacketFactoryOptions}
 */
proto.mediapipe.PacketFactoryOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.mediapipe.PacketFactoryOptions.extensionsBinary,
        proto.mediapipe.PacketFactoryOptions.prototype.getExtension,
        proto.mediapipe.PacketFactoryOptions.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mediapipe.PacketFactoryOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.PacketFactoryOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.PacketFactoryOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.PacketFactoryOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.mediapipe.PacketFactoryOptions.extensionsBinary, proto.mediapipe.PacketFactoryOptions.prototype.getExtension);
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
proto.mediapipe.PacketFactoryConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.PacketFactoryConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.PacketFactoryConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.PacketFactoryConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    packetFactory: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    outputSidePacket: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    externalOutput: (f = jspb.Message.getField(msg, 1002)) == null ? undefined : f,
    options: (f = msg.getOptions()) && proto.mediapipe.PacketFactoryOptions.toObject(includeInstance, f)
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
 * @return {!proto.mediapipe.PacketFactoryConfig}
 */
proto.mediapipe.PacketFactoryConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.PacketFactoryConfig;
  return proto.mediapipe.PacketFactoryConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.PacketFactoryConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.PacketFactoryConfig}
 */
proto.mediapipe.PacketFactoryConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPacketFactory(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOutputSidePacket(value);
      break;
    case 1002:
      var value = /** @type {string} */ (reader.readString());
      msg.setExternalOutput(value);
      break;
    case 3:
      var value = new proto.mediapipe.PacketFactoryOptions;
      reader.readMessage(value,proto.mediapipe.PacketFactoryOptions.deserializeBinaryFromReader);
      msg.setOptions(value);
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
proto.mediapipe.PacketFactoryConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.PacketFactoryConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.PacketFactoryConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.PacketFactoryConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 1002));
  if (f != null) {
    writer.writeString(
      1002,
      f
    );
  }
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.mediapipe.PacketFactoryOptions.serializeBinaryToWriter
    );
  }
};


/**
 * optional string packet_factory = 1;
 * @return {string}
 */
proto.mediapipe.PacketFactoryConfig.prototype.getPacketFactory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mediapipe.PacketFactoryConfig} returns this
 */
proto.mediapipe.PacketFactoryConfig.prototype.setPacketFactory = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.PacketFactoryConfig} returns this
 */
proto.mediapipe.PacketFactoryConfig.prototype.clearPacketFactory = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.PacketFactoryConfig.prototype.hasPacketFactory = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string output_side_packet = 2;
 * @return {string}
 */
proto.mediapipe.PacketFactoryConfig.prototype.getOutputSidePacket = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mediapipe.PacketFactoryConfig} returns this
 */
proto.mediapipe.PacketFactoryConfig.prototype.setOutputSidePacket = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.PacketFactoryConfig} returns this
 */
proto.mediapipe.PacketFactoryConfig.prototype.clearOutputSidePacket = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.PacketFactoryConfig.prototype.hasOutputSidePacket = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string external_output = 1002;
 * @return {string}
 */
proto.mediapipe.PacketFactoryConfig.prototype.getExternalOutput = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1002, ""));
};


/**
 * @param {string} value
 * @return {!proto.mediapipe.PacketFactoryConfig} returns this
 */
proto.mediapipe.PacketFactoryConfig.prototype.setExternalOutput = function(value) {
  return jspb.Message.setField(this, 1002, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mediapipe.PacketFactoryConfig} returns this
 */
proto.mediapipe.PacketFactoryConfig.prototype.clearExternalOutput = function() {
  return jspb.Message.setField(this, 1002, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.PacketFactoryConfig.prototype.hasExternalOutput = function() {
  return jspb.Message.getField(this, 1002) != null;
};


/**
 * optional PacketFactoryOptions options = 3;
 * @return {?proto.mediapipe.PacketFactoryOptions}
 */
proto.mediapipe.PacketFactoryConfig.prototype.getOptions = function() {
  return /** @type{?proto.mediapipe.PacketFactoryOptions} */ (
    jspb.Message.getWrapperField(this, proto.mediapipe.PacketFactoryOptions, 3));
};


/**
 * @param {?proto.mediapipe.PacketFactoryOptions|undefined} value
 * @return {!proto.mediapipe.PacketFactoryConfig} returns this
*/
proto.mediapipe.PacketFactoryConfig.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mediapipe.PacketFactoryConfig} returns this
 */
proto.mediapipe.PacketFactoryConfig.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mediapipe.PacketFactoryConfig.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mediapipe.PacketManagerConfig.repeatedFields_ = [1];



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
proto.mediapipe.PacketManagerConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.mediapipe.PacketManagerConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mediapipe.PacketManagerConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.PacketManagerConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    packetList: jspb.Message.toObjectList(msg.getPacketList(),
    proto.mediapipe.PacketFactoryConfig.toObject, includeInstance)
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
 * @return {!proto.mediapipe.PacketManagerConfig}
 */
proto.mediapipe.PacketManagerConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mediapipe.PacketManagerConfig;
  return proto.mediapipe.PacketManagerConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mediapipe.PacketManagerConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mediapipe.PacketManagerConfig}
 */
proto.mediapipe.PacketManagerConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mediapipe.PacketFactoryConfig;
      reader.readMessage(value,proto.mediapipe.PacketFactoryConfig.deserializeBinaryFromReader);
      msg.addPacket(value);
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
proto.mediapipe.PacketManagerConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mediapipe.PacketManagerConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mediapipe.PacketManagerConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mediapipe.PacketManagerConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPacketList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mediapipe.PacketFactoryConfig.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PacketFactoryConfig packet = 1;
 * @return {!Array<!proto.mediapipe.PacketFactoryConfig>}
 */
proto.mediapipe.PacketManagerConfig.prototype.getPacketList = function() {
  return /** @type{!Array<!proto.mediapipe.PacketFactoryConfig>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mediapipe.PacketFactoryConfig, 1));
};


/**
 * @param {!Array<!proto.mediapipe.PacketFactoryConfig>} value
 * @return {!proto.mediapipe.PacketManagerConfig} returns this
*/
proto.mediapipe.PacketManagerConfig.prototype.setPacketList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mediapipe.PacketFactoryConfig=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mediapipe.PacketFactoryConfig}
 */
proto.mediapipe.PacketManagerConfig.prototype.addPacket = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mediapipe.PacketFactoryConfig, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mediapipe.PacketManagerConfig} returns this
 */
proto.mediapipe.PacketManagerConfig.prototype.clearPacketList = function() {
  return this.setPacketList([]);
};


goog.object.extend(exports, proto.mediapipe);
