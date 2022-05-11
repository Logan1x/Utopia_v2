import "./Themes.css";

function Themes() {
  return (
    <main className="theme-container">
      <h2 className="theme-title">Quiz Themes</h2>
      <p className="theme-subtitle">Choose any theme from below cards</p>
      <div className="theme-cards">
        <div className="card">
          <img
            src="https://utopia-quiz.netlify.app/assets/harry-potter.jpg"
            className="card-img"
            alt=""
          />
          <div className="card-content">
            <h2 className="card-heading">Potterheads Quiz</h2>
            <p className="card-text">
              Wingardium Leviousa your way to the quiz that tests your knowledge
              on the wizarding world!
            </p>
            <button className="btn card-btn modalBtn">Start Now!!</button>
          </div>
        </div>

        <div className="card">
          <img
            src="https://utopia-quiz.netlify.app/assets/mandalorian.jpg"
            className="card-img"
            alt=""
          />
          <div className="card-content">
            <h2 className="card-heading">Mandalorian Quiz</h2>
            <p className="card-text">
              Attempting the quiz is the way to meet Grogu and the Mandalorian.
            </p>
            <button className="btn card-btn modalBtn">Start Now!!</button>
          </div>
        </div>
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
