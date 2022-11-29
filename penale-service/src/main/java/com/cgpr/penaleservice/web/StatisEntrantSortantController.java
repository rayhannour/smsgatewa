package com.cgpr.penaleservice.web;


import com.cgpr.penaleservice.dto.EntrantSortantResponceDTO;
import com.cgpr.penaleservice.entities.StatAge;
import com.cgpr.penaleservice.entities.StatEntrantSortantYear;
import com.cgpr.penaleservice.services.StatisEntrantSortantService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/stat/entrantsortant")
public class StatisEntrantSortantController {

    private StatisEntrantSortantService statisEntrantSortantService;

    public StatisEntrantSortantController(StatisEntrantSortantService statisEntrantSortantService) {
        this.statisEntrantSortantService = statisEntrantSortantService;
    }

    @GetMapping("/between/{yearsStart}/{yearsEnd}")
    public List<EntrantSortantResponceDTO> getStatEntrantSortant(@PathVariable(value = "yearsStart") Long yearsStart, @PathVariable(value = "yearsEnd") Long yearsEnd)  {
        List<EntrantSortantResponceDTO> lst=this.statisEntrantSortantService.findAllDTO(yearsStart,yearsEnd);
        return lst;
    }

    @GetMapping("/entrant/{years}")
    public List<StatEntrantSortantYear> getStatEntrant(@PathVariable(value = "years") Long years) throws IOException {
        List<StatEntrantSortantYear> lst=this.statisEntrantSortantService.findEntrantYear(years);
        return lst;
    }
    @GetMapping("/sortant/{years}")
    public List<StatEntrantSortantYear> getStatSortant(@PathVariable(value = "years") Long years)  {
        List<StatEntrantSortantYear> lst=this.statisEntrantSortantService.findSortantYear(years);
        return lst;
    }
}
