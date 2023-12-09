import { configureStore, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
    },
    setLogout: (state) => {
      state.user = null;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    }
  },
});

export const { setLogin, setLogout, setUser } = authSlice.actions;

const authSliceReducer = authSlice.reducer;

const persistConfig = {
  key: "movie",
  storage,
  version: 1,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, authSliceReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
