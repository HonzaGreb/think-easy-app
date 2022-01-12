import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Answer } from '../model/Answer';

export const DEFAULT_ANSWERS: Answer[] = [
  { index: 0, question: 'Who?', answer: '' },
  { index: 1, question: 'What?', answer: '' },
  { index: 2, question: 'When?', answer: '' },
  { index: 3, question: 'Where?', answer: '' },
];

type answerAction = PayloadAction<Answer>;

const answersSlice = createSlice({
  name: 'answers',
  initialState: DEFAULT_ANSWERS,
  reducers: {
    writeAnswer(state, action: answerAction) {
      const answerIndex = action.payload.index;
      state[answerIndex].answer = action.payload.answer;
    },
    resetAnswers: () => DEFAULT_ANSWERS,
  },
});

export const { writeAnswer, resetAnswers } = answersSlice.actions;

export default answersSlice.reducer;
