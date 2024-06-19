import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Gestión de incidencias FPLLEFIA</Link>
          <div>
            <Link to="/panel" className="btn btn-secondary ms-2">PANEL</Link>
            <Link to="/login" className="btn btn-secondary ms-2">LOGIN</Link>
            <Link to="/registro" className="btn btn-secondary ms-2">REGISTRO</Link>
          </div>
          <div>
            <span>RubénHenaresAdmin@fpllefia.com</span>
          </div>
        </div>
      </nav>
    </header>
  );
}