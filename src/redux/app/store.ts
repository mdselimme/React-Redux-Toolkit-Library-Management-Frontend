import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/booksSlice";
import { booksApiServices } from "../services/booksServices";



export const store = configureStore({
    reducer: {
        books: booksReducer,
        [booksApiServices.reducerPath]: booksApiServices.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApiServices.middleware)
})


// Type the root state and app dispatch Definition 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;