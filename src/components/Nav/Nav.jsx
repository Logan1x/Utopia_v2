import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      <p className="nav-title">
        <span className="rotate">💡</span>
        <Link to="/"> Utopia </Link>
        <span className="text-sm">v2.0</span>
      </p>
      <div className="nav-pills">
        <Link to="/themes">Themes</Link>
        <a href="https://github.com/Logan1x/utopia">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/herkuch">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </nav>
  );
}

export { Nav };
