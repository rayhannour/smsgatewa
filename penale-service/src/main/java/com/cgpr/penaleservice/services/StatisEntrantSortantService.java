package com.cgpr.penaleservice.services;

import com.cgpr.penaleservice.dto.EntrantSortantResponceDTO;
import com.cgpr.penaleservice.entities.StatEntrantSortantYear;

import java.io.IOException;
import java.util.List;

public interface StatisEntrantSortantService {
    public  List<EntrantSortantResponceDTO> findAllDTO(Long yearsStart,Long yearsEnd);
    public  List<StatEntrantSortantYear> findEntrantYear(Long years) throws IOException;
    public  List<StatEntrantSortantYear> findSortantYear(Long years);
}
