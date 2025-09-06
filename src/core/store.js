import { configureStore } from "@reduxjs/toolkit";
import mobileNavReducer from "../common/Navigation/MobileNav/mobileNavSlice";

const store = configureStore({
    reducer: {
        mobileNav: mobileNavReducer,
    },
});

export default store;