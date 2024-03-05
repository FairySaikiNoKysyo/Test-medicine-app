import { createSlice } from '@reduxjs/toolkit';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
};

const shopsSlice = createSlice({
  name: 'shops',
  initialState: {
    shops: [],
    shopItems: {},
    isLoading: false,
    isError: false,
  },
  reducers: {
    setShopItems: (state, action) => {
      state.shopItems = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllShops.pending, handlePending)
      .addCase(fetchAllShops.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
        state.isError = false;
      })
      .addCase(fetchAllCars.rejected, handleRejected);
  },
});
export const { setShopItems } = shopsSlice.actions;
export const shopsReducer = shopsSlice.reducer;
