import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAuthors = createAsyncThunk('authors/fetchData', async () => {
    const res = await fetch("https://dummyjson.com/users")
    return res.json()
})
const authorSlice = createSlice({
    name: 'authors',
    initialState: [{
        id: 'gfbe1',
        firstName: 'asad',
        lastName: 'khattab',
        address: {address: 'riyadh'}
    }],
    reducers: {
        addNewAuthor: (state, action) => {
            state.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAuthors.fulfilled, (state, action) => {
            console.log(action.payload)
            return [...state, ...action.payload.users]
        })
    }
})

export const {addNewAuthor} = authorSlice.actions
export default authorSlice.reducer