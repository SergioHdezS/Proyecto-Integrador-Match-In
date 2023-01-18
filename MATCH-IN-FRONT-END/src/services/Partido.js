import axios from "axios";
import { url } from "./Config.js";

const addPost = async (post) => {
    const res = await axios.post(url + "/Post/save", post);
    console.log(res);
    return res.data;
}

const getPost = async (id) => {
    const res = await axios.get(url + "/Post/" + id);
    console.log(res);
    return res.data;
}

const editPost = async (post) => {
    const res = await axios.put(url + "/Post/update", post);
    console.log(res);
    return res.data;
}

const deletePost = async (id) => {
    const res = await axios.delete(url + "/Post/delete/" + id);
    console.log(res);
    return res.data;
}

const getAllPost = async () => {
    const res = await axios.get(url + "/Post/findAll");
    console.log(res);
    return res.data;
}

export { addPost, editPost, deletePost, getAllPost, getPost}