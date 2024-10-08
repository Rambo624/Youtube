import { createSlice } from "@reduxjs/toolkit";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
messages:[]
    },
    reducers:{
addMessage:(state,action)=>{
    state.messages.splice(20,1)
    state.messages.unshift(action.payload)
}
    }
})


export default chatSlice.reducer
export const {addMessage}=chatSlice.actions