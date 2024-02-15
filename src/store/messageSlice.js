import { createSlice } from '@reduxjs/toolkit';

const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    randomMessage: null, // Store the currently fetched random message
    error: null, // Store any error that occurs during fetching
    loading: false, // Indicate whether the fetching process is ongoing
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
  },
});

export const {
  fetchRandomMessageRequest,
  fetchRandomMessageSuccess,
  fetchRandomMessageFailure,
} = messageSlice.actions;

export const messageReducer = messageSlice.reducer;
