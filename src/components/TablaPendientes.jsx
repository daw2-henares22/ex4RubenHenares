import React, { useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import EditarTicketsPendientes from './EditarTicketsPendientes';

function TablaPendientes() {
  const { ticketsPendientes, loading } = useGlobalContext();
  const [editingTicket, setEditingTicket] = useState(null);

  const handleEditClick = (ticket) => {
    setEditingTicket(ticket);
  };

  const borrarDatosCard = async (id) => {
    console.log("ID del ticket a borrar:", id);
    try {
      const url = `https://json-server-vercel-main-examen.vercel.app/ticketsPendientes/{id}`;
      console.log('Deleting ticket at:', url);
  
      const response = await fetch(url, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        
        setTicketsPendientes(prevTickets => prevTickets.filter(ticket => ticket.codigo !== id));
        console.log(`Ticket con ID ${id} eliminado exitosamente`);
      } else {
        console.error(`Error al eliminar el ticket:`, response.status);
        const errorMessage = await response.text();
        console.error('Detalles del error:', errorMessage);
      }
    } catch (error) {
      console.error('Error al eliminar el ticket:', error);
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Código</th>
            <th>Fecha</th>
            <th>Aula</th>
            <th>Grupo</th>
            <th>Ordenador</th>
            <th>Descripción</th>
            <th>Alumno</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ticketsPendientes.map(ticket => (
            <tr key={ticket.codigo}>
              <td>{ticket.codigo}</td>
              <td>{ticket.fecha}</td>
              <td>{ticket.aula}</td>
              <td>{ticket.grupo}</td>
              <td>{ticket.ordenador}</td>
              <td>{ticket.descripcion}</td>
              <td>{ticket.alumno}</td>
              <td>
                <button className="btn btn-warning" title="Resolver ticket">
                  <i className="bi bi-plus-circle-fill">Resolver</i>
                </button>
              </td>
              <td>
                <button className="btn btn-success" title="Editar ticket" onClick={() => handleEditClick(ticket)}>
                  <i className="bi bi-pencil-fill">Editar</i>
                </button>
              </td>
              <td>
                <button className="btn btn-primary" title="Comentario">
                  <i className="bi bi-chat-left-text-fill">Comentario</i>
                </button>
              </td>
              <td>
                <button className="btn btn-danger" title="Eliminar ticket" onClick={() => borrarDatosCard(ticket.codigo)}>
                  <i className="bi bi-trash">Eliminar</i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TablaPendientes;