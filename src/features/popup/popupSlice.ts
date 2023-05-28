import { RootState } from "../../app/store";
import { VoteDataInterface } from "../vote/voteSlice";
import { PayloadAction } from "./../../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice } from "@reduxjs/toolkit";

export interface PopupState {
  value: string | null;
}

const initialState: PopupState = {
  value: null,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    showPopup: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },

    clearPopup: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { showPopup, clearPopup } = popupSlice.actions;
export const selectPopupValue = (state: RootState) => state.popup.value;
export default popupSlice.reducer;
