import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container my-5 text-center">
      <h1 className="display-1">🍕 404</h1>
      <h2>¡Ups! Esta pizza no está en el menú</h2>
      <p className="text-muted mt-3">La página que buscas no existe o fue movida.</p>
      <Link to="/" className="btn btn-dark mt-3">
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound