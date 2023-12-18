import { logIn, signUp, logout } from "./Thunks/authThunk";
import { createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged, getAuth } from "firebase/auth";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;

export const { setLoading, setUser, setError } = authSlice.actions;

export const observeAuthChanges = () => (dispatch) => {
  const auth = getAuth();

  dispatch(setLoading(true));

  const unsubscribe = onAuthStateChanged(auth, (user) => {
    dispatch(setLoading(false));
    dispatch(setUser(user));
  });

  return () => {
    unsubscribe();
  };
};
