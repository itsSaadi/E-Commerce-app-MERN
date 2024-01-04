import { createSlice } from '@reduxjs/toolkit'



export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: []
  },
  reducers: {

    fetchProducts: (state, action) => {
       state.products=action.payload.map((items)=>{
        return {
          _id:items._id,
          title:items.title,
          price:items.price,
          image:items.image
        }
      })
    },
    addProduct: (state, action) => {
      state.products.push(action.payload)
    },

    deleteProduct: (state, action) => {
      const id=action.payload.id
      state.products.filter(u=>u.id!==id)
      console.warn(id)

    },
    deleteProduct: (state, action) => {
      const id=action.payload.id
      state.products.filter(u=>u.id!==id)
      console.warn(id)

    },
    updateProduct: (state, action) => {
       const index=state.products.findIndex(u=>u.id===action.payload.id)
       state.products[index]={
        _id:action.payload.id,
        title:action.payload.title,
        price:action.payload.price,
       }

    },
  },
})

export const { addProduct,fetchProducts,deleteProduct,updateProduct } = productSlice.actions;

export default productSlice.reducer