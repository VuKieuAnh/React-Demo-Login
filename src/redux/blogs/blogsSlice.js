import {createSlice} from "@reduxjs/toolkit";
import {createBlog, getBlog} from "../../services/BlogServices";

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
        builder.addCase(createBlog.fulfilled, (state, action)=>{
            state.blogs.push(action.payload)
        })
    }
})
export default blogsSlice.reducer
