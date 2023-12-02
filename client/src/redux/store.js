import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
  key: "root",
  storage: sessionStorage
};

const appReducer = combineReducers({ user: userReducer, cart: cartReducer });

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: rootReducer
//   // middleware: (getDefaultMiddleware) =>
//   //   getDefaultMiddleware({
//   //     serializableCheck: {
//   //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   //     },
//   //   }),
// });

export const store = configureStore({
  reducer: persistedReducer
});


export let persistor = persistStore(store);