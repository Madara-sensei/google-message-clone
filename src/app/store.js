import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import contactReducer from '../features/contactSlice'
import appReducer from '../features/appSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    contact : contactReducer,
    app : appReducer  
  },
});
