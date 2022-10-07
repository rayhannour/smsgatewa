package com.cgpr.penaleservice.web;


import com.cgpr.penaleservice.entities.StatAge;
import com.cgpr.penaleservice.services.StatestiqueAgeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;




@RestController
@RequestMapping("/stat/age")
public class StatGenralAgeController {


	private StatestiqueAgeService statestiqueAgeService;

	public StatGenralAgeController(StatestiqueAgeService statestiqueAgeService) {
		this.statestiqueAgeService = statestiqueAgeService;
	}

	@GetMapping("/ageinf/{age}")	
	public List<StatAge> getStatGeneralAgeInf(@PathVariable(value = "age") String age)  {
		List<StatAge> lst=this.statestiqueAgeService.getStatGeneralAgeInf(age);
		for(StatAge s_age:lst){
			s_age.setTAGE(age);
		}
		return lst;
	}

	@GetMapping("/agesup/{age}")
	public List<StatAge> getStatGeneralAgeSup(@PathVariable(value = "age") String age)  {
		List<StatAge> lst=this.statestiqueAgeService.getStatGeneralAgeSup(age);
		for(StatAge s_age:lst){
			s_age.setTAGE(age);
		}
		return lst;
	}
	@GetMapping("/agebetween/{age1}/{age2}")
	public List<StatAge> getStatGeneralAgeBetween(@PathVariable(value = "age1") String age1,@PathVariable(value = "age2") String age2)  {
		List<StatAge> lst=this.statestiqueAgeService.getStatGeneralAgeBetween(age1, age2);
		
		for(StatAge s_age:lst){
			s_age.setTAGE1(age1);
			s_age.setTAGE2(age2);
		}
		
		return lst;
	}
}
