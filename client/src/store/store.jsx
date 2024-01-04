import { configureStore } from '@reduxjs/toolkit'
import { usersSlice } from './usersSlice'
import {productSlice} from './productSlice'

export const store = configureStore({
  reducer: {
    users:usersSlice.reducer,
    products:productSlice.reducer
  },
})