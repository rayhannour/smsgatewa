import axios from 'axios';
import React from 'react';


export const instance= axios.create({
  baseURL: `http://minikubehost:8888/`
});

export const tocken=()=>{
    return  localStorage.getItem('USER_KEY');
}
