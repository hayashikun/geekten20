// source: mediapipe/framework/testdata/zoo_mutation_calculator.proto
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

var mediapipe_framework_packet_generator_pb = require('../../../mediapipe/framework/packet_generator_pb.js');
goog.object.extend(proto, mediapipe_framework_packet_generator_pb);
var mediapipe_framework_testdata_zoo_mutator_pb = require('../../../mediapipe/framework/testdata/zoo_mutator_pb.js');
goog.object.extend(proto, mediapipe_framework_testdata_zoo_mutator_pb);
goog.exportSymbol('proto.google_zoo.zooMutatorConfigExt', null, global);

/**
 * A tuple of {field number, class constructor} for the extension
 * field named `zooMutatorConfigExt`.
 * @type {!jspb.ExtensionFieldInfo<!proto.google_zoo.ZooMutatorConfig>}
 */
proto.google_zoo.zooMutatorConfigExt = new jspb.ExtensionFieldInfo(
    235240278,
    {zooMutatorConfigExt: 0},
    mediapipe_framework_testdata_zoo_mutator_pb.ZooMutatorConfig,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         mediapipe_framework_testdata_zoo_mutator_pb.ZooMutatorConfig.toObject),
    0);

mediapipe_framework_packet_generator_pb.PacketGeneratorOptions.extensionsBinary[235240278] = new jspb.ExtensionFieldBinaryInfo(
    proto.google_zoo.zooMutatorConfigExt,
    jspb.BinaryReader.prototype.readMessage,
    jspb.BinaryWriter.prototype.writeMessage,
    mediapipe_framework_testdata_zoo_mutator_pb.ZooMutatorConfig.serializeBinaryToWriter,
    mediapipe_framework_testdata_zoo_mutator_pb.ZooMutatorConfig.deserializeBinaryFromReader,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
mediapipe_framework_packet_generator_pb.PacketGeneratorOptions.extensions[235240278] = proto.google_zoo.zooMutatorConfigExt;

goog.object.extend(exports, proto.google_zoo);
