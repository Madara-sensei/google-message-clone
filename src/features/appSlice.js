import { createSlice } from "@reduxjs/toolkit";


export const appSlice = createSlice({
    name: "app",
    initialState:{
        selectedChat:null,
      
    },
    reducers:{
        setSelectedChat: (state,action) =>{
            state.selectedChat = action.payload;    
        },
   

    }
})


export const {setSelectedChat} = appSlice.actions

// Store data
export const selectChat = (state) => state.app.selectedChat
export default appSlice.reducer;