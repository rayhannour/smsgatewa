import axios from 'axios';
export const instance= axios.create({
  baseURL: `http://192.168.100.76:31002/`
});
