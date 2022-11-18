package com.cgpr.penaleservice.services;

import com.cgpr.penaleservice.entities.StatTerrorismePrison;
import com.cgpr.penaleservice.entities.Utilisateurpenale;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserpenaleServiceImpl implements UserpenaleService {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<Utilisateurpenale> listUserpenale() {
        List<Utilisateurpenale> list=new ArrayList<>();
        String nativeQueryEntrant = "User.findAll";
        Query query = this.entityManager.createNamedQuery(nativeQueryEntrant);
        list = query.getResultList();

        list.forEach(
                us->{
                    Date maxDate=maxDateUserpenale(us.getMatpers());
                    Long counts=countUserpenale(us.getMatpers());

                    us.setMaxdateconsult(maxDate);
                    us.setCounts(counts);
                }
        );


        this.entityManager.clear();


        Comparator<Utilisateurpenale> compareByCount = Comparator
                .comparing(Utilisateurpenale::getCounts);

        list.stream()
                .sorted(compareByCount);

        List<Utilisateurpenale> sortedEmployees = list.stream()
                .sorted(compareByCount.reversed())
                .collect(Collectors.toList());

        return sortedEmployees;
    }

    public Date maxDateUserpenale(String mat_pers) {
        String nativeQueryEntrant = "User.findMaxDate";
        Query query = this.entityManager.createNamedQuery(nativeQueryEntrant);
        query.setParameter(1,mat_pers);
        Date maxdate = ((Date) query.getSingleResult());
        return maxdate;
    }

    public Long countUserpenale(String mat_pers) {
        String nativeQueryEntrant = "User.findCountByUser";
        Query query = this.entityManager.createNamedQuery(nativeQueryEntrant);
        query.setParameter(1,mat_pers);
        Object obj=query.getSingleResult();

       if(obj!=null) return ((BigDecimal)obj).longValue();


        return 0L;
    }
}
