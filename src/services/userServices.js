import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    'user/login',
    async (data)=> {
        const res = await axios.post('http://localhost:8080/login',
            data);
        console.log(res.data)
        return res.data
    }
)
