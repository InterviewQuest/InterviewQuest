import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchInfo = createAsyncThunk('main/ENDPOINT', async (data) => {
  try {
    const results = await FUNCTION(data);
    return results;
  } catch (err) {
    console.log(err);
  }
});

export const storeTileInfo = createAsyncThunk(
  'main/addTech',
  async (payload) => {
    try {
      const response = await fetch('/tech/addTech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      // const data = await response.json();
      // return data;
    } catch (err) {
      console.error('Failed to add tech info', err);
      throw err;
    }
  }
);

// export const retrieveTileInfo = createAsyncThunk(
//   'main/getTech',
//   async (req, res) => {
//     try {
//       const response = await fetch('/tech/getTech', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });
//       // const data = await response.json();
//       // return data;
//     } catch (err) {
//       console.error('Failed to add tech info', err);
//       throw err;
//     }
//   }
// );

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

  extraReducers: async (state) => {
    state.addCase(fetchInfo.fulfilled, (state, action) => {
      //when promise is fulfilled, then we update state
    });
  },
});

//Export our actions to be dispatched in our application

export const { setUserLeetCodeInformation } = mainSlice.actions;
