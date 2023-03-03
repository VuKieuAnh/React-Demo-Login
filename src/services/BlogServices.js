import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getBlog = createAsyncThunk(
    'blogs/getBlog',
    async ()=>{
        const res= await axios.get("https://jsonplaceholder.typicode.com/posts");
        return res.data
    }
)
export const createBlog = createAsyncThunk(
    'blogs/creatBlog',
    async (data)=>{
        const res= await axios.get("https://jsonplaceholder.typicode.com/posts", data);
        return data
    }
)
