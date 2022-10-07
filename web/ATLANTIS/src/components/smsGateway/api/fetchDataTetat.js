import React from 'react';
import { instance } from './ApiGeneral';
import axios from 'axios';

export const fetchDataTetatTest = (number, textdata) => {

    return instance({
        method: 'GET',
        url: '/SMGS-SERVICE/api/convert/converttest',
        params: {
            'from': 'CGPR',
            'to': number,
            'text': textdata

        }
    })
}

export const fetchDataTetatList = (r, number, textdata) => {
    alert(JSON.stringify(r));
    return instance({
        method: 'POST',
        url: '/SMGS-SERVICE/api/convert/convert',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(r),
        params: {
            'from': 'CGPR',
            'to': number,
            'text': textdata
        }
    })
}

export const sendSmgsShudler = (name,description,dateStart,dateEnd,jsonsmslists) => {


   
    let jsonsms={               
        jobStart:dateStart,
        jobEnd:dateEnd,
        name:name,
        description:description,
        detailJobList:jsonsmslists
    };
   


    return instance({
        method: 'POST',
        url: '/SMGS-SERVICE/api/shudlertask/running',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(jsonsms),
        params: {
            'from': 'CGPR'
        }
    })
}