package com.cgpr.penaleservice.services;



import com.cgpr.penaleservice.entities.StatGeneralTetat;

import java.util.List;

public interface StatestiqueTetatService {
    public List<StatGeneralTetat> getStatGeneralTetat();
    public List<StatGeneralTetat> getStatGeneralPrison();
    public List<StatGeneralTetat> getStatGeneralNatureAffaire();
}
