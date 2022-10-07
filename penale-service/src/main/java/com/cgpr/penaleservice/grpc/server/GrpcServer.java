package com.cgpr.penaleservice.grpc.server;

import com.cgpr.penaleservice.grpc.service.StatisprisonGrpcServiceImpl;
import io.grpc.Server;
import io.grpc.ServerBuilder;

import java.io.IOException;

public class GrpcServer {
    public static void main(String[] args) throws IOException, InterruptedException {
        Server server= ServerBuilder.forPort(9090)
                .addService(new StatisprisonGrpcServiceImpl())
                .build();
        server.start();
        server.awaitTermination();
    }
}
