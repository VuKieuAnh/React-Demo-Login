import {createSlice} from "@reduxjs/toolkit";
import {login} from "../../services/userServices";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem("user"))
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action)=>{
            state.currentUser = action.payload
            localStorage.setItem("user", JSON.stringify(action.payload.data));
        })
    }
})
export default userSlice.reducer;
