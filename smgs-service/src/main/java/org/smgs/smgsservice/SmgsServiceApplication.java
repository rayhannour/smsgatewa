package org.smgs.smgsservice;

import org.smgs.smgsservice.entities.DetailJob;
import org.smgs.smgsservice.entities.JobSms;
import org.smgs.smgsservice.enums.DetailStatus;
import org.smgs.smgsservice.enums.JobStatus;
import org.smgs.smgsservice.repositories.DetailJobRepository;
import org.smgs.smgsservice.repositories.JobSmsRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.UUID;

@SpringBootApplication
@EnableScheduling
public class SmgsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SmgsServiceApplication.class, args);
	}




	@Bean
	CommandLineRunner startData(JobSmsRepository jobSmsRepository, DetailJobRepository detailJobRepository){
		return args -> {


		};
	}
}



