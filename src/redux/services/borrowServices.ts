import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { booksApiServices } from "./booksServices";
import { errorPrint } from "../../components/errorMessage/errorMessage";



export const borrowServiceApi = createApi({
    reducerPath: "borrowServiceApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://library-management-server-s.vercel.app/api"
    }),
    tagTypes: ["borrows"],
    endpoints: (builder) => ({

        // Get All Borrows 
        getAllBorrows: builder.query({
            query: () => "/borrow",
            providesTags: ["borrows"]
        }),

        // Create A Borrow 
        createABorrow: builder.mutation({
            query: (borrowBody) => ({
                url: '/borrow',
                method: "POST",
                body: borrowBody
            }),
            // query for refetch api after borrow 
            async onQueryStarted(_id, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    dispatch(booksApiServices.util.invalidateTags(["books"]))
                } catch (error) {
                    if (error instanceof Error) {
                        errorPrint(error.message)
                    }
                }
            },
            invalidatesTags: ["borrows"]
        }),

        // Delete A Borrow 
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