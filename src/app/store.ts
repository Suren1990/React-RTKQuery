import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { storeAPI } from '../services/StoreService';

export const store = configureStore({
  reducer: {
    [storeAPI.reducerPath]: storeAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storeAPI.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
