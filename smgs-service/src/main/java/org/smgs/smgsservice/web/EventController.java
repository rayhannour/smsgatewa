package org.smgs.smgsservice.web;


import org.smgs.smgsservice.entities.DetailJob;
import org.smgs.smgsservice.enums.DetailStatus;
import org.smgs.smgsservice.repositories.DetailJobRepository;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;

@RestController
@RequestMapping(value = "/event")

public class EventController {

    private DetailJobRepository detailJobRepository;
    public List<SseEmitter> emitters = new CopyOnWriteArrayList<>();

    public EventController(DetailJobRepository detailJobRepository) {
        this.detailJobRepository = detailJobRepository;
    }

    @GetMapping(value = "/subscribes")
    public void subscribes(@RequestParam Map<String, String> queryParams) {
        String myId = queryParams.get("myId");
        String type = queryParams.get("type");

        DetailJob detailJob = detailJobRepository.findByIdDetail(myId);
        if (type.equals("1")) {
            detailJob.setDetailStatus(DetailStatus.DELIVERED);
        } else if (type.equals("2")) {
            detailJob.setDetailStatus(DetailStatus.NOTDELIVERED);
        } else if (type.equals("4")) {
            detailJob.setDetailStatus(DetailStatus.INQUEUE);
        }
        DetailJob detailJobSave=detailJobRepository.save(detailJob);



        String data = "{ \"idDetail\": \"" + detailJobSave.getIdDetail() +
                "\", \"detailStatus\": \"" + detailJobSave.getDetailStatus() +
                "\", \"idJob\": \"" + detailJobSave.getJobSms().getIdJob()+
                "\", \"statusJob\": \"" + detailJobSave.getJobSms().getJobStatus()  +
                "\"}";
        //String data = detailJobSave.getIdDetail();

        System.out.println(data);
        for (SseEmitter emitter : emitters) {
            try {
                emitter.send(SseEmitter.event().name("latestNews").data(data));
            } catch (IOException e) {
                emitters.remove(emitter);
            }
        }

        //return "";
    }



    @GetMapping(value = "/subscribe", consumes = MediaType.ALL_VALUE)
    public SseEmitter subscribe() {
        SseEmitter sseEmitter = new SseEmitter(Long.MAX_VALUE);
        try {
            sseEmitter.send(SseEmitter.event().name("INIT"));
        } catch (IOException e) {
        }
        sseEmitter.onCompletion(() -> emitters.remove(sseEmitter));
        emitters.add(sseEmitter);
        return sseEmitter;
    }


    @PostMapping(value = "/dispatchEvent")
    public void dispatchEventToClient() {
        String freshNews = UUID.randomUUID().toString();
        for (SseEmitter emitter : emitters) {
            try {
                emitter.send(SseEmitter.event().name("latestNews").data(freshNews));
                //emitter.send(SseEmitter.event().name("latestNews").data(UUID.randomUUID().toString()));
            } catch (IOException e) {
                emitters.remove(emitter);
            }
        }
    }


}