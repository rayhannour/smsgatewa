package com.cgpr.penaleservice.services;

import com.cgpr.penaleservice.entities.Statispr;
import com.cgpr.penaleservice.repositories.StatisprRepository;
import org.hibernate.Session;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class StatisprServiceImpl implements StatisprService {
    @PersistenceContext
    private EntityManager entityManager;

    private StatisprRepository statisprRepository;

    public StatisprServiceImpl(EntityManager entityManager, StatisprRepository statisprRepository) {
        this.entityManager = entityManager;
        this.statisprRepository = statisprRepository;
    }

    @Override
    public List<Statispr> countGlobal() {
        String nativeQuery="select sum(tprimh+tprimf+trecih+trecif) COUNT,tdatjour TDATJOUR from statispr  group by TDATJOUR order by TDATJOUR desc";
        Session session = this.entityManager.unwrap( Session.class );
        List<Statispr> list = session.createNativeQuery(nativeQuery ).addEntity( Statispr.class ).list();

        return list;

    }

}
