package com.cgpr.penaleservice.web;


import com.cgpr.penaleservice.entities.StatGeneralTetat;
import com.cgpr.penaleservice.services.StatestiqueTetatService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;



@RestController
@RequestMapping("/stat")
public class StatGeneralTetatController {


	private StatestiqueTetatService statestiqueTetatService;

	public StatGeneralTetatController(StatestiqueTetatService statestiqueTetatService) {
		this.statestiqueTetatService = statestiqueTetatService;
	}


	@GetMapping("/tetat")
	public List<StatGeneralTetat> getStatGeneralTetat()  {
		return this.statestiqueTetatService.getStatGeneralTetat();
	}

	@GetMapping("/prison")
	public List<StatGeneralTetat> getStatGeneralPrison()  {
		return this.statestiqueTetatService.getStatGeneralPrison();
	}
	
	@GetMapping("/affaire")
	public List<StatGeneralTetat> getStatGeneralNatureAffaire()  {
		return this.statestiqueTetatService.getStatGeneralNatureAffaire();
	}
}
