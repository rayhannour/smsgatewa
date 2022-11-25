package com.cgpr.posteservice.services;

import com.cgpr.posteservice.dto.OperationResponceDTO;
import com.cgpr.posteservice.entities.OperationYearMounth;

import java.util.List;

public interface OprationService {
    public List<OperationResponceDTO> findAllTransactionMantants();
    public List<OperationYearMounth> findAllYearsMounths(Long year);

}
