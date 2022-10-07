package org.smgs.smgsservice.repositories;

import org.smgs.smgsservice.entities.JobSms;
import org.smgs.smgsservice.enums.JobStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface JobSmsRepository extends JpaRepository<JobSms,String> {
    List<JobSms> findByJobStatusEquals(JobStatus jobstatus);
    JobSms findByIdJob(String id);

}
