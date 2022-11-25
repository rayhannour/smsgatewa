package com.cgpr.posteservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class OperationResponceDTO {
    private String prison;
    private Long counts;
    private Long mantants;
    private String alias;
    private String years;

}
