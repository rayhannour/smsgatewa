import React, { useState, useRef, useEffect } from 'react';
import {  useLazyQuery } from '@apollo/client';
import { Calendar } from 'primereact/calendar';
import { sendSmgsShudler } from './api/fetchDataTetat';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';

import { GET_WEATHER_QUERY } from './querys/Queries';

import { Messages } from 'primereact/messages';

import {EventEmitters} from '../eventEmitter/EventEmitters';


export const Schudler = ({ dataJson, jsonsmslist, textAreaRef, textHeader, fixTunisia }) => {
    const msgse = useRef(null);
    const message = (type,msg) => {
        msgse.current.show([
          
            { severity: type, summary: type, detail: msg, sticky: true }
        ]);
    }

    let [idJobs, setIdJobs] = useState(null);
    const [dateStart, setDateStart] = useState(null);
    const [dateEnd, setDateEnd] = useState(null);

    const textAreaRefDescription = useRef(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [getWeather, { data, error }] = useLazyQuery(GET_WEATHER_QUERY, {
        variables: { "idJob": idJobs },
    });
    const hundleSendSmsShudler = () => {


        if (idJobs !== null) {
           
            message('Error','Job is already created !');
            return;
        }

        dataJson.map((r, idx) => {
            let text = textAreaRef.current.value;
            let mobile = "";

            let keys = Object.keys(r);

            keys.map((key) => {
                text = text.replace("%" + key + "%", r[key]);
                mobile = r['MSICDN'];

            });

            jsonsmslist.push({ message: textHeader + ' : ' + '\n' + text, phoneNumber: fixTunisia + mobile, froms: 'CGPR' });

        });

        sendSmgsShudler(name, description, dateStart, dateEnd, jsonsmslist).then((response) => {
            setIdJobs(response.data);

        }).catch((e) => {

        })
    };


    useEffect(() => {
        
        if (idJobs === null) {
            return;
        }
        console.log(idJobs);

        getWeather();

    }, [idJobs]);




    if (error) { console.log(error) };

    if (data) {
        message('Success','Job created !');
    }
   
   
    return (
        <div className="grid" dir='rtl' >
            <div className="p-fluid grid formgrid">
                <div className="field col-12 md:col-12">
                    <p>Event Emetter</p>
                    <EventEmitters/>
                </div>
                <div className="field col-12 md:col-12">
                    <Messages style={{ width: '35vw' }} ref={msgse} />
                    
                </div>


                <div className="field col-12 md:col-4">

                    <label htmlFor="datestart">Time / 24h Start</label>
                    <Calendar id="datestart" value={dateStart} onChange={(e) => setDateStart(e.value)} showTime showSeconds />
                </div>

                <div className="field col-12 md:col-4">
                    <label htmlFor="dateend">Time / 24h End</label>
                    <Calendar id="dateend" value={dateEnd} onChange={(e) => setDateEnd(e.value)} showTime showSeconds />
                </div>
                <div className="field col-12 md:col-4">
                    <label htmlFor="dateend">Task</label>
                    <Button id="sendsms" label="Shudler" onClick={hundleSendSmsShudler}></Button>
                </div>
                <div className="field col-12 md:col-4">
                    <label htmlFor="name">Name</label>
                    <InputText id="name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="field col-12 md:col-8">
                    <label htmlFor="description">Description</label>
                    <InputTextarea ref={textAreaRefDescription} id="description" rows="2" onChange={(e) => setDescription(e.target.value)} />
                </div>
            </div>

        </div>




    );

}