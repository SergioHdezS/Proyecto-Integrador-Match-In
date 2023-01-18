import axios from "axios";
import { url } from "./Config.js";

export const inicioSesion = async (login) => {
    const res = await axios.post(url + "/login", login);
    // console.log(res);
    return res.data;
}
