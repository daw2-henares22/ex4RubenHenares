import { createContext, useContext, useState, useEffect } from 'react';
import db from '../bd.js';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [ticketsPendientes, setTicketsPendientes] = useState([]);
  const [ticketsResueltos, setTicketsResueltos] = useState([]);

  useEffect(() => {
    
    const pendientesOrdenados = db.ticketsPendientes.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    setTicketsPendientes(pendientesOrdenados);

    const resueltosOrdenados = db.ticketsResueltos.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    setTicketsResueltos(resueltosOrdenados);
  }, []);

  return (
    <GlobalContext.Provider value={{ ticketsPendientes, setTicketsPendientes, ticketsResueltos, setTicketsResueltos }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};