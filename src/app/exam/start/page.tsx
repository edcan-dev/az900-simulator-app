import questions from "@/data/questions.json";
import { QuestionsContainer } from '../../../components/questions/QuestionsContainer';
import { randomizeQuestions } from "@/utils/question-utils";
import { Question } from "@/types/questions/Question";


export default async function StartExamPage({
  searchParams
}: {
  searchParams: Promise<{ quizQuestionsNumber: number }>
}) {

  const { quizQuestionsNumber } = await searchParams;
  const allQuestions = questions as Question[];
  const randomizedAndFilteredQuestions = randomizeQuestions(allQuestions).slice(0, quizQuestionsNumber - 1);

  return (
    <main>
      <QuestionsContainer questions={randomizedAndFilteredQuestions} />
      {/* <QuestionsContainer questions={questions.slice(277)} /> */}
    </main>
  );
}
