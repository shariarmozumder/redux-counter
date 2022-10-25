import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment : (state)=>{
            state.value ++

        },
        decrement:(state)=>{
            if(state.value <= 0){
                
            }
            else{
                state.value --
            }
        },
        setCustom:(state,action)=>{
            state.value = action.payload;
        }
      
    }
})
export const {increment,decrement,setCustom} = counterSlice.actions;
export default counterSlice.reducer;