import React, { useEffect, useState } from 'react';
import { useKeycloak } from "@react-keycloak/web";
import { Button } from 'primereact/button';
import { eventhDataTetat } from '../../api/statPenale/StatGeneral';
import { GET_WEATHER_QUERY } from '../../components/smsGateway/querys/Queries';
import { useLazyQuery } from '@apollo/client';
export const EventEmitters = () => {


    const [idJobs, setIdJobs] = useState('');


    const { keycloak } = useKeycloak();

    let eventSource = undefined;

    const [listening, setListening] = useState(false);
    const [data, setData] = useState([]);


    useEffect(async () => {
        /*if (!listening) {
            eventSource = new EventSource("http://192.168.100.76:31002/SMGS-SERVICE/api/event/subscribe", {

            });
            console.log("TOCKEN :" + keycloak.token);
            eventSource.addEventListener("latestNews", function (event) {
                // setData(oldArray => [...oldArray, event.data]);
                console.log(event.data);

                setIdJobs(event.data);
            });
            // renderElement();

            setListening(true);
        }
        return () => {
            eventSource.close();
            console.log("event closed")
        }*/

    }, []);

    useEffect(async () => {
        //getWeather();
        //console.log("Event Emitter : ",event.data);
        //console.log("Event Emitter : ", datajobs);

    }, [idJobs]);

    return (

        <>
            <div className="col-12 md:col-12">
                <div className="card widget-table">

                    <p>{data}</p>
                    <p>{idJobs}</p>
                    


                </div>
            </div>
        </>

    );

}