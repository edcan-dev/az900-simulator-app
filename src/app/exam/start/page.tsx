import questions from "@/data/questions.json";
import { QuestionsContainer } from '../../../components/questions/QuestionsContainer';


export default function StartExamPage() {

  return (
    <main>
      <QuestionsContainer questions={questions.slice(202)} />
    </main>
  );
}
