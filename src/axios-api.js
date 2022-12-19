import axios from 'axios';

export default  axios.create({
    // baseURL :  "http://127.0.0.1:5001/amazing-prime-clone/us-central1/api" // the api cloud function url
    baseURL :  "http://127.0.0.1:8000" // the api cloud function url
})
