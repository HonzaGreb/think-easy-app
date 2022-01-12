import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialPosition = {
  currentIndex: 0,
  questionsShown: true,
  validationShown: false,
  resultShown: false,
};

const positionSlice = createSlice({
  name: 'index',
  initialState: initialPosition,
  reducers: {
    incrementPosition(state) {
      state.currentIndex++;
    },
    decrementPosition(state) {
      state.currentIndex--;
    },
    changePosition(state, action: PayloadAction<number>) {
      state.currentIndex = action.payload;
    },
    showQuestions(state) {
      state.questionsShown = true;
      state.validationShown = false;
      state.resultShown = false;
    },
    showValidation(state) {
      state.questionsShown = false;
      state.validationShown = true;
      state.resultShown = false;
    },
    showResults(state) {
      state.questionsShown = false;
      state.validationShown = false;
      state.resultShown = true;
    },
  },
});

export const {
  incrementPosition,
  decrementPosition,
  changePosition,
  showQuestions,
  showValidation,
  showResults,
} = positionSlice.actions;

export default positionSlice.reducer;
