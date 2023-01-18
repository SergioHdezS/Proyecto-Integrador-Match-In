import axios from "axios";
import { url } from "./Config.js";

const addUser = async (usuario) => {
    const res = await axios.post(url + "/User/save", usuario);
    console.log(res);
    return res.data;
}
const getUser = async (id) => {
    const res = await axios.get(url + "/User/" + id);
    console.log(res);
    return res.data;
}

const editUser = async (usuario) => {
    const res = await axios.put(url + "/User/update", usuario);
    console.log(res);
    return res.data;
}

const deleteUser = async (id) => {
    const res = await axios.delete(url + "/User/delete/" + id);
    console.log(res);
    return res.data;
}

const getAllUsers = async () => {
    const res = await axios.get(url + "/User/findAll");
    console.log(res);
    return res.data;
}

const getLogin = async (passMail) => {
    const res = await axios.get(url + "/User/User/Login", passMail);
    console.log(res);
    return res.data;
}

export { addUser, deleteUser, getUser, editUser, getAllUsers, getLogin }