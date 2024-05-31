import { createContext, useContext, useState } from 'react';
import db from '../bd.js';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [ticketsPendientes, setTicketsPendientes] = useState(db.ticketsPendientes);
  const [ticketsResueltos, setTicketsResueltos] = useState(db.ticketsResueltos);

  return (
    <GlobalContext.Provider value={{ ticketsPendientes, setTicketsPendientes, ticketsResueltos, setTicketsResueltos }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};