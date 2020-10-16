import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5001/clone-79dcf/us-central1/api' //API (CLOUD FUNCTION) URL


});

export default instance;