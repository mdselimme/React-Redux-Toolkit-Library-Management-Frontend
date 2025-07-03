import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



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