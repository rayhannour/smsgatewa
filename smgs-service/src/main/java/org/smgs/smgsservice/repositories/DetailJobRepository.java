package org.smgs.smgsservice.repositories;

import org.smgs.smgsservice.entities.DetailJob;
import org.smgs.smgsservice.entities.JobSms;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface DetailJobRepository extends JpaRepository<DetailJob,String> {
    List<DetailJob> findByJobSms_IdJob(String id);
    DetailJob findByIdDetail(String id);
}
