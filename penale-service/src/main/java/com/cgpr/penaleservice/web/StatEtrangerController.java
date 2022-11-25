package com.cgpr.penaleservice.web;


        import com.cgpr.penaleservice.dto.EntrantSortantResponceDTO;
        import com.cgpr.penaleservice.dto.TerrorismeResponceDTO;
        import com.cgpr.penaleservice.services.StatisEtrangerService;
        import com.cgpr.penaleservice.services.StatisTerrorismeService;
        import org.springframework.web.bind.annotation.GetMapping;
        import org.springframework.web.bind.annotation.RequestMapping;
        import org.springframework.web.bind.annotation.RestController;

        import java.util.List;

@RestController
@RequestMapping("/stat/etranger")
public class StatEtrangerController {

    private StatisEtrangerService statisEtrangerService;

    public StatEtrangerController(StatisEtrangerService statisEtrangerService) {
        this.statisEtrangerService = statisEtrangerService;
    }

    @GetMapping("/etrangers")
    public TerrorismeResponceDTO getStatEtranger()  {
        TerrorismeResponceDTO lst=this.statisEtrangerService.getStatGeneralEtranger();
        return lst;
    }
    @GetMapping("/etrangersafricain")
    public TerrorismeResponceDTO getStatEtrangerAfricain()  {
        TerrorismeResponceDTO lst=this.statisEtrangerService.getStatGeneralEtrangerAfricain();
        return lst;
    }


}
