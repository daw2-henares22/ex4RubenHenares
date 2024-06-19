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

  const deleteTicket = async (codigo) => {
    try {
      const url = `https://json-server-vercel-main-examen.vercel.app/ticketsPendientes/${codigo}`;
      const response = await fetch(url, {
        method: 'DELETE',
      });
      if (response.ok) {
        setTicketsPendientes(prevTickets => prevTickets.filter(ticket => ticket.codigo !== codigo));
      } else {
        console.error(`Error al eliminar el ticket:`, response.status);
      }
    } catch (error) {
      console.error('Error al eliminar el ticket:', error);
    }
  };

  const resolveTicket = async (ticket) => {
    try {
      // Agregar el ticket resuelto a ticketsResueltos
      const response = await fetch('https://json-server-vercel-main-examen.vercel.app/ticketsResueltos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ticket),
      });
      if (!response.ok) {
        throw new Error(`Error al resolver el ticket: ${response.status}`);
      }

      // Eliminar el ticket de ticketsPendientes
      const deleteResponse = await fetch(`https://json-server-vercel-main-examen.vercel.app/ticketsPendientes/${ticket.codigo}`, {
        method: 'DELETE',
      });
      if (deleteResponse.ok) {
        setTicketsPendientes(prevTickets => prevTickets.filter(t => t.codigo !== ticket.codigo));
      } else {
        console.error(`Error al eliminar el ticket de pendientes: ${deleteResponse.status}`);
      }
    } catch (error) {
      console.error('Error al resolver el ticket:', error);
    }
  };

  return (
    <GlobalContext.Provider value={{ ticketsResueltos, ticketsPendientes, loading, deleteTicket, resolveTicket }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};