package com.cgpr.penaleservice.mappers;

import com.cgpr.penaleservice.entities.Statispr;
import com.cgpr.penaleservice.grpc.stub.Statisprison;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class StatisPrisonMapperImpl {

    public Statisprison.Statispr fromStatisprEntity(Statispr statispr) {
        Statisprison.Statispr statisprGrpc = Statisprison.Statispr.newBuilder()
                .setCount(statispr.getCOUNT())
                .setTdatjour(statispr.getTDATJOUR().getTime())
                .build();
        return statisprGrpc;
    }

    public Statispr toStatisprEntity(Statisprison.Statispr statisprGrpc) {
        Statispr statispr = new Statispr(null,(long)statisprGrpc.getCount());

        return statispr;
    }


}
