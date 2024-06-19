import React, { useState, useEffect, createContext, useContext } from "react";

// Creación del contexto
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [ticketsResueltos, setTicketsResueltos] = useState([]);
  const [ticketsPendientes, setTicketsPendientes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (url, setData) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        data.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
        setData(data);
      } else {
        console.error(`Error al obtener los datos de ${url}:`, response.status);
      }
    } catch (error) {
      console.error(`Error al obtener los datos de ${url}:`, error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData('https://json-server-vercel-main-examen.vercel.app/ticketsResueltos', setTicketsResueltos);
    fetchData('https://json-server-vercel-main-examen.vercel.app/ticketsPendientes', setTicketsPendientes);
  }, []);

  return (
    <GlobalContext.Provider value={{ ticketsResueltos, ticketsPendientes, loading }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(GlobalContext);
}