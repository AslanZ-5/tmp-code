import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProduct = createAsyncThunk('products/fetchData', async () => {
    const res = await fetch('https://dummyjson.com/products')
    return res.json()
})
const productsSlice = createSlice({
    name: 'products',
    initialState: [{
        id: 122,
        title: 'this first Producnt'
    },
    {
        id: 1223,
        title: 'this second Producnt'
    }],
    reducers: {
        addNewProduct: (state, action) => {
            state.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            console.log(action.payload.products)
            return [...state, ...action.payload.products]
        })
    }
})

export const {addNewProduct} = productsSlice.actions

export default productsSlice.reducer