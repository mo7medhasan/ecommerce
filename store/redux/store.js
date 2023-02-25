import {configureStore} from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { productsApi } from "./product"
export const store = configureStore({
    reducer:{
        [productsApi.reducerPath]: productsApi.reducer,
    }, middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)