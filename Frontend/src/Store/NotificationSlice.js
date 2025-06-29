import { createSlice } from "@reduxjs/toolkit";

const initialState={
    notifications:[]
}

const NotificationSlice=createSlice({
    name:"NotificationSlice",
    initialState,
    reducers:{
        addNotification:(state,action)=>{
            state.notifications=[...state.notifications,action.payload]
        }
    }
})

export const {addNotification}=NotificationSlice.actions;
export default NotificationSlice.reducer