package org.smgs.smgsservice.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.smgs.smgsservice.enums.DetailStatus;

import javax.persistence.*;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor @Builder
public class DetailJob {
    @Id
    private String idDetail;
    @ManyToOne
    @JoinColumn(name = "idJob")
    private JobSms jobSms;
    private String phoneNumber;
    private String froms;
    private String message;

    @Enumerated (EnumType.STRING)
    private DetailStatus detailStatus;

    private String messagegteway;

}
