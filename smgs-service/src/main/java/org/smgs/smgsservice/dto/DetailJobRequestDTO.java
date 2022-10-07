package org.smgs.smgsservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.smgs.smgsservice.entities.JobSms;
import org.smgs.smgsservice.enums.DetailStatus;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Data @NoArgsConstructor
@AllArgsConstructor
@Builder
public class DetailJobRequestDTO {
    private String idDetail;

    private JobSmsRequestDTO jobSms;
    private String phoneNumber;
    private String froms;
    private String message;

    @Enumerated(EnumType.STRING)
    private DetailStatus detailStatus;
}
