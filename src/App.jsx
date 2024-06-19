import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes } from "react-router-dom";
import Panel from "./views/Panell";
import Login from "./views/Login";
import Register from "./views/Registre";
import { NuevoTicket } from "./views/NuevoTicket";


export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Panel />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/nuevoTicket" element={NuevoTicket}/>
      </Routes>
      
    </div>
  );
}