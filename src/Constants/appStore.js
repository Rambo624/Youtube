import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice"
import videoReducer from "./VideoSlice"
import searchReducer from "./SearchSlice"


const appStore=configureStore({
    reducer:{
        app:appReducer,
        video:videoReducer,
        search:searchReducer
    }

})


export default appStore