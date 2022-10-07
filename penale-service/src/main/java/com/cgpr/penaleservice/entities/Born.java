package com.cgpr.penaleservice.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Born{
    @Column(name = "Full_Name", length = 100, nullable = false)
    private String fullName;

    @Id
    @Column(name = "Ip", length = 15, nullable = false)
    private String ip;



    @Column(name = "Mac_adr", length = 50, nullable = false)
    private String macAdr;

    @Column(length = 2, nullable = false)
    private String tcodgou;
    @Column(length = 2, nullable = false)
    private String tcodpr;
    @Column(length = 2, nullable = false)
    private String alias;
}