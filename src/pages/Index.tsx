
export const Index = () => {
  return (
<main className="container mt-5 contenido">
        <article className="row">
          {/* Foto de perfil */}
          <aside className="col-md-4 text-center">
            <img
              id="fotoPerfil"
              src="./src/images/foto.jpg"
              alt="Foto de perfil"
              className="img-fluid rounded shadow"
              width="300"
              height="400"
            />
          </aside>
          <aside className="col-md-8">
            {/* Sobre mí */}
            <h3>Sobre mí:</h3>
            <p>
              Soy informático graduado en el I.E.S Cura Valera en el área de sistemas
              microinformáticos y redes. Me considero una persona responsable y me gusta
              ser puntual para cualquier cosa. También me interesa aprender más cosas
              constantemente para complementar mis habilidades actuales y que poco a poco
              tenga más conocimientos. He realizado 2 meses de prácticas en Megabit
              Informática.
            </p>
            {/* Formación académica */}
            <h4>Formación académica:</h4>
            <p>
              I.E.S Cura Valera 2022-2024<br />
              <strong>Título obtenido:</strong> Técnico de Sistemas microinformáticos y redes
            </p>
            <button className="CV">
  <a
    title="Mi curriculum"
    href="/Documents/Curriculum_Youssefmf.pdf"
    className="btn"
    target="_blank"
  >
    Mi CV para descargar
  </a>
</button>

            {/* Proyectos */}
            <h3 className="mt-4">
              <b>Proyectos:</b>
            </h3>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item">Proyecto web</li>
              <li className="list-group-item">Página sencilla con Wordpress</li>
              <li className="list-group-item">
                Uso básico de Docker para crear una página similar a la de Moodle Centros
              </li>
            </ol>
            {/* Conocimientos */}
            <h3 className="mt-4">
              <b>Conocimientos</b>
            </h3>
            <ul className="list-group">
              <li className="list-group-item">Conocimientos básicos HTML5 y CSS</li>
              <li className="list-group-item">Conocimientos básicos sobre Java</li>
              <li className="list-group-item">Conocimientos básicos de Wordpress y Docker</li>
            </ul>
          </aside>
        </article>
        {/* Idiomas */}
        <h2 id="TablaIdiomas" className="text-center">
          Idiomas
        </h2>
        <table className="table table-striped table-hover mt-5 shadow-sm rounded">
          <thead className="table-warning text-center">
            <tr>
              <th>Idiomas</th>
              <th>Nivel</th>
            </tr>
          </thead>
          <tbody className="text-center align-middle">
            <tr>
              <td>
                <strong>Español</strong>
              </td>
              <td>Nativo</td>
            </tr>
            <tr>
              <td>
                <strong>Inglés</strong>
              </td>
              <td>3.5/5</td>
            </tr>
          </tbody>
        </table>
        {/* Videos */}
        <h2 className="text-center">
          Videos que me han ayudado bastante a entender conceptos
        </h2>
        <section
          id="displayVideos"
          className="d-none d-md-grid grid gap-3"
          style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
        >
          <iframe
            src="https://www.youtube.com/embed/xk4_1vDrzzo?si=ZLwyvxz6MMG8lGic"
            title="Video"
            className="w-100"
            height="250"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/lfmg-EJ8gm4?si=jVOb9eZTxGzYaNSY"
            title="Video"
            className="w-100"
            height="250"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/HGTJBPNC-Gw?si=tfEv620-9QJDPW4y"
            title="Video"
            className="w-100"
            height="250"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/5OdVJbNCSso?si=cetwVi0mT-q1iPuJ"
            title="Video"
            className="w-100"
            height="250"
            allowFullScreen
          ></iframe>
        </section>
        {/* Carrusel de videos */}
        <div id="videoCarousel" className="carousel slide d-md-none" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <iframe
                src="https://www.youtube.com/embed/xk4_1vDrzzo?si=ZLwyvxz6MMG8lGic"
                title="Video"
                className="w-100"
                height="250"
                allowFullScreen
              ></iframe>
            </div>
            <div className="carousel-item">
              <iframe
                src="https://www.youtube.com/embed/lfmg-EJ8gm4?si=jVOb9eZTxGzYaNSY"
                title="Video"
                className="w-100"
                height="250"
                allowFullScreen
              ></iframe>
            </div>
            <div className="carousel-item">
              <iframe
                src="https://www.youtube.com/embed/HGTJBPNC-Gw?si=tfEv620-9QJDPW4y"
                title="Video"
                className="w-100"
                height="250"
                allowFullScreen
              ></iframe>
            </div>
            <div className="carousel-item">
              <iframe
                src="https://www.youtube.com/embed/5OdVJbNCSso?si=cetwVi0mT-q1iPuJ"
                title="Video"
                className="w-100"
                height="250"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#videoCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#videoCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Enlace adicional */}
        <section id="dev" className="mt-4 p-3 border rounded shadow">
          <h5 className="mb-3">Devdocs</h5>
          <a
            href="https://devdocs.io/html/"
            target="_blank"
            className="btn text-decoration-none"
          >
            Esta página me ha ayudado bastante también
          </a>
        </section>
        {/* Botón fijo */}
        <button className="fixed-button">
        <a href="/" className='btn'>
          Inicio
        </a>
        </button>
      </main>  )
}
