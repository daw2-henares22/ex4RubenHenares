import React, { useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';
import { Modal } from './Modal';

const EditarTicketsPendientes = ({ ticket, onClose }) => {
    const { editTicket } = useGlobalContext();
    const [formData, setFormData] = useState({ ...ticket });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      editTicket(ticket.id, formData);
      onHide();
    };
  
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCodigo">
              <Form.Label>Código</Form.Label>
              <Form.Control type="text" name="codigo" value={formData.codigo} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formFecha">
              <Form.Label>Fecha</Form.Label>
              <Form.Control type="date" name="fecha" value={formData.fecha} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formAula">
              <Form.Label>Aula</Form.Label>
              <Form.Control type="text" name="aula" value={formData.aula} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formGrupo">
              <Form.Label>Grupo</Form.Label>
              <Form.Control type="text" name="grupo" value={formData.grupo} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formOrdenador">
              <Form.Label>Ordenador</Form.Label>
              <Form.Control type="text" name="ordenador" value={formData.ordenador} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formDescripcion">
              <Form.Label>Descripción</Form.Label>
              <Form.Control type="text" name="descripcion" value={formData.descripcion} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formAlumno">
              <Form.Label>Alumno</Form.Label>
              <Form.Control type="text" name="alumno" value={formData.alumno} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
            <Button variant="secondary" onClick={onHide}>
              Cancelar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  };
  
  export default EditarTicketsPendientes;