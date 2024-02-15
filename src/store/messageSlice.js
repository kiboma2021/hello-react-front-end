import { createSlice } from '@reduxjs/toolkit';

const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    randomMessage: null,
    error: null, 
    loading: false, 
  },
  reducers: {
    fetchRandomMessageRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchRandomMessageSuccess(state, action) {
      state.loading = false;
      state.randomMessage = action.payload;
    },
    fetchRandomMessageFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setRandomMessage(state, action) {
      state.randomMessage = action.payload;
    },
  },
});

export const {
  fetchRandomMessageRequest,
  fetchRandomMessageSuccess,
  fetchRandomMessageFailure,
  setRandomMessage, 
} = messageSlice.actions;

export const messageReducer = messageSlice.reducer;
