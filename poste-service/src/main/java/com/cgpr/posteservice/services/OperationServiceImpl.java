package com.cgpr.posteservice.services;

import com.cgpr.posteservice.dto.OperationResponceDTO;
import com.cgpr.posteservice.entities.Operation;
import com.cgpr.posteservice.entities.OperationYearMounth;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;

@Service
public class OperationServiceImpl implements  OprationService{

    @PersistenceContext
    private EntityManager entityManager;

    public OperationServiceImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public List<OperationResponceDTO> findAllTransactionMantants() {
        List<OperationResponceDTO> operationResponceDTOS=new ArrayList<>();
        List<Operation> list=this.getAllTransactionsMantants();
        list.forEach(operation->{
            OperationResponceDTO operationResponceDTO=OperationResponceDTO.builder()
                    .counts(operation.getCounts())
                    .mantants(getMontantDinard(operation.getMontant()))
                    .alias(operation.getAlias())
                    .prison(operation.getPrison())
                    .build();
            operationResponceDTOS.add(operationResponceDTO);
    });
        return operationResponceDTOS;
    }


    @Override
    public List<OperationYearMounth> findAllYearsMounths(Long year) {
        List<OperationYearMounth> list=this.getAllTransactionsMantantsYearsMounth(year);

        return list;
    }

    public List<Operation> getAllTransactionsMantants(){
        String nativeQuery="Transaction.findAll";
        Query query = this.entityManager.createNamedQuery(nativeQuery);
        List<Operation> list = query.getResultList();
        this.entityManager.clear();
        return list;
    }




    public List<OperationYearMounth> getAllTransactionsMantantsYearsMounth(Long year){
        String nativeQuery="MontantYearMounth.findAll";
        Query query = this.entityManager.createNamedQuery(nativeQuery);
        query.setParameter(1,year);
        List<OperationYearMounth> list = query.getResultList();
        this.entityManager.clear();
        return list;
    }


    private Long getMontantDinard(Long montant){

        String mmantant=Long.toString(montant);

        if(mmantant!=null && mmantant.length()>3){
            mmantant= mmantant.substring(0,mmantant.length()-3);
            return Long.valueOf(mmantant);
        }
        return 0L;
    }


}
