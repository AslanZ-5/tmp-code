// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authorsSlice = createApi({
    reducerPath: "authors",
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/users'}),
    refetchOnFocus: true,
    refetchOnReconnect: true,
    tagTypes: ["AUTHORS"],
    endpoints: (builder) => ({
        getAllAuthors: builder.query({
            query: () => '',
            transformResponse: ({users}) => {
                console.log('transform',users)
                return users
            },
        })
    })
})

export const {useGetAllAuthorsQuery} = authorsSlice;

// export const fetchAuthors = createAsyncThunk('authors/fetchData', async () => {
//     const res = await fetch("https://dummyjson.com/users")
//     return res.json()
// })
// const authorSlice = createSlice({
//     name: 'authors',
//     initialState: [{
//         id: 'gfbe1',
//         firstName: 'asad',
//         lastName: 'khattab',
//         address: {address: 'riyadh'}
//     }],
//     reducers: {
//         addNewAuthor: (state, action) => {
//             state.push(action.payload)
//         }
//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchAuthors.fulfilled, (state, action) => {
//             console.log(action.payload)
//             return [...state, ...action.payload.users]
//         })
//     }
// })

// export const {addNewAuthor} = authorSlice.actions
// export default authorSlice.reducer