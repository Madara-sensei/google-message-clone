import { createSlice } from "@reduxjs/toolkit";


export const contactSlice = createSlice({
    name: "contact",
    initialState:{
        contactList:[]
    },
    reducers:{
        setContactList: (state,action)=>{
            state.contactList += action.payload
        },
        delContactList:(state)=>{
            state.contactList = null
        }

    }
})


export const {setContactList,delContactList} = contactSlice.actions

// Store data
export const selectContactList = (state) => state.contact.contactList

export default contactSlice.reducer;