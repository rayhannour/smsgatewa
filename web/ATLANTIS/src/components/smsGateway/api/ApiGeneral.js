import axios from 'axios';
export const instance= axios.create({
  baseURL: `http://minikubehost:8888/`
});
