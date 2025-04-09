
export const Form = () => {
  return (
    <main className="container mt-5 contenido">
    <h2 className="text-center">Formulario de Contacto</h2>
    <form className="bg-light p-4 rounded shadow-sm">
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre:
        </label>
        <input type="text" id="nombre" name="nombre" className="form-control" required />
      </div>
      <div className="mb-3">
        <label htmlFor="apellidos" className="form-label">
          Apellidos:
        </label>
        <input type="text" id="apellidos" name="apellidos" className="form-control" required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          required
          placeholder="correo@ejemplo.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="telefono" className="form-label">
          Teléfono:
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          className="form-control"
          required
          placeholder="+34 123 45 67 89"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="mensaje" className="form-label">
          Razones y datos de interés para contactar:
        </label>
        <textarea
          className="form-control"
          placeholder="Tu mensaje"
          rows={4}
          name="mensaje"
          id="mensaje"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
      <button type="reset" className="btn btn-secondary">
        Borrar
      </button>
    </form>
    <button className="fixed-button">
        <a href="/" className='btn'>
          Inicio
        </a>
        </button>
  </main>  )
}

