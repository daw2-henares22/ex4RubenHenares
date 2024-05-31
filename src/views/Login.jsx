export function Login(){
    return(
        <>
        <div className="container pt-5">
        <h1 className="w-100 text-center">Registro</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
        </>
    )
}