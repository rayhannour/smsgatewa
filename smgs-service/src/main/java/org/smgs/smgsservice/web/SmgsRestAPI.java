package org.smgs.smgsservice.web;



import com.nimbusds.jose.shaded.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.Map;

@RestController
@RequestMapping(value = "/convert")
public class SmgsRestAPI {


    @GetMapping("/converttest")
    public String converttest(@RequestParam Map<String, String> queryParams) throws IOException {
        String from = queryParams.get("from");
        String to = queryParams.get("to");
        String text = queryParams.get("text");
        //sendDataSmgs( from,  to,  text);

        return "";
    }

    @PostMapping(value = "/convert", consumes = MediaType.APPLICATION_JSON_VALUE)
    public void convert(@RequestParam Map<String, String> queryParams, @RequestBody JSONObject data) throws IOException {
        String from = queryParams.get("from");
        String to = queryParams.get("to");
        String text = queryParams.get("text");
        //sendDataSmgs( from,  to,  text);

        System.out.println(data);

    }

    private String sendDataSmgs(String from, String to, String text) throws IOException {

        StringBuffer param = new StringBuffer();
        param.append("http://172.27.28.221:13002/cgi-bin/sendsms");
        param.append("?username=cgpr-direction1");
        param.append("&password=5412az");
        param.append("&from=").append(from); // any alphanumeric address
        param.append("&to=").append(to); //mobile number which will receive the SMS
        param.append("&text=").append(URLEncoder.encode(text, "UTF-8"));
        param.append("&charset=").append("utf-8");
        param.append("&coding=").append(2);

        param.append("&dlr-mask=").append("7");

        String urlLdr =
                URLEncoder.encode("http", "UTF-8") +
                        URLEncoder.encode("://", "UTF-8").toLowerCase() +
                        URLEncoder.encode("192.168.100.218:8888", "UTF-8") +
                        URLEncoder.encode("/", "UTF-8").toLowerCase() +
                        URLEncoder.encode("PENALE-SERVICE", "UTF-8") +
                        URLEncoder.encode("/", "UTF-8").toLowerCase() +
                        URLEncoder.encode("api", "UTF-8") +
                        URLEncoder.encode("/", "UTF-8").toLowerCase() +
                        URLEncoder.encode("event", "UTF-8") +
                        URLEncoder.encode("/", "UTF-8").toLowerCase() +
                        URLEncoder.encode("subscribes", "UTF-8") +
                        URLEncoder.encode("?", "UTF-8").toLowerCase() +
                        URLEncoder.encode("myId", "UTF-8") +
                        URLEncoder.encode("=", "UTF-8").toLowerCase() +
                        URLEncoder.encode(to + "&", "UTF-8") +
                        URLEncoder.encode("type", "UTF-8") +
                        URLEncoder.encode("=", "UTF-8").toLowerCase() +
                        URLEncoder.encode("%d", "UTF-8") +
                        URLEncoder.encode("&validity", "UTF-8") +
                        URLEncoder.encode("=", "UTF-8").toLowerCase() +
                        URLEncoder.encode("1000", "UTF-8");


        ;

        System.out.println(urlLdr);
        param.append("&dlr-url=").append(urlLdr);
        System.out.println(param.toString());

        URL aPortUrl = new URL(param.toString());
        URLConnection con = aPortUrl.openConnection();

        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer aResult = new StringBuffer();
        while ((inputLine = in.readLine()) != null)
            aResult.append(inputLine);
        in.close();

        System.out.println("; result=" + aResult.toString());


        /*Statisprison.GetStatGlobalRequest currencyRequest = Statisprison.GetStatGlobalRequest.newBuilder()
                .build();
        Statisprison.GetStatListResponse convertCurrencyResponse = bankServiceBlockingStub.getStatispr(currencyRequest);


        String data = JsonFormat.printer().preservingProtoFieldNames().print(convertCurrencyResponse);
        System.out.println(data);*/
        return aResult.toString();
    }
}