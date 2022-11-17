package com.cgpr.penaleservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @AllArgsConstructor @NoArgsConstructor
@Builder
public class StatTerrorimePrisonDTO {
    private String prison;
    private String tcodgou;
    private String tcodpr;
    private Long countArreter;
    private Long countJuger;
}
