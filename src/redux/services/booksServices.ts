import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const booksApiServices = createApi({
    reducerPath: "booksApiServices",
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => "/books"
        })
    })
});


export const { useGetAllBooksQuery } = booksApiServices;
