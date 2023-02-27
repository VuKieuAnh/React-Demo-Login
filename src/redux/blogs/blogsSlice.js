import {createSlice} from "@reduxjs/toolkit";
import {getBlog} from "../../services/BlogServices";

const initialState= {
    blogs: []
}
const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getBlog.fulfilled, (state, action)=>{
            state.blogs = action.payload
        })
    }
})
export default blogsSlice.reducer
