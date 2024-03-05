import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL =
  "https://65da68d5bcc50200fcdcec6d.mockapi.io/api/cars/adverts/";

export const fetchAllShops = createAsyncThunk(
  "shops/fetchAll",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get("/shops");
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);