package com.cgpr.penaleservice.dto;

import lombok.Builder;
import lombok.Data;

@Data @Builder
public class EntrantSortantResponceDTO {
    private Long years;
    private Long EntrantCount;
    private Long SortatntCount;
}
