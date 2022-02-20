import nav from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Idk
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Idk either
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Idfk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
