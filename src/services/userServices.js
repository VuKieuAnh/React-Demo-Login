import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import customAxios from "./app";

export const login = createAsyncThunk(
    'user/login',
    async (data)=> {
        const res = await customAxios.post('/login',
            data);
        console.log(res.data)
        return res.data
    }
)
