import React from "react";
import { AnswerObject } from "../API";
import { ButtonWrapper, Wrapper } from "./QuestionCard.styles";
type QuestionProps = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

const QuestionCard = ({
  question,
  answers,
  callback,
  userAnswer,
  totalQuestions,
  questionNum,
}: QuestionProps) => {
  return (
    <Wrapper>
      {/* Number of The Question */}
      <p className="number">
        Question: {questionNum} / {totalQuestions}
      </p>
      {/* The Question */}
      <p dangerouslySetInnerHTML={{ __html: question }} />
      {/* Answers For The Question */}
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            key={answer}
          >
            <button
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
