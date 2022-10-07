package org.smgs.smgsservice.utils.shudles;

import lombok.extern.slf4j.Slf4j;
import org.smgs.smgsservice.entities.JobSms;
import org.smgs.smgsservice.enums.JobStatus;
import org.smgs.smgsservice.repositories.DetailJobRepository;
import org.smgs.smgsservice.repositories.JobSmsRepository;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

@Slf4j
@Component

public class ShudlerJob {

    private JobSmsRepository jobSmsRepository;
    private DetailJobRepository detailJobRepository;
private  SendSms sendSms;
    public ShudlerJob(JobSmsRepository jobSmsRepository, DetailJobRepository detailJobRepository, SendSms sendSms) {
        this.jobSmsRepository = jobSmsRepository;
        this.detailJobRepository = detailJobRepository;
        this.sendSms = sendSms;
    }

    @Scheduled(cron = "0 */1 * ? * *")
    public void runEvey1Minutes() {
        System.out.println("Current time is :: " + LocalDateTime.now());
        List<JobSms> listJobSms=jobSmsRepository.findByJobStatusEquals(JobStatus.CREATED);

        for (JobSms jSms : listJobSms) {
            if(isBetween(LocalDate.now(), jSms.getJobStart(), jSms.getJobEnd())){
                if(isBetweenTime(LocalDateTime.now(), jSms.getJobStart(), jSms.getJobEnd())){
                    System.out.println("Job validate :"+jSms.getIdJob());
                    sendSms.sendDataSmgs(jSms);
                }else{
                   //check time expired
                    if(isTimeExpired(LocalDateTime.now(),  jSms.getJobEnd())){
                        jSms.setJobStatus(JobStatus.EXPIREDTIME);
                        jobSmsRepository.save(jSms);
                    }
                    System.out.println("Job validate :"+false);
                }
            }else{
                if(isExceed(LocalDate.now(), jSms.getJobStart())){
                    jSms.setJobStatus(JobStatus.FAILED);
                    jobSmsRepository.save(jSms);
                }
                System.out.println("Job validate :"+false);
            }
        }
    }

    public boolean isExceed(LocalDate localDate, Date start){
        LocalDate startLocalDate = Instant.ofEpochMilli(start.getTime()).atZone(ZoneId.systemDefault()).toLocalDate();
        return (localDate.isAfter(startLocalDate)) ;
    }

    public boolean isBetween(LocalDate localDate, Date start, Date end){
        LocalDate startLocalDate = Instant.ofEpochMilli(start.getTime()).atZone(ZoneId.systemDefault()).toLocalDate();
        LocalDate endLocalDate = Instant.ofEpochMilli(end.getTime()).atZone(ZoneId.systemDefault()).toLocalDate();
        return (localDate.isEqual(startLocalDate) || localDate.isEqual(endLocalDate)) || (localDate.isAfter(startLocalDate) && localDate.isBefore(endLocalDate));
    }

    public boolean isBetweenTime(LocalDateTime localDate, Date start, Date end){
        LocalDateTime startLocalDate = Instant.ofEpochMilli(start.getTime()).atZone(ZoneId.systemDefault()).toLocalDateTime();
        LocalDateTime endLocalDate = Instant.ofEpochMilli(end.getTime()).atZone(ZoneId.systemDefault()).toLocalDateTime();

        return (localDate.isEqual(startLocalDate) || localDate.isAfter(startLocalDate)) && (localDate.isEqual(endLocalDate) || localDate.isBefore(endLocalDate));
    }

    public boolean isTimeExpired(LocalDateTime localDate,  Date end){
        LocalDateTime endLocalDate = Instant.ofEpochMilli(end.getTime()).atZone(ZoneId.systemDefault()).toLocalDateTime();

        return  (localDate.isAfter(endLocalDate));
    }

}
