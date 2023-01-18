import axios from "axios";
import { url } from "./Config.js";

const getMail = async(mail) => {
    const res = await axios.get(url+"/User/GetMail/"+ mail);
    console.log(res);
    return res.data;
}

const addProfile = async (profile) => {
    const res = await axios.post(url + "/UserProfile/save", profile);
    console.log(res);
    return res.data;
}
const getProfile = async (id) => {
    const res = await axios.get(url + "/UserProfile/" + id);
    console.log(res);
    return res.data;
}

const editProfile = async (profile) => {
    const res = await axios.put(url + "/UserProfile/update", profile);
    console.log(res);
    return res.data;
}

const deleteProfile = async (id) => {
    const res = await axios.delete(url + "/UserProfile/delete/" + id);
    console.log(res);
    return res.data;
}

const getAllProfiles = async () => {
    const res = await axios.get(url + "/UserProfile/findAll");
    console.log(res);
    return res.data;
}

export {getMail,addProfile,getAllProfiles,getProfile,editProfile,deleteProfile,}
