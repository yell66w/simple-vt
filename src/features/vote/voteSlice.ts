import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface VoteState {
  temp_data: { [category_id: number]: number };
  submitted_data: { [category_id: number]: number };
}

const initialState: VoteState = {
  temp_data: {},
  submitted_data: {},
};

export const voteSlice = createSlice({
  name: "votes",
  initialState,
  reducers: {
    addTempVote: (
      state,
      action: PayloadAction<{ category_id: number; nominee_id: number }>
    ) => {
      const { category_id, nominee_id } = action.payload;
      state.temp_data[category_id] = nominee_id;
    },
    submitVotes: (state) => {
      //Add validation
      state.submitted_data = { ...state.submitted_data, ...state.temp_data };
    },
  },
});

export const { addTempVote, submitVotes } = voteSlice.actions;

export const selectTempVoted = (state: RootState, category_id: number) =>
  state.votes.temp_data[category_id];

export const selectSubmittedVoted = (state: RootState, category_id: number) =>
  state.votes.submitted_data[category_id];
export default voteSlice.reducer;
