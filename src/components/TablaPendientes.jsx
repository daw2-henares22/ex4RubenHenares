import React from 'react';
import { useGlobalContext } from '../context/GlobalContext';

function TablaPendientes() {
  const { ticketsPendientes, loading } = useGlobalContext();

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
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
          <th></th>
          <th></th>
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
              <button className="btn btn-warning" title="Añadir ticket">
                <i className="bi bi-plus-circle-fill">Resolver</i>
              </button>
            </td>
            <td>
              <button className="btn btn-success" title="Añadir ticket">
                <i className="bi bi-plus-circle-fill">Editar</i>
              </button>
            </td>
            <td>
              <button className="btn btn-primary" title="Añadir ticket">
                <i className="bi bi-plus-circle-fill">Comentario</i>
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

export default TablaPendientes;