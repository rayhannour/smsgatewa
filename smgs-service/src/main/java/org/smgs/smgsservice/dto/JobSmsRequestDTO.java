package org.smgs.smgsservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.smgs.smgsservice.entities.DetailJob;
import org.smgs.smgsservice.enums.JobStatus;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.OneToMany;
import java.util.Date;
import java.util.List;

@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class JobSmsRequestDTO {

    private String idJob;

    private String name;
    private String description;
    private Date jobStart;
    private Date jobEnd;

    @Enumerated(EnumType.STRING)
    private JobStatus jobStatus;
    private List<DetailJobRequestDTO> detailJobList;
}
