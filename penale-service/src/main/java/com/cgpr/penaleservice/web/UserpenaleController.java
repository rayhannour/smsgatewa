package com.cgpr.penaleservice.web;


import com.cgpr.penaleservice.entities.Utilisateurpenale;
import com.cgpr.penaleservice.services.UserpenaleService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/stat/userpenale")
public class UserpenaleController {

    private UserpenaleService userpenaleService;

    public UserpenaleController(UserpenaleService userpenaleService) {
        this.userpenaleService = userpenaleService;
    }

    @GetMapping("/users")
    public List<Utilisateurpenale> getUserPenale(){
        List<Utilisateurpenale> list=this.userpenaleService.listUserpenale();
        return list;
    }

}
