package org.smgs.smgsservice.web;

import org.smgs.smgsservice.dto.DetailJobRequestDTO;
import org.smgs.smgsservice.dto.JobSmsRequestDTO;
import org.smgs.smgsservice.entities.DetailJob;
import org.smgs.smgsservice.entities.JobSms;
import org.smgs.smgsservice.enums.DetailStatus;
import org.smgs.smgsservice.enums.JobStatus;
import org.smgs.smgsservice.repositories.DetailJobRepository;
import org.smgs.smgsservice.repositories.JobSmsRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping(value = "/shudlertask")
public class SmgsShudlerTaskRestApi {

    private JobSmsRepository jobSmsRepository;
    private DetailJobRepository detailJobRepository;

    public SmgsShudlerTaskRestApi(JobSmsRepository jobSmsRepository, DetailJobRepository detailJobRepository) {
        this.jobSmsRepository = jobSmsRepository;
        this.detailJobRepository = detailJobRepository;
    }

    @PostMapping(value = "/running", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String convert(@RequestBody JobSmsRequestDTO jobSmsRequestDTO) throws IOException {
        JobSms jobSmsTarget=JobSms.builder().build();
        BeanUtils.copyProperties(jobSmsRequestDTO,jobSmsTarget);
        jobSmsTarget.setIdJob(UUID.randomUUID().toString());
        jobSmsTarget.setJobStatus(JobStatus.CREATED);
        jobSmsRepository.save(jobSmsTarget);
        for(DetailJobRequestDTO detail:jobSmsRequestDTO.getDetailJobList()){
            DetailJob detailJobTarget=DetailJob.builder().build();
            BeanUtils.copyProperties(detail,detailJobTarget);
            detailJobTarget.setIdDetail(UUID.randomUUID().toString());
            detailJobTarget.setJobSms(jobSmsTarget);
            detailJobTarget.setDetailStatus(DetailStatus.CREATED);
            detailJobRepository.save(detailJobTarget);
        }
        return jobSmsTarget.getIdJob();
    }

}
