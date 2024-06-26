import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';

function TablaResueltos() {
  const { ticketsResueltos, loading } = useGlobalContext();

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>Código</th>
          <th>Fecha</th>
          <th>Fecha resuelto</th>
          <th>Aula</th>
          <th>Grupo</th>
          <th>Ordenador</th>
          <th>Descripción</th>
          <th>Alumno</th>
        </tr>
      </thead>
      <tbody>
        {ticketsResueltos.map(ticket => (
          <tr key={ticket.codigo}>
            <td>{ticket.codigo}</td>
            <td>{ticket.fecha}</td>
            <td>{ticket.fecha_resuelto}</td>
            <td>{ticket.aula}</td>
            <td>{ticket.grupo}</td>
            <td>{ticket.ordenador}</td>
            <td>{ticket.descripcion}</td>
            <td>{ticket.alumno}</td>
            <td>
              <button className="btn btn-info" title="Ver comentarios">
                <i className="bi bi-chat-left-dots">Comentario</i>
              </button>
            </td>
            <td>
              <button className="btn btn-danger" title="Eliminar ticket">
                <i className="bi bi-bucket">Eliminar</i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaResueltos;