import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Utopia: A Quiz Planet.</h1>
        <p className="hero-subtitle">
          Utopia is a simple, modular and accessible web app that gives you the
          power to hold on quiz app.
        </p>
        <div className="hero-btns">
          <button className="btn-github">
            Github{" "}
            <span>
              <i className="fab fa-github"></i>
            </span>
          </button>
          <Link to="/themes">
            <button className="btn-docs">
              Get Started
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </button>
          </Link>
        </div>
      </div>
      <img
        src="https://utopia-quiz.netlify.app/assets/Saly-13.png"
        className="hero-image"
        alt="hero-image"
      />
    </main>
  );
}

export { Home };
