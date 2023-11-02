import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchInfo = createAsyncThunk('main/ENDPOINT', async (data) => {
  try {
    const results = await FUNCTION(data);
    return results;
  } catch (err) {
    console.log(err);
  }
});

//Initial State of our application
const initialState = {
  leetCodeQuestionLink: 'https://leetcode.com/problemset/all/',
  hasQuestionBeenSent: false,
  randoNumber: 0,
};

//Create a slice of the application
export const mainSlice = createSlice({
  name: 'main',
  initialState,
  //Reducers
  reducers: {
    //actions
    randomQuestion: (state, action) => {
      const {questionSent} = action.payload;

      state.hasQuestionBeenSent = questionSent
    },
  },

  extraReducers: async (state) => {
    state.addCase(fetchInfo.fulfilled, (state, action) => {
      //when promise is fulfilled, then we update state
    });
  },
});

//Export our actions to be dispatched in our application

export const { randomQuestion } = mainSlice.actions;
