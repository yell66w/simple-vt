import { combineReducers, configureStore } from "@reduxjs/toolkit";
import voteSlice from "../features/vote/voteSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import popupSlice from "../features/popup/popupSlice";
const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["votes", "popup"],
};
const votePersistConfig = {
  key: "votes",
  storage,
  blacklist: ["temp_data"],
};

const rootReducer = combineReducers({
  votes: persistReducer(votePersistConfig, voteSlice),
  popup: popupSlice,
});
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
