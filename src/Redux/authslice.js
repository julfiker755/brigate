import { createSlice } from '@reduxjs/toolkit'

const  initialState={
    login:null,
}

const authslice=createSlice({
    name:'authh',
    initialState,
    reducers:{
        updateuser:(state,action)=>{
            state.login=action.payload
        } 
    }
})
export const {updateuser}=authslice.actions
export const selectuser=state=>state.authh.login
export default authslice.reducer