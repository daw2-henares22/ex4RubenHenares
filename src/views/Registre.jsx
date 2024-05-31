export function Registre(){
    return(
        <>
        <div className="container pt-5">
      <h1 className="w-100 text-center">Registro</h1>
      <form className="form p-4 border shadow mt-5 mx-auto" style={{ width: '400px' }}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">User:</label>
          <input type="email" className="form-control" id="email" placeholder="usuario@mail.com" required />
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">Contraseña:</label>
          <input type="password" className="form-control" id="pass" required />
        </div>
        <button type="submit" className="btn btn-primary w-100 mt-4" id="enviar">Entrar</button>
      </form>
    </div>
        </>
    )
}