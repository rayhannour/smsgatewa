package com.cgpr.penaleservice.services;


import com.cgpr.penaleservice.entities.StatAge;

import java.util.List;

public interface StatestiqueAgeService {
    public List<StatAge> getStatGeneralAgeInf(String age);
    public List<StatAge> getStatGeneralAgeSup(String age);
    public List<StatAge> getStatGeneralAgeBetween(String age1,String age2);
}
