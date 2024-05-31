import { Link } from "react-router-dom";

export function Header(){
    return(
        <>
        <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Gestión de incidencias FPLLEFIA</a>
        <div>
          <Link to="/"><button className="btn btn-secondary ms-2">PANEL</button></Link>
          <Link to="/login"><button className="btn btn-secondary ms-2">LOGIN</button></Link>
          <Link to="/registre"><button className="btn btn-secondary ms-2">REGISTRO</button></Link>
        </div>
        <div>
          <span>administrador@fpllefia.com</span>
          
        </div>
      </div>
    </nav>
        </>
    )
}