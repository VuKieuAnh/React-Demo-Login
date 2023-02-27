import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const Login = createAsyncThunk(
    'user/login',
    async (data)=> {
        const res = await axios.post('http://localhost:8080/login',
            data);
        return res
    }
)
