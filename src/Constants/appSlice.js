import { createSlice } from "@reduxjs/toolkit";

const appSlice= createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.isMenuOpen=!state.isMenuOpen
        },
        
            closeSideMenu:(state)=> {state.isMenuOpen=false} 
              
            
       
    }
})

export default appSlice.reducer
export const {toggleSidebar,closeSideMenu} =appSlice.actions