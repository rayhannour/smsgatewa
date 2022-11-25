package com.cgpr.posteservice.web;

import com.cgpr.posteservice.dto.OperationResponceDTO;

import com.cgpr.posteservice.entities.OperationYearMounth;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cgpr.posteservice.services.OprationService;
import java.util.List;

@RestController
@RequestMapping("/stat/poste")
public class OperationController {
    private OprationService oprationService;

    public OperationController(OprationService operationService) {
        this.oprationService = operationService;
    }

    @GetMapping("/operationsmontants")
    public List<OperationResponceDTO> findAllTransaction(){
        return this.oprationService.findAllTransactionMantants();
    }
    @GetMapping("/years/{year}")

    public List<OperationYearMounth> findAllTransaction(@PathVariable(value = "year") Long year){
        return this.oprationService.findAllYearsMounths(year);
    }

}
