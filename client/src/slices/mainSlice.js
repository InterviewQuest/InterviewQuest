import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const updateAlgo = createAsyncThunk(
  'main/updateAlgo',
  async (user_id, comfort_rating, algorithm_id) => {
    try {
      const results = await fetch('/algo/updateAlgo', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user_id,
          comfort_rating: comfort_rating,
          algorithm_id: algorithm_id,
        }),
      });

      return { user_id, comfort_rating, algorithm_id };
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateSolved = createAsyncThunk(
  'main/updateSolved',
  async (solved, user_id, algorithm_id) => {
    try {
      const results = await fetch('/algo/updateSolved', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          solved: solved,
          user_id: user_id,
          algorithm_id: algorithm_id,
        }),
      });

      return { user_id, algorithm_id , solved};
    } catch (err) {
      console.log(err);
    }
  }
);

//Initial State of our application
const initialState = {
  userSummary: {},
  problemOfTheDayObj: {},
  hasQuestionBeenSent: false,
};

//Create a slice of the application
export const mainSlice = createSlice({
  name: 'main',
  initialState,
  //Reducers
  reducers: {
    //actions
    setUserLeetCodeInformation: (state, action) => {
      const { problemOfTheDay, success } = action.payload;
      state.userSummary = action.payload;
      state.problemOfTheDayObj = problemOfTheDay;
      state.hasQuestionBeenSent = success;
    },
  },

  extraReducers: async (state, action) => {
    state.addCase(updateAlgo.fulfilled, (state, action) => {
      const { user_id, comfort_rating, algorithm_id } = action.payload;
      const algo = state.userSummary.algorithms;
      for (let i = 0; i < algo.length; i++) {
        const item = algo[i];
        if (item.user_id === user_id && item.algorithm_id === algorithm_id) {
          item.comfort_rating = comfort_rating;
          break;
        }
      }
    });
    state.addCase(updateSolved.fulfilled, (state, action) => {
      const { user_id, solved, algorithm_id } = action.payload;
      const algo = state.userSummary.algorithms;
      for (let i = 0; i < algo.length; i++) {
        const item = algo[i];
        if (item.user_id === user_id && item.algorithm_id === algorithm_id) {
          item.solved = solved
          break;
        }
      }
    });
  },
});

//Export our actions to be dispatched in our application

export const { setUserLeetCodeInformation } = mainSlice.actions;
