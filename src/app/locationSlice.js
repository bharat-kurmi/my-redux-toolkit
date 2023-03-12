import { createSlice } from '@reduxjs/toolkit';
const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: ['Bangalore', 'Hyderabad', 'Delhi'],
    search: []
  },
  reducers: {
    save: (state, param) => {
      const { payload } = param;
      state.location = [...state.location, payload];
    },
    remove: (state, param) => {
      const { payload } = param;
     
      const location = state.location;
      const index = location.findIndex(el => el === payload);
      if (index === -1) {
        // return false;
      }
      const newLocation = location.filter(el => el !== payload)
      state.location = newLocation;
    }, 
    searchLocation: (state, action) => {
      state.search  = state.location.filter(el => el === action.payload)
    }
  }
});
const { actions, reducer } = locationSlice
export const { save, remove, searchLocation } = actions;
export default reducer;