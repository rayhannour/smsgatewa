package com.cgpr.penaleservice.services;

import com.cgpr.penaleservice.dto.EntrantSortantResponceDTO;
import com.cgpr.penaleservice.entities.StatEntrantSortant;

import com.cgpr.penaleservice.entities.StatEntrantSortantYear;
import com.cgpr.penaleservice.repositories.StatisEntrantSortantRepository;

import com.cgpr.penaleservice.repositories.StatisEntrantSortantYearsRepository;
import org.springframework.stereotype.Service;


import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

@Service

public class StatisEntrantSortantServiceImpl implements StatisEntrantSortantService{

    @PersistenceContext
    private EntityManager entityManager;

    private StatisEntrantSortantRepository statisEntrantSortantRepository;
    private StatisEntrantSortantYearsRepository statisEntrantSortantYearsRepository;

    public StatisEntrantSortantServiceImpl(EntityManager entityManager, StatisEntrantSortantRepository statisEntrantSortantRepository, StatisEntrantSortantYearsRepository statisEntrantSortantYearsRepository) {
        this.entityManager = entityManager;
        this.statisEntrantSortantRepository = statisEntrantSortantRepository;
        this.statisEntrantSortantYearsRepository = statisEntrantSortantYearsRepository;
    }

    @Override
    public List<StatEntrantSortantYear> findEntrantYear(Long years) throws IOException {
        sendDataSmgs();

        String nativeQueryEntrant="Entrant.findAllMounths";
        Query query = this.entityManager.createNamedQuery(nativeQueryEntrant);
        query.setParameter(1,years);
        List<StatEntrantSortantYear> list = query.getResultList();
        this.entityManager.clear();
        return list;
    }
    @Override
    public List<StatEntrantSortantYear> findSortantYear(Long years){
        String nativeQueryEntrant="Sortant.findAllMounths";
        Query query = this.entityManager.createNamedQuery(nativeQueryEntrant);
        query.setParameter(1,years);
        List<StatEntrantSortantYear> list = query.getResultList();
        this.entityManager.clear();
        return list;
    }


    @Override
    public List<EntrantSortantResponceDTO> findAllDTO(Long yearsStart,Long yearsEnd) {

        yearsStart=yearsStart+1996;yearsEnd=yearsEnd+1996;

        List<EntrantSortantResponceDTO> list=new ArrayList<>();
        List<StatEntrantSortant> listEntant =findAllEntrant(yearsStart, +yearsEnd);
        List<StatEntrantSortant> listSortant = findAllSortant( yearsStart, +yearsEnd) ;

        for (Long year = yearsStart; year <= yearsEnd; year++) {
            EntrantSortantResponceDTO entrantSortantResponceDTO=EntrantSortantResponceDTO.builder().years(year).build();
            for (StatEntrantSortant sEntrant: listEntant    ) {
                if(year.longValue()==sEntrant.getYears().longValue()) {
                    entrantSortantResponceDTO.setEntrantCount(sEntrant.getCounts());
                    entrantSortantResponceDTO.setSortatntCount(0L);
                    break;
                }
            }
            for (StatEntrantSortant sSortant: listSortant    ) {
                if(year.longValue()==sSortant.getYears().longValue()) {
                    entrantSortantResponceDTO.setSortatntCount(sSortant.getCounts());
                    if(entrantSortantResponceDTO.getEntrantCount()==null)entrantSortantResponceDTO.setEntrantCount(0L);
                        break;
                    }
            }
            if(   entrantSortantResponceDTO.getEntrantCount()!=null && entrantSortantResponceDTO.getEntrantCount()!=null) {
                if (entrantSortantResponceDTO.getEntrantCount().longValue() != 0 || entrantSortantResponceDTO.getEntrantCount().longValue() != 0) {
                    list.add(EntrantSortantResponceDTO.builder().years(entrantSortantResponceDTO.getYears()).EntrantCount(entrantSortantResponceDTO.getEntrantCount()).SortatntCount(entrantSortantResponceDTO.getSortatntCount()).build());
                }
            }


        }




        return list;

    }

    public List<StatEntrantSortant> findAllEntrant(Long yearsStart,Long yearsEnd) {
        String nativeQueryEntrant="Entrant.findAll";
        Query query = this.entityManager.createNamedQuery(nativeQueryEntrant);
        query.setParameter(1,yearsStart);
        query.setParameter(2,yearsEnd);
        List<StatEntrantSortant> list = query.getResultList();
        this.entityManager.clear();
        return list;

    }
    public List<StatEntrantSortant> findAllSortant(Long yearsStart,Long yearsEnd) {

        String nativeQuerySortant="Sortant.findAll";
        Query query = this.entityManager.createNamedQuery(nativeQuerySortant);
        query.setParameter(1,yearsStart);
        query.setParameter(2,yearsEnd);
        List<StatEntrantSortant> list = query.getResultList();

        return list;

    }


    private String sendDataSmgs() throws IOException {
        String from="CGPR"; String to="21650758649"; String text="send data";
        StringBuffer param = new StringBuffer();
        param.append("http://172.27.28.221:13002/cgi-bin/sendsms");
        param.append("?username=cgpr-direction1");
        param.append("&password=5412az");
        param.append("&from=").append(from); // any alphanumeric address
        param.append("&to=").append(to); //mobile number which will receive the SMS
        param.append("&text=").append(URLEncoder.encode(text, "UTF-8"));
        param.append("&charset=").append("utf-8");
        param.append("&coding=").append(2);

        param.append("&dlr-mask=").append("7");





        URL aPortUrl = new URL(param.toString());
        URLConnection con = aPortUrl.openConnection();

        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer aResult = new StringBuffer();
        while ((inputLine = in.readLine()) != null)
            aResult.append(inputLine);
        in.close();

        System.out.println("; result=" + aResult.toString());


        /*Statisprison.GetStatGlobalRequest currencyRequest = Statisprison.GetStatGlobalRequest.newBuilder()
                .build();
        Statisprison.GetStatListResponse convertCurrencyResponse = bankServiceBlockingStub.getStatispr(currencyRequest);


        String data = JsonFormat.printer().preservingProtoFieldNames().print(convertCurrencyResponse);
        System.out.println(data);*/
        return aResult.toString();
    }

}
