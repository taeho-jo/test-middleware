// 리서치 추천 문항 type
export interface RecommendationQuestionListType {
  optionsData: optionsDataType[];
  question: string;
  questionSeq: number;
  questionType: string;
  sortNumber: number;
}
export interface optionsDataType {
  nextQuestionSeq: number;
  options: string;
  optionsSeq: number;
  relationOptionsSeq: number | null;
  relationQuestionSeq: number | null;
  sortNumber: number;
}
