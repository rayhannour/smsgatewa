package org.smgs.smgsservice.web;

import org.smgs.smgsservice.entities.JobSms;
import org.smgs.smgsservice.repositories.JobSmsRepository;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class JobSmsGraphqlController  {
    private JobSmsRepository jobSmsRepository;

    public JobSmsGraphqlController(JobSmsRepository jobSmsRepository) {
        this.jobSmsRepository = jobSmsRepository;
    }


    @QueryMapping
    public List<JobSms> jobsmsList() {
        return jobSmsRepository.findAll();
    }
    @QueryMapping
    public JobSms findJobSmsByIds(@Argument String idJob ){
        return jobSmsRepository.findByIdJob(idJob );
    }

}
