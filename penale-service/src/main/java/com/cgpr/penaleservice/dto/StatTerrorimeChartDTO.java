package com.cgpr.penaleservice.dto;

import lombok.Builder;
import lombok.Data;

@Data @Builder
public class StatTerrorimeChartDTO {
    private String tetat;
    private Long counts;
    private String tcodsex;
}
