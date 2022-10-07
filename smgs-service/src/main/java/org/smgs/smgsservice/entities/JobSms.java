package org.smgs.smgsservice.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.smgs.smgsservice.enums.JobStatus;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class JobSms {
    @Id
    private String idJob;
    private String name;
    private String description;
    private Date jobStart;
    private Date jobEnd;

    @Enumerated (EnumType.STRING)
    private JobStatus jobStatus;

    @OneToMany(mappedBy="jobSms")
    private List<DetailJob> detailJobList;

}
