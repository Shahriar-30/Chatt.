import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "./slices/UserSlice";
import { UserData } from "./slices/UserData";

let store = configureStore({

    reducer: {

        users: userSlice.reducer,
        data: UserData.reducer,

    }

})

export default store