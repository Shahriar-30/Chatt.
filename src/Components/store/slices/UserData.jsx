import { createSlice } from "@reduxjs/toolkit";

let UserData = createSlice({
   name: "data",
   initialState: localStorage.getItem('data')
      ? JSON.parse(localStorage.getItem('data'))
      : {}, 
   reducers: {
      getData(state, action) {
         return { ...state, ...action.payload };
      },
   },
});

export { UserData };
export const { getData } = UserData.actions;
