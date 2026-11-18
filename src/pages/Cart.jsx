import { useState } from 'react'
import { pizzaCart } from '../pizzas'
import { formatPrice } from '../utils/formatPrice'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const aumentar = (id) => {
    const nuevoCarrito = [...cart]
    const index = nuevoCarrito.findIndex((pizza) => pizza.id === id)
    nuevoCarrito[index].count = nuevoCarrito[index].count + 1
    setCart(nuevoCarrito)
  }

  const disminuir = (id) => {
    const nuevoCarrito = [...cart]
    const index = nuevoCarrito.findIndex((pizza) => pizza.id === id)
    nuevoCarrito[index].count = nuevoCarrito[index].count - 1

    if (nuevoCarrito[index].count === 0) {
      setCart(nuevoCarrito.filter((pizza) => pizza.id !== id))
      return
    }

    setCart(nuevoCarrito)
  }

  let total = 0
  cart.forEach((pizza) => {
    total = total + pizza.price * pizza.count
  })

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h5 className="mb-4">Detalles del pedido:</h5>

          {cart.map((pizza) => (
            <div key={pizza.id} className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center">
                <img src={pizza.img} alt={pizza.name} width="60" className="me-3 rounded" />
                <span className="text-capitalize">{pizza.name}</span>
              </div>

              <div className="d-flex align-items-center">
                <span className="me-3">${formatPrice(pizza.price)}</span>
                <button className="btn btn-outline-danger btn-sm" onClick={() => disminuir(pizza.id)}>
                  -
                </button>
                <span className="mx-3">{pizza.count}</span>
                <button className="btn btn-outline-primary btn-sm" onClick={() => aumentar(pizza.id)}>
                  +
                </button>
              </div>
            </div>
          ))}

          <h3 className="mt-4">Total: ${formatPrice(total)}</h3>
          <button className="btn btn-dark mt-2">Pagar</button>
        </div>
      </div>
    </div>
  )
}

export default Cart