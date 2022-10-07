package com.cgpr.penaleservice.services;

import com.cgpr.penaleservice.entities.StatAge;
import com.cgpr.penaleservice.repositories.StatestiqueGeneralAgeRepository;
import org.hibernate.Session;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class StatestiqueAgeServiceImpl implements StatestiqueAgeService {

    @PersistenceContext
    private EntityManager entityManager;


    private StatestiqueGeneralAgeRepository statestiqueGeneralAgeRepository;
    public StatestiqueAgeServiceImpl(EntityManager entityManager, StatestiqueGeneralAgeRepository statestiqueGeneralAgeRepository) {
        this.entityManager = entityManager;
        this.statestiqueGeneralAgeRepository = statestiqueGeneralAgeRepository;
    }

    @Override
    public List<StatAge> getStatGeneralAgeInf(String age) {
        String nativeQuery="select * from (select count(*) COUNT,TCODSEX from tjugearret where TAGE<= :age group by TCODSEX) order by COUNT desc ";
        Session session = this.entityManager.unwrap( Session.class );
        List<StatAge> list = session.createNativeQuery(nativeQuery ).setParameter("age",age) .addEntity( StatAge.class ).list();
        return list;

    }

    @Override
    public List<StatAge> getStatGeneralAgeSup(String age) {
        String nativeQuery="select * from (select count(*) COUNT,TCODSEX from tjugearret where TAGE> :age group by TCODSEX) order by COUNT desc ";
        Session session = this.entityManager.unwrap( Session.class );
        List<StatAge> list = session.createNativeQuery(nativeQuery ).setParameter("age",age) .addEntity( StatAge.class ).list();
        return list;
    }

    @Override
    public List<StatAge> getStatGeneralAgeBetween(String age1, String age2) {
        String nativeQuery="select * from (select count(*) COUNT,TCODSEX from tjugearret where TAGE between :age1 and :age2 group by TCODSEX) order by COUNT desc ";
        Session session = this.entityManager.unwrap( Session.class );
        List<StatAge> list = session.createNativeQuery(nativeQuery ).setParameter("age1",age1).setParameter("age2",age2) .addEntity( StatAge.class ).list();
        return list;
    }
}
