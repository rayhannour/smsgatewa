/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./statisprison_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.StatisprisonServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.StatisprisonServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetStatGlobalRequest,
 *   !proto.GetStatListResponse>}
 */
const methodDescriptor_StatisprisonService_getStatispr = new grpc.web.MethodDescriptor(
  '/StatisprisonService/getStatispr',
  grpc.web.MethodType.UNARY,
  proto.GetStatGlobalRequest,
  proto.GetStatListResponse,
  /**
   * @param {!proto.GetStatGlobalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetStatListResponse.deserializeBinary
);


/**
 * @param {!proto.GetStatGlobalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GetStatListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetStatListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StatisprisonServiceClient.prototype.getStatispr =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StatisprisonService/getStatispr',
      request,
      metadata || {},
      methodDescriptor_StatisprisonService_getStatispr,
      callback);
};


/**
 * @param {!proto.GetStatGlobalRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetStatListResponse>}
 *     Promise that resolves to the response
 */
proto.StatisprisonServicePromiseClient.prototype.getStatispr =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StatisprisonService/getStatispr',
      request,
      metadata || {},
      methodDescriptor_StatisprisonService_getStatispr);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetStatJourRequest,
 *   !proto.GetStatJourResponse>}
 */
const methodDescriptor_StatisprisonService_getStatisprJour = new grpc.web.MethodDescriptor(
  '/StatisprisonService/getStatisprJour',
  grpc.web.MethodType.UNARY,
  proto.GetStatJourRequest,
  proto.GetStatJourResponse,
  /**
   * @param {!proto.GetStatJourRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetStatJourResponse.deserializeBinary
);


/**
 * @param {!proto.GetStatJourRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.GetStatJourResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetStatJourResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.StatisprisonServiceClient.prototype.getStatisprJour =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/StatisprisonService/getStatisprJour',
      request,
      metadata || {},
      methodDescriptor_StatisprisonService_getStatisprJour,
      callback);
};


/**
 * @param {!proto.GetStatJourRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetStatJourResponse>}
 *     Promise that resolves to the response
 */
proto.StatisprisonServicePromiseClient.prototype.getStatisprJour =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/StatisprisonService/getStatisprJour',
      request,
      metadata || {},
      methodDescriptor_StatisprisonService_getStatisprJour);
};


module.exports = proto;

