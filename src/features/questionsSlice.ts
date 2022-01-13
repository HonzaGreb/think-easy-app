import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question } from '../model/Question';

export const DEFAULT_QUESTIONS: Question[] = [
  { question: 'Who?', answer: '' },
  { question: 'What?', answer: '' },
  { question: 'When?', answer: '' },
  { question: 'Where?', answer: '' },
];

type answerAction = PayloadAction<{index: number; answer: string;}>;

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
