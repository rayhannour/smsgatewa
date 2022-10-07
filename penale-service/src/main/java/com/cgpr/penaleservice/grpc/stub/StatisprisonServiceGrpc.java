package com.cgpr.penaleservice.grpc.stub;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ClientCalls.asyncClientStreamingCall;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.blockingServerStreamingCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.stub.ServerCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ServerCalls.asyncClientStreamingCall;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.15.0)",
    comments = "Source: statisprison.proto")
public final class StatisprisonServiceGrpc {

  private StatisprisonServiceGrpc() {}

  public static final String SERVICE_NAME = "StatisprisonService";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatGlobalRequest,
      com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatListResponse> getGetStatisprMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "getStatispr",
      requestType = com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatGlobalRequest.class,
      responseType = com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatListResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatGlobalRequest,
      com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatListResponse> getGetStatisprMethod() {
    io.grpc.MethodDescriptor<com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatGlobalRequest, com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatListResponse> getGetStatisprMethod;
    if ((getGetStatisprMethod = StatisprisonServiceGrpc.getGetStatisprMethod) == null) {
      synchronized (StatisprisonServiceGrpc.class) {
        if ((getGetStatisprMethod = StatisprisonServiceGrpc.getGetStatisprMethod) == null) {
          StatisprisonServiceGrpc.getGetStatisprMethod = getGetStatisprMethod = 
              io.grpc.MethodDescriptor.<com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatGlobalRequest, com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatListResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "StatisprisonService", "getStatispr"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatGlobalRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatListResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new StatisprisonServiceMethodDescriptorSupplier("getStatispr"))
                  .build();
          }
        }
     }
     return getGetStatisprMethod;
  }

  private static volatile io.grpc.MethodDescriptor<com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourRequest,
      com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourResponse> getGetStatisprJourMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "getStatisprJour",
      requestType = com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourRequest.class,
      responseType = com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourResponse.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourRequest,
      com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourResponse> getGetStatisprJourMethod() {
    io.grpc.MethodDescriptor<com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourRequest, com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourResponse> getGetStatisprJourMethod;
    if ((getGetStatisprJourMethod = StatisprisonServiceGrpc.getGetStatisprJourMethod) == null) {
      synchronized (StatisprisonServiceGrpc.class) {
        if ((getGetStatisprJourMethod = StatisprisonServiceGrpc.getGetStatisprJourMethod) == null) {
          StatisprisonServiceGrpc.getGetStatisprJourMethod = getGetStatisprJourMethod = 
              io.grpc.MethodDescriptor.<com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourRequest, com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourResponse>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "StatisprisonService", "getStatisprJour"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourRequest.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourResponse.getDefaultInstance()))
                  .setSchemaDescriptor(new StatisprisonServiceMethodDescriptorSupplier("getStatisprJour"))
                  .build();
          }
        }
     }
     return getGetStatisprJourMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static StatisprisonServiceStub newStub(io.grpc.Channel channel) {
    return new StatisprisonServiceStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static StatisprisonServiceBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new StatisprisonServiceBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static StatisprisonServiceFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new StatisprisonServiceFutureStub(channel);
  }

  /**
   */
  public static abstract class StatisprisonServiceImplBase implements io.grpc.BindableService {

    /**
     */
    public void getStatispr(com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatGlobalRequest request,
        io.grpc.stub.StreamObserver<com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatListResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getGetStatisprMethod(), responseObserver);
    }

    /**
     */
    public void getStatisprJour(com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourRequest request,
        io.grpc.stub.StreamObserver<com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourResponse> responseObserver) {
      asyncUnimplementedUnaryCall(getGetStatisprJourMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getGetStatisprMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatGlobalRequest,
                com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatListResponse>(
                  this, METHODID_GET_STATISPR)))
          .addMethod(
            getGetStatisprJourMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourRequest,
                com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourResponse>(
                  this, METHODID_GET_STATISPR_JOUR)))
          .build();
    }
  }

  /**
   */
  public static final class StatisprisonServiceStub extends io.grpc.stub.AbstractStub<StatisprisonServiceStub> {
    private StatisprisonServiceStub(io.grpc.Channel channel) {
      super(channel);
    }

    private StatisprisonServiceStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected StatisprisonServiceStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new StatisprisonServiceStub(channel, callOptions);
    }

    /**
     */
    public void getStatispr(com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatGlobalRequest request,
        io.grpc.stub.StreamObserver<com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatListResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetStatisprMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getStatisprJour(com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourRequest request,
        io.grpc.stub.StreamObserver<com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourResponse> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetStatisprJourMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class StatisprisonServiceBlockingStub extends io.grpc.stub.AbstractStub<StatisprisonServiceBlockingStub> {
    private StatisprisonServiceBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private StatisprisonServiceBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected StatisprisonServiceBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new StatisprisonServiceBlockingStub(channel, callOptions);
    }

    /**
     */
    public com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatListResponse getStatispr(com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatGlobalRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetStatisprMethod(), getCallOptions(), request);
    }

    /**
     */
    public com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourResponse getStatisprJour(com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourRequest request) {
      return blockingUnaryCall(
          getChannel(), getGetStatisprJourMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class StatisprisonServiceFutureStub extends io.grpc.stub.AbstractStub<StatisprisonServiceFutureStub> {
    private StatisprisonServiceFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private StatisprisonServiceFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected StatisprisonServiceFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new StatisprisonServiceFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatListResponse> getStatispr(
        com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatGlobalRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetStatisprMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourResponse> getStatisprJour(
        com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourRequest request) {
      return futureUnaryCall(
          getChannel().newCall(getGetStatisprJourMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_GET_STATISPR = 0;
  private static final int METHODID_GET_STATISPR_JOUR = 1;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final StatisprisonServiceImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(StatisprisonServiceImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_GET_STATISPR:
          serviceImpl.getStatispr((com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatGlobalRequest) request,
              (io.grpc.stub.StreamObserver<com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatListResponse>) responseObserver);
          break;
        case METHODID_GET_STATISPR_JOUR:
          serviceImpl.getStatisprJour((com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourRequest) request,
              (io.grpc.stub.StreamObserver<com.cgpr.penaleservice.grpc.stub.Statisprison.GetStatJourResponse>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class StatisprisonServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    StatisprisonServiceBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return com.cgpr.penaleservice.grpc.stub.Statisprison.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("StatisprisonService");
    }
  }

  private static final class StatisprisonServiceFileDescriptorSupplier
      extends StatisprisonServiceBaseDescriptorSupplier {
    StatisprisonServiceFileDescriptorSupplier() {}
  }

  private static final class StatisprisonServiceMethodDescriptorSupplier
      extends StatisprisonServiceBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    StatisprisonServiceMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (StatisprisonServiceGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new StatisprisonServiceFileDescriptorSupplier())
              .addMethod(getGetStatisprMethod())
              .addMethod(getGetStatisprJourMethod())
              .build();
        }
      }
    }
    return result;
  }
}
