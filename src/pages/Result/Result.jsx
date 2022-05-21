import "./Result.css";
import { useDataContext } from "../../context/dataContext";
import { quizData } from "../../models/data";
import { useEffect, useState } from "react";

function Result() {
  const { state } = useDataContext();
  const [quizDataWithQuesAns, setQuizDataWithQuesAns] = useState({
    name: "",
    questions: [],
  });

  const wasSeleted = (option) => {
    return state.qidOptions.includes(option);
  };

  useEffect(() => {
    const qid = state.qid;

    if (qid !== null) {
      const { name, questions } = quizData.find((quest) => quest.id === qid);
      setQuizDataWithQuesAns({ name, questions });
    } else {
      console.log("error");
    }
  }, []);

  return (
    <main className="result-container">
      <h1 className="result-title">Result</h1>
      <p className="result-info">Final Score: {state.score}/25</p>
      {quizDataWithQuesAns.questions.map((quest) => {
        return (
          <div>
            <div className="question-body">
              <p className="quiz-question">{quest.question}</p>
              <div className="quiz-options">
                {quest.options.map((option, index) => {
                  return (
                    <div key={index}>
                      {quest.answer === option ? (
                        <div className="quiz-card option-selected">
                          {option}
                        </div>
                      ) : (
                        <>
                          {wasSeleted(option) ? (
                            <div className="quiz-card choice-wrong">
                              {option}
                            </div>
                          ) : (
                            <div className="quiz-card">{option}</div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
                <h4>Correct Answer: {quest.answer}</h4>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export { Result };
