import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <main className="notFound-Wrapper">
      <h1>
        Go{" "}
        <span className="text-highlight">
          <Link to="/">Home</Link>
        </span>
        , You are drunk.
      </h1>
    </main>
  );
}

export { NotFound };
