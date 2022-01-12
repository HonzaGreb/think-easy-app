import { configureStore } from '@reduxjs/toolkit';
import positionSlice from '../features/positionSlice';
import answersSlice from '../features/answersSlice';

const store = configureStore({
  reducer: { position: positionSlice, answers: answersSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
