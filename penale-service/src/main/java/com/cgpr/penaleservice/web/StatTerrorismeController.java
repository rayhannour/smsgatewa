package com.cgpr.penaleservice.web;


import com.cgpr.penaleservice.dto.EntrantSortantResponceDTO;
import com.cgpr.penaleservice.dto.TerrorismeResponceDTO;
import com.cgpr.penaleservice.services.StatisTerrorismeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/stat/terrorisme")
public class StatTerrorismeController {

    private StatisTerrorismeService statisTerrorismeService;

    public StatTerrorismeController(StatisTerrorismeService statisTerrorisme) {
        this.statisTerrorismeService = statisTerrorisme;
    }

    @GetMapping("/terrorismes")
    public TerrorismeResponceDTO getStatTerrorisme()  {
        TerrorismeResponceDTO lst=this.statisTerrorismeService.getStatGeneralTerrorisme();
        return lst;
    }



}
