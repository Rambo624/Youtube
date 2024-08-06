import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:"video",
    initialState:{
        videoDetails:null
    },
    reducers:{
        addVideoDetails:(state,action)=>{
state.videoDetails=action.payload
        }
    }
})

export default videoSlice.reducer

export const {addVideoDetails}=videoSlice.actions