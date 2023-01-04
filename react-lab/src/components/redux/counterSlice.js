import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  value: 100
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value +=1;
    },
    decrement: (state)=> {
      state.value -=1;
    },
    incrementByValue: (state, action)=> {
      console.log(state, action);
      state.value += action.payload.key1
    }
  }
});

export const {increment, decrement, incrementByValue} = counterSlice.actions;
export default counterSlice.reducer
