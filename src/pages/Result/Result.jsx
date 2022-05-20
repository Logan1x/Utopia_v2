import "./Result.css";
import { useDataContext } from "../../context/dataContext";
import { quizData } from "../../models/data";
import { useState } from "react";

function Result() {
  const { state, dispatch } = useDataContext();
  const [error, setError] = useState("");

  if (state.qid !== null) {
    const { name, questions } = quizData.find(
      (quest) => quest.id === state.qid
    );
  } else if (state.qid === null) {
    console.log("error");
    setError("You haven't attempted the quiz yet");
  }

  return (
    <div>
      {error}
      <h1>Result</h1>
      <h2>{state.score}</h2>
    </div>
  );
}

export { Result };
