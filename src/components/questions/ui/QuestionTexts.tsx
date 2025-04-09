import { QuestionText, UnorderedListQuestionText } from "@/types/questions/Question";

interface Props {
  question_texts?: QuestionText[];
}

export const QuestionTexts = ({ question_texts }: Props) => {
  return (
    <>
      {question_texts &&
        question_texts.map((question_text, index) => {
          switch (question_text.type) {
            case "p":
              return (
                <p key={index} className="text-gray-500 text-justify mb-[10px]">
                  {question_text.text}
                </p>
              );
            case "ul":
              return (
                <ul
                  key={index}
                  className="text-gray-500 text-justify mb-[10px]"
                >
                  <p key={index} className="text-gray-500 text-justify mb-[10px]">
                    {question_text.text}
                  </p>
                  {(question_text as UnorderedListQuestionText).items.map(
                    (item, index) => (
                      <li key={index}>- {item}</li>
                    )
                  )}
                </ul>
              );
            default:
              return null;
          }
        })}
    </>
  );
};
