import { configureStore } from '@reduxjs/toolkit'
import authslice from './authslice';
import slice from './slice';

const store=configureStore({
    reducer:{
      basket:slice,
      authh:authslice,
    }
})
export default store;