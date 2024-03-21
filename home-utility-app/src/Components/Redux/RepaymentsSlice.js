import { createSlice } from "@reduxjs/toolkit";


const initialState = [];
const RepaymentsSlice = createSlice({
    name: "repayments",
    initialState,
    reducers: {
        addRepayment(state, action) {
            state.push(action.payload);
        }
    }
});


export const { addRepayment } = RepaymentsSlice.actions;
export default RepaymentsSlice.reducer;