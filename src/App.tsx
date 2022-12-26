import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import {
  AnswerObject,
  Difficulty,
  fetchQuizQuestions,
  QuestionState,
} from "./API";
import { GlobalStyle, Wrapper } from "./App.styles";
const TOTAL_QUESTIONS = 10;
const App = () => {
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [number, setNumber] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const startTrivia = async () => {
    setLoading(true);
    const newQuestion = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestion);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setGameOver(false);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    // user answers
    const answer = e.currentTarget.value;
    // check answer against correct answer
    const correct = questions[number].correct_answer === answer;
    // add score if answer correct
    if (correct) setScore((prev) => prev + 1);
    // save answers in the array for user answers
    const answerObject = {
      question: questions[number].question,
      answer,
      correct,
      correctAnswer: questions[number].correct_answer,
    };
    setUserAnswers((prev) => [...prev, answerObject]);
  };

  const nextQuestion = () => {
    // move on to the next question if not the last question
    const nextQuestion = number + 1;
    if (nextQuestion == TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>React Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading && <p>Loading Question ...</p>}

        {!loading && !gameOver && (
          <QuestionCard
            questionNum={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number]?.question}
            answers={questions[number]?.answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
};

export default App;
