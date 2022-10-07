package com.cgpr.penaleservice.grpc.service;

import com.cgpr.penaleservice.entities.Statispr;
import com.cgpr.penaleservice.grpc.stub.Statisprison;
import com.cgpr.penaleservice.grpc.stub.StatisprisonServiceGrpc;
import com.cgpr.penaleservice.mappers.StatisPrisonMapperImpl;
import com.cgpr.penaleservice.services.StatisprService;
import io.grpc.stub.StreamObserver;
import net.devh.boot.grpc.server.service.GrpcService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.stream.Collectors;

@GrpcService
public class StatisprisonGrpcServiceImpl extends StatisprisonServiceGrpc.StatisprisonServiceImplBase {

    @Autowired
    private StatisPrisonMapperImpl statisPrisonMapper;

    @Autowired
    private StatisprService statisprService;



    @Override
    public void getStatispr(Statisprison.GetStatGlobalRequest request, StreamObserver<Statisprison.GetStatListResponse> responseStreamObserver){
        List<Statispr> list=statisprService.countGlobal();

        List<Statisprison.Statispr> grpcStatisprList = list.stream().map(statissprs -> statisPrisonMapper.fromStatisprEntity(statissprs)).collect(Collectors.toList());

        Statisprison.GetStatListResponse listPrisonStatispr=Statisprison.GetStatListResponse.newBuilder()
                .addAllStatispr(grpcStatisprList).build();
        responseStreamObserver.onNext(listPrisonStatispr);
        responseStreamObserver.onCompleted();


}
}
