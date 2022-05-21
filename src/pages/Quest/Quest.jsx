import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { quizData } from "../../models/data";
import { useDataContext } from "../../context/dataContext";
import "./Quest.css";

function Quest() {
  const { qid } = useParams();
  const { state, dispatch } = useDataContext();
  const navigate = useNavigate();
  const { name, questions } = quizData.find((quest) => quest.id === qid);

  const [activeOption, setActiveOption] = useState();
  const [selectedOption, setSelectedOption] = useState("");

  const [index, setIndex] = useState(0);
  const quest = questions[index];

  const validateAnswer = (quesIndex) => {
    if (questions[quesIndex].answer === selectedOption) {
      dispatch({ type: "SET_SCORE", payload: state.score + 5 });
      setActiveOption("");
    } else if (selectedOption !== "") {
      dispatch({ type: "SET_SCORE", payload: state.score - 2 });
      setActiveOption("");
    }
  };

  const sbmtQuiz = (quesIndex) => {
    validateAnswer(quesIndex);
    dispatch({
      type: "SET_QIDOPTIONS",
      payload: [...state.qidOptions, selectedOption],
    });
    navigate("/results");
  };

  const nextQuest = (quesIndex) => {
    dispatch({ type: "SET_QID", payload: qid });
    dispatch({
      type: "SET_QIDOPTIONS",
      payload: [...state.qidOptions, selectedOption],
    });
    let ind = quesIndex + 1;

    // changing next button to submt button
    if (ind > 5) {
      setIndex(5);
    }
    setIndex(ind);

    // making score 0 when playing again
    if (ind === 1) {
      dispatch({ type: "SET_SCORE", payload: 0 });
    }

    validateAnswer(quesIndex);
  };

  const handleOptionClick = (index, option) => {
    setActiveOption(index);
    setSelectedOption(option);
  };

  return (
    <main className="quiz-container">
      <h2 className="quiz-title">{name}</h2>
      <div className="quiz-info">
        <p>Question: {quest.id}/5</p>
        <p>Score: {state.score}</p>
      </div>
      <div className="question-body">
        <p className="quiz-question">{quest.question}</p>
        <div className="quiz-options">
          {quest.options.map((option, index) => {
            return (
              <div key={index}>
                {activeOption === index ? (
                  <div
                    className="quiz-card option-selected"
                    onClick={() => handleOptionClick(index, option)}
                  >
                    {option}
                  </div>
                ) : (
                  <div
                    className="quiz-card"
                    onClick={() => handleOptionClick(index, option)}
                  >
                    {option}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="quiz-question-footer-btns">
          <Link to="/themes">
            <button className="quiz-question-next">Quit</button>
          </Link>
          {index === 4 ? (
            <button
              className="quiz-question-next"
              onClick={() => sbmtQuiz(index)}
            >
              Submit{" "}
              <span>
                <i className="fas fa-chevron-right"></i>{" "}
              </span>
            </button>
          ) : (
            <button
              className="quiz-question-next"
              onClick={() => nextQuest(index)}
            >
              Next{" "}
              <span>
                <i className="fas fa-chevron-right"></i>{" "}
              </span>
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

export { Quest };
