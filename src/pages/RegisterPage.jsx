import { useState } from 'react'

const RegisterPage = () => {
  // Un estado para cada campo del formulario
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const validarDatos = (e) => {
    // Prevenimos el comportamiento por defecto (que la página se recargue)
    e.preventDefault()

    // Validación 1: todos los campos son obligatorios
    if (email === '' || password === '' || confirmPassword === '') {
      alert('Todos los campos son obligatorios')
      return
    }

    // Validación 2: la contraseña debe tener al menos 6 caracteres
    if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres')
      return
    }

    // Validación 3: la contraseña y la confirmación deben ser iguales
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden')
      return
    }

    // Si pasa todas las validaciones
    alert('¡Registro exitoso!')
  }

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>Registro</h1>

          <form onSubmit={validarDatos}>
            <div className="form-group mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label>Contraseña</label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label>Confirmar contraseña</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage