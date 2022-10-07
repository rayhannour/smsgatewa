package com.cgpr.penaleservice.web;


import com.cgpr.penaleservice.dto.Usage;
import com.cgpr.penaleservice.grpc.stub.Statisprison;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;
import reactor.core.publisher.Flux;

import java.io.IOException;
import java.time.Duration;
import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;

@RestController
@RequestMapping(value = "/event")

public class EventController {

    public List<SseEmitter> emitters = new CopyOnWriteArrayList<>();

    @GetMapping(value = "/subscribes")
    public String subscribes(@RequestParam Map<String, String> queryParams) {
        String myId = queryParams.get("myId");
        String type = queryParams.get("type");
        System.out.println(myId+":"+type);
        String data= "{ phone: "+myId+", delevered: "+type+" }";
        String freshNews=UUID.randomUUID().toString();
        for (SseEmitter emitter : emitters) {
            try {
                emitter.send(SseEmitter.event().name("latestNews").data(data));
                //emitter.send(SseEmitter.event().name("latestNews").data(UUID.randomUUID().toString()));
            } catch (IOException e) {
                emitters.remove(emitter);
            }
        }



        return myId+":"+type;
    }


    @GetMapping(value = "/subscribe", consumes = MediaType.ALL_VALUE)
    public SseEmitter subscribe() {
        SseEmitter sseEmitter = new SseEmitter(Long.MAX_VALUE);
        try {
            sseEmitter.send(SseEmitter.event().name("INIT"));
        } catch (IOException e) {
        }
        sseEmitter.onCompletion(()->emitters.remove(sseEmitter));
        emitters.add(sseEmitter);
        return sseEmitter;
    }


    @PostMapping(value="/dispatchEvent")
    public void dispatchEventToClient() {
        String freshNews=UUID.randomUUID().toString();
        for (SseEmitter emitter : emitters) {
            try {
                emitter.send(SseEmitter.event().name("latestNews").data(freshNews));
                //emitter.send(SseEmitter.event().name("latestNews").data(UUID.randomUUID().toString()));
            } catch (IOException e) {
                emitters.remove(emitter);
            }
        }
    }


    @GetMapping(value = "/usage", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Usage> getResourceUsage() {

        Random random = new Random();

        return Flux.interval(Duration.ofSeconds(1))
                .map(it -> new Usage(
                        random.nextInt(101),
                        random.nextInt(101),
                        new Date()));

    }

    @GetMapping(value = "/getStatispr", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> ping(@RequestBody Statisprison.GetStatGlobalRequest request) {

        System.out.println(request);

        return null;
    }
}