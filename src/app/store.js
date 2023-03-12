import { configureStore } from '@reduxjs/toolkit'
import locationSlice from './locationSlice'
import themeSlice from './themeSlice'
export default configureStore({
  reducer: {
    location: locationSlice,
    theme: themeSlice
  }
})