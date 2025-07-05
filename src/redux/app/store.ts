import { configureStore } from "@reduxjs/toolkit";
import { booksApiServices } from "../services/booksServices";
import { borrowServiceApi } from "../services/borrowServices";



export const store = configureStore({
    reducer: {
        [booksApiServices.reducerPath]: booksApiServices.reducer,
        [borrowServiceApi.reducerPath]: borrowServiceApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApiServices.middleware).concat(borrowServiceApi.middleware)
})


// Type the root state and app dispatch Definition 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;