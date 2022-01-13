import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question } from '../model/Question';

export const DEFAULT_QUESTIONS: Question[] = [
  { index: 0, question: 'Who?', answer: '' },
  { index: 1, question: 'What?', answer: '' },
  { index: 2, question: 'When?', answer: '' },
  { index: 3, question: 'Where?', answer: '' },
];

type answerAction = PayloadAction<Question>;

const questionsSlice = createSlice({
  name: 'questions',
  initialState: DEFAULT_QUESTIONS,
  reducers: {
    writeAnswer(state, action: answerAction) {
      const answerIndex = action.payload.index;
      state[answerIndex].answer = action.payload.answer;
    },
    resetAnswers: () => DEFAULT_QUESTIONS,
  },
});

export const { writeAnswer, resetAnswers } = questionsSlice.actions;

export default questionsSlice.reducer;
