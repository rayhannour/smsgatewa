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
public class StatisEtrangerServiceImpl implements StatisEtrangerService {
    @PersistenceContext
    private EntityManager entityManager;

    public StatisEtrangerServiceImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public TerrorismeResponceDTO getStatGeneralEtranger(){

        List<Prison> prisons=this.getListPrison();

        TerrorismeResponceDTO terrorismeResponceDTO=new TerrorismeResponceDTO();
        List<StatTerrorisme> sexeChartMasculin= getStatEtrangerSexe("1","ALL");
        List<StatTerrorisme> sexeChartFeminin= getStatEtrangerSexe("0","ALL");

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
        List<StatTerrorismePrison> terrorismeJugerMale= this.getStatEtrangerPrison("1","J","ALL");
        List<StatTerrorismePrison> terrorismeJugerFemale= this.getStatEtrangerPrison("0","J","ALL");

        List<StatTerrorismePrison> terrorismeArreterMale= this.getStatEtrangerPrison("1","A","ALL");
        List<StatTerrorismePrison> terrorismeArreterFemale= this.getStatEtrangerPrison("0","A","ALL");


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


    @Override
    public TerrorismeResponceDTO getStatGeneralEtrangerAfricain(){

        List<Prison> prisons=this.getListPrison();

        TerrorismeResponceDTO terrorismeResponceDTO=new TerrorismeResponceDTO();
        List<StatTerrorisme> sexeChartMasculin= getStatEtrangerSexe("1","AF");
        List<StatTerrorisme> sexeChartFeminin= getStatEtrangerSexe("0","AF");

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
        List<StatTerrorismePrison> terrorismeJugerMale= this.getStatEtrangerPrison("1","J","AF");
        List<StatTerrorismePrison> terrorismeJugerFemale= this.getStatEtrangerPrison("0","J","AF");

        List<StatTerrorismePrison> terrorismeArreterMale= this.getStatEtrangerPrison("1","A","AF");
        List<StatTerrorismePrison> terrorismeArreterFemale= this.getStatEtrangerPrison("0","A","AF");


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

    public List<StatTerrorisme> getStatEtrangerSexe(String tcodsex,String typeetranger){
        String nativeQueryEntrant="Etranger.Sexe";

        if(typeetranger.equals("AF")){
            nativeQueryEntrant="Affricain.Sexe";
        }

        Query query = this.entityManager.createNamedQuery(nativeQueryEntrant);
        query.setParameter(1,tcodsex);
        List<StatTerrorisme> list = query.getResultList();
        this.entityManager.clear();
        return list;
    }

    public List<StatTerrorismePrison> getStatEtrangerPrison(String tcodsex,String tetat,String typeetranger){
        String nativeQueryEntrant="Etranger.Prison";

        if(typeetranger.equals("AF")){
            nativeQueryEntrant="Affricain.Prison";
        }

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
