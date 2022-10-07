package org.smgs.smgsservice.utils.shudles;

import org.smgs.smgsservice.entities.DetailJob;
import org.smgs.smgsservice.entities.JobSms;
import org.smgs.smgsservice.enums.DetailStatus;
import org.smgs.smgsservice.enums.JobStatus;
import org.smgs.smgsservice.repositories.DetailJobRepository;
import org.smgs.smgsservice.repositories.JobSmsRepository;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.List;

@Component
@EnableScheduling
public class SendSms {


    private JobSmsRepository jobSmsRepository;
    private DetailJobRepository detailJobRepository;

    public SendSms(JobSmsRepository jobSmsRepository, DetailJobRepository detailJobRepository) {
        this.jobSmsRepository = jobSmsRepository;
        this.detailJobRepository = detailJobRepository;
    }

    public void sendDataSmgs(JobSms jobSms)  {

        jobSms.setJobStatus(JobStatus.STARTED);
        JobSms targetJobSms=jobSmsRepository.save(jobSms);
        List<DetailJob> listDetailJob=detailJobRepository.findByJobSms_IdJob(targetJobSms.getIdJob());
        for(DetailJob detailJob:listDetailJob){
            detailJob.setDetailStatus(DetailStatus.RUNNING);
            DetailJob detailJobTarget= detailJobRepository.save(detailJob);
            try {

                sendDataSmgs(detailJobTarget);
                jobSms.setJobStatus(JobStatus.TERMINATED);
                jobSmsRepository.save(jobSms);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }


    }

    private String sendDataSmgs( DetailJob detailJobTarget) throws IOException {

        StringBuffer param = new StringBuffer();
        param.append("http://172.27.28.221:13002/cgi-bin/sendsms");
        param.append("?username=cgpr-direction1");
        param.append("&password=5412az");
        param.append("&from=").append(detailJobTarget.getFroms()); // any alphanumeric address
        param.append("&to=").append(detailJobTarget.getPhoneNumber()); //mobile number which will receive the SMS
        param.append("&text=").append(URLEncoder.encode(detailJobTarget.getMessage(), "UTF-8"));
        param.append("&charset=").append("utf-8");
        param.append("&coding=").append(2);
        param.append("&validity=").append("60000");
        param.append("&dlr-mask=").append("3");

        String urlLdr =
                URLEncoder.encode("http", "UTF-8") +
                        URLEncoder.encode("://", "UTF-8").toLowerCase() +
                        URLEncoder.encode("gateway-services:8888", "UTF-8") +
                        URLEncoder.encode("/", "UTF-8").toLowerCase() +
                        URLEncoder.encode("SMGS-SERVICE", "UTF-8") +
                        URLEncoder.encode("/", "UTF-8").toLowerCase() +
                        URLEncoder.encode("api", "UTF-8") +
                        URLEncoder.encode("/", "UTF-8").toLowerCase() +
                        URLEncoder.encode("event", "UTF-8") +
                        URLEncoder.encode("/", "UTF-8").toLowerCase() +
                        URLEncoder.encode("subscribes", "UTF-8") +
                        URLEncoder.encode("?", "UTF-8").toLowerCase() +

                        //"type=%25d&receiver=%25p&reply=%25A&time=%25t&usr=%25n&message=%25a";

                        URLEncoder.encode("myId", "UTF-8") +
                        URLEncoder.encode("=", "UTF-8").toLowerCase() +
                        URLEncoder.encode(detailJobTarget.getIdDetail() + "&", "UTF-8") +
                        URLEncoder.encode("type", "UTF-8") +
                        URLEncoder.encode("=", "UTF-8").toLowerCase() +
                        URLEncoder.encode("%d", "UTF-8") ;
                        //URLEncoder.encode("&validity", "UTF-8") +
                        //URLEncoder.encode("=", "UTF-8").toLowerCase() +
                        //URLEncoder.encode("2000", "UTF-8");*/



        System.out.println(urlLdr);
        param.append("&dlr-url=").append(urlLdr);
        System.out.println(param.toString());

        URL aPortUrl = new URL(param.toString());
        URLConnection con = aPortUrl.openConnection();

        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer aResult = new StringBuffer();
        while ((inputLine = in.readLine()) != null)
            aResult.append(inputLine);
        in.close();

        System.out.println(aResult.toString());
        detailJobTarget.setMessagegteway(aResult.toString());
        detailJobTarget.setDetailStatus(DetailStatus.VALIDGATEWAY);
        detailJobRepository.save(detailJobTarget);

        return aResult.toString();
    }

}
