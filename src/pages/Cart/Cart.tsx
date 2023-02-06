import React from 'react'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'

export const Cart = () => {
  return (
    <section className='cart-section'>
      <Breadcrumbs />
      <div className='container'>
          <div className='table'>
            <div className='table__head'></div>
            <hr />
            <div className='productsInCart'>
              <div className='productInCart'>

              </div>
            </div>
          </div>
      </div>
    </section>
  )
}
