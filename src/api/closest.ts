import axios from "axios";
import { BASE_URL } from "../consts/apiUrl";

export default axios.create({
    baseURL: BASE_URL,
    headers:{
        "Content-type": "application/json"
    }
});
