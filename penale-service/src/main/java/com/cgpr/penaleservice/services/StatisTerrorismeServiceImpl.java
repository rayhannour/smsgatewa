package com.cgpr.penaleservice.services;

import com.cgpr.penaleservice.dto.StatTerrorimeChartDTO;
import com.cgpr.penaleservice.dto.StatTerrorimePrisonDTO;
import com.cgpr.penaleservice.dto.StatTerrorismeResponceChartTetatDTO;
import com.cgpr.penaleservice.dto.TerrorismeResponceDTO;
import com.cgpr.penaleservice.entities.Prison;
import com.cgpr.penaleservice.entities.StatTerrorisme;
import com.cgpr.penaleservice.entities.StatTerrorismePrison;
import org.hibernate.Session;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class StatisTerrorismeServiceImpl implements StatisTerrorismeService {
    @PersistenceContext
    private EntityManager entityManager;

    public StatisTerrorismeServiceImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public TerrorismeResponceDTO getStatGeneralTerrorisme(){

        List<Prison> prisons=this.getListPrison();

        TerrorismeResponceDTO terrorismeResponceDTO=new TerrorismeResponceDTO();
        List<StatTerrorisme> sexeChartMasculin= getStatTerrorismeSexe("1");
        List<StatTerrorisme> sexeChartFeminin= getStatTerrorismeSexe("0");


        List<StatTerrorimeChartDTO> statTerrorimeChartDTOS=new ArrayList<>();
        List<StatTerrorimePrisonDTO> statTerrorimePrisonDTOS=new ArrayList<>();
        sexeChartMasculin.forEach(
                statTerrorisme->{
                    StatTerrorimeChartDTO statTerrorimeChartDTO=  StatTerrorimeChartDTO.builder()
                            .counts(statTerrorisme.getCounts())
                            .tetat(statTerrorisme.getTetat())
                            .tcodsex(statTerrorisme.getTcodsex())
                            .build();
                    statTerrorimeChartDTOS.add(statTerrorimeChartDTO);
                }
        );

        sexeChartFeminin.forEach(
                statTerrorisme->{
                    StatTerrorimeChartDTO statTerrorimeChartDTO=  StatTerrorimeChartDTO.builder()
                            .counts(statTerrorisme.getCounts())
                            .tetat(statTerrorisme.getTetat())
                            .tcodsex(statTerrorisme.getTcodsex())
                            .build();
                    statTerrorimeChartDTOS.add(statTerrorimeChartDTO);
                }
        );


        

        terrorismeResponceDTO.setStatTerrorimeChartDTOS(statTerrorimeChartDTOS);

        List<StatTerrorismePrison> terrorismeJugerMale= this.getStatTerrorismePrison("1","J");
        List<StatTerrorismePrison> terrorismeJugerFemale= this.getStatTerrorismePrison("0","J");

        List<StatTerrorismePrison> terrorismeArreterMale= this.getStatTerrorismePrison("1","A");
        List<StatTerrorismePrison> terrorismeArreterFemale= this.getStatTerrorismePrison("0","A");



        prisons.forEach(
                p->{

                    StatTerrorimePrisonDTO statTerrorimePrison=new StatTerrorimePrisonDTO();

                    statTerrorimePrison.setPrison(p.getLIBELLE_PRISON());
                    statTerrorimePrison.setTcodpr(p.getCODE_PRISON());
                    statTerrorimePrison.setTcodgou(p.getCODE_GOUVERNORAT());


                    statTerrorimePrison=statTerrorimePrisonDTO(statTerrorimePrison, terrorismeJugerMale);
                    statTerrorimePrison=statTerrorimePrisonDTO(statTerrorimePrison, terrorismeJugerFemale);
                    statTerrorimePrison= statTerrorimePrisonDTO(statTerrorimePrison, terrorismeArreterMale);
                    statTerrorimePrison=statTerrorimePrisonDTO(statTerrorimePrison, terrorismeArreterFemale);

                    StatTerrorimePrisonDTO statTerrorimePrisonDTO=StatTerrorimePrisonDTO.builder()
                            .prison(p.getLIBELLE_PRISON())
                            .tcodgou(p.getCODE_GOUVERNORAT())
                            .tcodpr(p.getCODE_PRISON())
                            .countArreter(statTerrorimePrison.getCountArreter())
                            .countJuger(statTerrorimePrison.getCountJuger())
                            .build();

                    if(statTerrorimePrisonDTO.getCountArreter()!=null && statTerrorimePrisonDTO.getCountJuger()!=null){
                        statTerrorimePrisonDTOS.add(statTerrorimePrisonDTO);
                    }



                }
        );

        terrorismeResponceDTO.setStatTerrorimePrisonDTOS(statTerrorimePrisonDTOS);

        return terrorismeResponceDTO;
    }

    private StatTerrorimePrisonDTO statTerrorimePrisonDTO( StatTerrorimePrisonDTO statTerrorimePrisonDTO, List<StatTerrorismePrison> terrorisme){



        terrorisme.forEach(
                t->{



                              if(t.getTcodgou().equals(statTerrorimePrisonDTO.getTcodgou())
                              && t.getTcodpr().equals(statTerrorimePrisonDTO.getTcodpr())){
                                  Long countJuger=statTerrorimePrisonDTO.getCountJuger();
                                  Long countArreter= statTerrorimePrisonDTO.getCountArreter();
                                  if(countJuger==null) countJuger=0L;
                                  if(countArreter==null) countArreter=0L;

                                  if(t.getTetat().equals("A")){
                                      statTerrorimePrisonDTO.setCountArreter(Long.sum(countArreter, t.getCounts()));
                                  }
                                  if(t.getTetat().equals("J")){
                                      statTerrorimePrisonDTO.setCountJuger(Long.sum(countJuger, t.getCounts()));
                                  }




                              }




                }
        );


return statTerrorimePrisonDTO;
    }

    public List<StatTerrorisme> getStatTerrorismeSexe(String tcodsex){
        String nativeQueryEntrant="Terrorisme.Sexe";
        Query query = this.entityManager.createNamedQuery(nativeQueryEntrant);
        query.setParameter(1,tcodsex);
        List<StatTerrorisme> list = query.getResultList();
        this.entityManager.clear();
        return list;
    }

    public List<StatTerrorismePrison> getStatTerrorismePrison(String tcodsex,String tetat){
        String nativeQueryEntrant="Terrorisme.Prison";
        Query query = this.entityManager.createNamedQuery(nativeQueryEntrant);
        query.setParameter(1,tcodsex);
        query.setParameter(2,tetat);
        List<StatTerrorismePrison> list = query.getResultList();
        this.entityManager.clear();
        return list;
    }

    public  List<Prison> getListPrison() {
        String nativeQuery="select * from prison";
        Session session = this.entityManager.unwrap( Session.class );
        List<Prison> list = session.createNativeQuery(nativeQuery ).addEntity( Prison.class ).list();

        return list;

    }
}
