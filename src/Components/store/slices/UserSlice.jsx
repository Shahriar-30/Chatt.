import { createSlice } from "@reduxjs/toolkit"

let userSlice = createSlice({

name: "user",

initialState:[localStorage.getItem("theme")],

reducers: { 

 themeSet(state, action){ 
    state.push(action.payload);
 }

}

})

export { userSlice }
export const {themeSet} = userSlice.actions