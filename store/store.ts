import { configureStore } from '@reduxjs/toolkit';
import chartReducer from './slices/chartSlice';

const store = configureStore({
  reducer: {
    chart: chartReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
