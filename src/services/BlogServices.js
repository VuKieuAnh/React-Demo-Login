import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getBlog = createAsyncThunk(
    'blogs/getBlog',
    async ()=>{
        const res= await axios.get("https://jsonplaceholder.typicode.com/posts");
        return res
    }
)
