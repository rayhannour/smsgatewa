package com.cgpr.penaleservice.services;

import com.cgpr.penaleservice.dto.EntrantSortantResponceDTO;
import com.cgpr.penaleservice.entities.StatEntrantSortantYear;

import java.util.List;

public interface StatisEntrantSortantService {
    public  List<EntrantSortantResponceDTO> findAllDTO(Long yearsStart,Long yearsEnd);
    public  List<StatEntrantSortantYear> findEntrantYear(Long years);
    public  List<StatEntrantSortantYear> findSortantYear(Long years);
}
