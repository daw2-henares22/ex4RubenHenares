import { useState } from "react";

function NuevoTicket() {
  const [formData, setFormData] = useState({
    fecha: "",
    aula: "",
    grupo: "",
    ordenador: "",
    descripcion: "",
    alumno: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del nuevo ticket al servidor
    console.log("Datos del nuevo ticket:", formData);
    // Limpia el formulario después de enviar
    setFormData({
      fecha: "",
      aula: "",
      grupo: "",
      ordenador: "",
      descripcion: "",
      alumno: "",
    });
  };

  return (
    <div>
      <h2>Crear Nuevo Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Fecha:</label>
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Aula:</label>
          <input
            type="text"
            name="aula"
            value={formData.aula}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Grupo:</label>
          <input
            type="text"
            name="grupo"
            value={formData.grupo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Ordenador:</label>
          <input
            type="text"
            name="ordenador"
            value={formData.ordenador}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Alumno:</label>
          <input
            type="text"
            name="alumno"
            value={formData.alumno}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Crear Ticket</button>
      </form>
    </div>
  );
}

export default NuevoTicket;
