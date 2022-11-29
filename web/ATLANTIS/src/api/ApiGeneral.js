import axios from 'axios';



export const instance= axios.create({
  baseURL: `http://192.168.100.76:31002/`
});

export const instancemineur= axios.create({
  baseURLMINEUR: `http://192.168.100.39:8085/`
});

export const tocken=()=>{
    return  localStorage.getItem('USER_KEY');
}
