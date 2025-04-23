
export const Menu = () => {
  return (
<header className="menu">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
          <button className="navbar-toggler d-lg-none text-white border-0 bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              Youssef Miftah El Baze
          </button>
  
          <a className="navbar-brand d-none d-lg-block text-white" href="/">Youssef Miftah El Baze</a>
  
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                  <li className="nav-item"><a className="nav-link text-white" href="/#formulario" title="Formulario de contacto">Solicitud de contacto</a></li>
                  <li className="nav-item"><a className="nav-link text-white" href="/#TablaIdiomas" title="Idiomas">Idiomas</a></li>
                  <li className="nav-item"><a className="nav-link text-white" href="/#Contactos" title="Los contactos que uso para comunicarme">Contactos</a></li>
                  <li className="nav-item"><a className="nav-link text-white" href="/#displayVideos" title="Galeria con videos">Galeria</a></li>
              </ul>
          </div>
      </div>
    </nav>
  </header>
    )
}
