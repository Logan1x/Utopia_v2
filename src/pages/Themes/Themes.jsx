import "./Themes.css";
import { Link, useParams } from "react-router-dom";

import { QuizCard } from "../../components";
import { quizData } from "../../models/data";

function Themes() {
  return (
    <main className="theme-container">
      <h2 className="theme-title">Quiz Themes</h2>
      <p className="theme-subtitle">Choose any theme from below cards</p>
      <div className="theme-cards">
        {quizData.map((data) => (
          <Link to={`/quest/${data.id}/rules`}>
            <QuizCard key={data.id} {...data} />
          </Link>
        ))}
      </div>
      <div className="show-modal modal" id="modal">
        <div className="modal-body">
          <h2>
            There are some rules, you should follow before you go wandering
          </h2>
          <div className="model-text-left">
            <p>1. You can only attempt the quiz once.</p>
            <p>2. You can't go back to the quiz after you've attempted it.</p>
            <p>
              3. If you are found cheating using any source, you'll be discarded
              from future quizes.
            </p>
          </div>

          <div>
            <button className="btn card-btn">
              <a href="./question.html"> Start the quiz?</a>
            </button>
            <button className="btn card-btn btn-danger" id="closeModal">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export { Themes };
