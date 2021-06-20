import { createSlice } from "@reduxjs/toolkit";


export const contactSlice = createSlice({
    name: "contact",
    initialState:{
        contactList:[]
    },
    reducers:{
        setContactList: (state,action)=>{
            state.user = action.payload
        },
        delContactList:(state)=>{
            state.contactList = null
        }

    }
})


export const {setContactList,delContactList} = contactSlice.actions

// Store data
export const selectContactList = (state) => state.contactList

export default contactSlice.reducer;