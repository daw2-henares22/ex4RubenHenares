import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import TablaPendientes from "./components/TablaPendientes";
import TablaResueltos from "./components/TablaResueltos";
import { Route, Routes } from "react-router-dom";
import Panel from "./views/Panell";
import Login from "./views/Login";
import Register from "./views/Registre";


export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Panel />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
      
    </div>
  );
}