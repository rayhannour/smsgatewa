package com.cgpr.penaleservice.services;

import com.cgpr.penaleservice.entities.Prison;
import com.cgpr.penaleservice.entities.StatGeneralTetat;
import com.cgpr.penaleservice.repositories.StatestiqueGeneralTetatRepository;
import org.hibernate.Session;
import org.hibernate.transform.Transformers;

import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class StatestiqueTetatServiceImpl implements StatestiqueTetatService {

    @PersistenceContext
    private EntityManager entityManager;

    private StatestiqueGeneralTetatRepository statestiqueGeneralTetatRepository;

    public StatestiqueTetatServiceImpl(EntityManager entityManager, StatestiqueGeneralTetatRepository statestiqueGeneralTetatRepository) {
        this.entityManager = entityManager;
        this.statestiqueGeneralTetatRepository = statestiqueGeneralTetatRepository;
    }

    @Override
    public List<StatGeneralTetat> getStatGeneralTetat() {
        String nativeQuery="select count(*) COUNT,tetat TETAT from tjugearret group by TETAT";
        Session session = this.entityManager.unwrap( Session.class );
        List<StatGeneralTetat> list = session.createNativeQuery(nativeQuery ).addEntity( StatGeneralTetat.class ).list();

        return list;

    }

    @Override
    public List<StatGeneralTetat> getStatGeneralPrison() {
        List<Prison> lstPrison=this.getListPrison();
        String nativeQuery="select count(*) COUNT,getLibellePrison(tcodgou,tcodpr) TETAT from tjugearret group by getLibellePrison(tcodgou,tcodpr)";
        Session session = this.entityManager.unwrap( Session.class );
        List<StatGeneralTetat> list = session.createNativeQuery(nativeQuery ).addEntity( StatGeneralTetat.class ).list();

        for(StatGeneralTetat st:list){
            for(Prison prs:lstPrison){
                if(st.getTETAT().equals(prs.getLIBELLE_PRISON())){
                    st.setMAXDETENU(prs.getMAXDETENU());
                    break;
                }
            }
        }
        return list;
    }

    @Override
    public List<StatGeneralTetat> getStatGeneralNatureAffaire() {

        String nativeQuery="select * from (select count(*) COUNT,getLibelle_natureaffaire(tcodtaf) TETAT from tjugearret group by getLibelle_natureaffaire(tcodtaf)) order by count desc";
        Session session = this.entityManager.unwrap( Session.class );
        List<StatGeneralTetat> list = session.createNativeQuery(nativeQuery ).addEntity( StatGeneralTetat.class ).list();

        long total=0;
        for(StatGeneralTetat st:list){
            total=total+st.getCOUNT();
        }

        List<StatGeneralTetat> lstReturn=new ArrayList<StatGeneralTetat>();
        for(StatGeneralTetat st:list){
            st.setTOTAL(total);
            lstReturn.add(st);
            if(st.getTETAT().equals("\u0642\u0636\u0627\u064a\u0627 \u0627\u0644\u0627\u0631\u0647\u0640\u0640\u0640\u0627\u0628 ")){
                break;
            }
        }

        return lstReturn;

    }


    public  List<Prison> getListPrison() {

        String nativeQuery="select * from prison";
        Session session = this.entityManager.unwrap( Session.class );
        List<Prison> list = session.createNativeQuery(nativeQuery ).addEntity( Prison.class ).list();

        return list;

    }
}
