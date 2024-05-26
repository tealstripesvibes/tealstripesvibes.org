import * as toolkitRaw from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const { configureStore } = ((toolkitRaw as any).default ??
  toolkitRaw) as typeof toolkitRaw;

const persistedReducer = persistReducer(
  { key: "primary", version: 2, storage },
  () => {},
);

export const store = configureStore({
  devTools: import.meta.env.DEV,
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
