import {configureStore} from "@reduxjs/toolkit";
import blogsReducer from "./blogs/blogsSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
    reducer: {
        blog: blogsReducer,
        user: userReducer
    }
})
