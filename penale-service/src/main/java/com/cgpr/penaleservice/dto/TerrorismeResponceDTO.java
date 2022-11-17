package com.cgpr.penaleservice.dto;

import lombok.Data;

import java.util.List;

@Data
public class TerrorismeResponceDTO {
    private List<StatTerrorimeChartDTO> statTerrorimeChartDTOS;
    private List<StatTerrorimePrisonDTO> statTerrorimePrisonDTOS;

}
