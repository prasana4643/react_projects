import { configureStore } from "@reduxjs/toolkit";
import RepaymentsReducer from "../Redux/RepaymentsSlice";


const Store = configureStore({
    devTools: true,
    reducer: {
        repayments: RepaymentsReducer
    }
})

export default Store;