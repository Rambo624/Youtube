import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice"
import videoReducer from "./VideoSlice"
import searchReducer from "./SearchSlice"
import chatReducer from "./chatSlice"

const appStore=configureStore({
    reducer:{
        app:appReducer,
        video:videoReducer,
        search:searchReducer,
        chat:chatReducer
    }

})


export default appStore