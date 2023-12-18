import { createSlice } from "@reduxjs/toolkit";
import { getVan, getVans, getHostVans } from "./Thunks/vansThunk";

const initialState = {
  loading: false,
  vans: [],
  viewAllVans: false,
  error: "",
};

const vansSlice = createSlice({
  name: "vans",
  initialState,
  reducers: {
    viewAllVans: (state) => {
      state.viewAllVans = true;
    },
    hideAllVans: (state) => {
      state.viewAllVans = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getVans.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVans.fulfilled, (state, action) => {
        state.loading = false;
        state.vans = action.payload;
        state.error = "";
      })
      .addCase(getVans.rejected, (state, action) => {
        state.loading = false;
        state.vans = [];
        state.error = action.error.message;
      });

    builder
      .addCase(getVan.pending, (state) => {
        state.loading = true;
      })
      .addCase(getVan.fulfilled, (state, action) => {
        state.loading = false;
        state.vans = action.payload;
        state.error = "";
      })
      .addCase(getVan.rejected, (state, action) => {
        state.loading = false;
        state.vans = [];
        state.error = action.error.message;
      });

    builder
      .addCase(getHostVans.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHostVans.fulfilled, (state, action) => {
        state.loading = false;
        state.vans = action.payload;
        state.error = "";
      })
      .addCase(getHostVans.rejected, (state, action) => {
        state.loading = false;
        state.vans = [];
        state.error = action.error.message;
      });
  },
});

export const { viewAllVans, hideAllVans } = vansSlice.actions;

export default vansSlice.reducer;
