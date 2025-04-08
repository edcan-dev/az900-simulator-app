interface Option {
  id: 1,
  text: string,
  correct: boolean
}


type QuestionType = 'checkbox' | 'select_one'
type QuestionTextType = 'p' | 'ul'


export interface QuestionText {
  text: string;
  type: QuestionTextType;
}

export interface ParagraphQuestionText extends QuestionText { }

export interface UnorderedListQuestionText extends QuestionText {
  items: string[];
}


export interface Question {
  id: number;
  type: QuestionType;
}





export interface CheckBoxQuestion extends Question {
  question_texts?: QuestionText[];
  options?: Option[];
}


export interface SelectOneQuestion extends Question {
  question_texts?: QuestionText[];
  options?: Option[];
}