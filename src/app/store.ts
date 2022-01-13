import { configureStore } from '@reduxjs/toolkit';
import positionSlice from '../features/positionSlice';
import questionsSlice from '../features/questionsSlice';

const store = configureStore({
  reducer: { position: positionSlice, questions: questionsSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
