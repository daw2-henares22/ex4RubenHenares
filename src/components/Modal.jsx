export function Modal(){
    return(
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Observaciones</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Código incidencia: <span>123546</span></p>
        <label for="comentario" className="form-label">Comentario:</label> 
        <input className="form-control">Estee es un comentario sobre esta incidencia</input>
        <p className="small text-end">Autor: <span>Pepe Loco</span></p>
      </div>
      <div className="modal-footer">

        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" className="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>
    )
}