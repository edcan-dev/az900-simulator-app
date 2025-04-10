import questions from "@/data/questions.json";
import { QuestionsContainer } from '../../../components/questions/QuestionsContainer';


export default function StartExamPage() {

  return (
    <main>
      {/* <QuestionsContainer questions={questions} /> */}
      <QuestionsContainer questions={questions.slice(277)} />
    </main>
  );
}
