import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const booksApiServices = createApi({
    reducerPath: "booksApiServices",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/'
    }),
    tagTypes: ["books"],

    endpoints: (builder) => ({

        // get all books from server 
        getAllBooks: builder.query({
            query: () => "/books",
            providesTags: ["books"]
        }),

        // get a book from server 
        getABook: builder.query({
            query: (bookId) => `/books/${bookId}`,
            providesTags: ["books"]
        }),

        // create a book in server 
        createABook: builder.mutation({
            query: (booksBody) => ({
                url: "/books",
                method: "POST",
                body: booksBody
            }),
            invalidatesTags: ["books"]
        }),

        // delete a book from server 
        deleteABook: builder.mutation({
            query: (bookId) => ({
                url: `/books/${bookId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["books"]
        }),

        // update a book from server 
        updateABook: builder.mutation({
            query: ({ bookData, bookId }) => ({
                url: `/books/${bookId}`,
                method: "PUT",
                body: bookData
            }),
            invalidatesTags: ["books"]
        }),

    })
});


export const {
    useGetAllBooksQuery,
    useGetABookQuery,
    useCreateABookMutation,
    useUpdateABookMutation,
    useDeleteABookMutation
} = booksApiServices;
