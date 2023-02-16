import {configureStore} from "@reduxjs/toolkit"
export const store = configureStore({
    reducer:{
        [productApi.reducerPath]: productApi.reducer,
    }
})