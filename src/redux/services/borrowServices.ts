import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { booksApiServices } from "./booksServices";



export const borrowServiceApi = createApi({
    reducerPath: "borrowServiceApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api"
    }),
    tagTypes: ["borrows"],
    endpoints: (builder) => ({

        getAllBorrows: builder.query({
            query: () => "/borrow",
            providesTags: ["borrows"]
        }),

        createABorrow: builder.mutation({
            query: (borrowBody) => ({
                url: '/borrow',
                method: "POST",
                body: borrowBody
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(booksApiServices.util.invalidateTags(["books"]))
                } catch (error) {
                    console.log(error)
                }
            },
            invalidatesTags: ["borrows"]
        }),

        deleteABorrow: builder.mutation({
            query: (bookId) => ({
                url: `/borrow/${bookId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["borrows"]
        }),

    })
});


export const {
    useGetAllBorrowsQuery,
    useCreateABorrowMutation,
    useDeleteABorrowMutation
} = borrowServiceApi;