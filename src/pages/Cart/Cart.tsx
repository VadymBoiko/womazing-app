import React, { useEffect } from 'react'

import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { InputField } from '../../components/UI/Input/InputField'
import { Button } from '../../components/UI/Button/Button'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector'
import { CartItem } from '../../components/CartItem/CartItem'
import { updateSummary } from '../../features/cart/cartSlice'



export const Cart = () => {

  const {order, totalPrice } = useAppSelector(state => state.cartSlice);
  const dispatch = useAppDispatch();


  const handleSubmit = () => {
    
  } 

  return (
    <section className='cart-section'>
      <div className='container'>
        <h1 className='cart-title'>Cart</h1>
        <Breadcrumbs />
          <div className='table'>
            <div className='table__head'>
              <span className='table__head-product'>Product</span>
              <span className='table__head-color'>Color</span>
              <span className='table__head-size'>Size</span>
              <span className='table__head-price'>Price</span>
              <span className='table__head-count'>Count</span>
              <span className='table__head-total'>Total</span>
            </div>
            <hr />
            <div className='productsInCart'>
             {order.length === 0 ? 
                <p>No product in cart</p>
             : order.map((item, index) => ( 
              <CartItem item={item} key={index}/>
             )
              )}
            </div>
          </div>
          <form className='formCart' >
            <div className='formCart__coupon-wrapper'>
              <InputField 
                type='text' 
                placeholder='enter coupon'
                className='formCart__input'
                onChange={handleSubmit()}
              />
              {/* <Button
                value='Apply coupon'
                type='button'
                onClick={}
              /> */}
            </div>
            <Button
                value='Update cart'
                type='button'
                onClick={() => dispatch(updateSummary())}
              /> 
          </form>
          <form className='form-confirm'>
            <p className='form-confirm__subsummary'>Subtotal: ${totalPrice}</p>
            <div className='form-confirm__summary'>
              <p className='form-confirm__total'>Total: ${totalPrice}</p>
              <Button
                type='submit'
                value='Submit'
                onClick={handleSubmit()}
              />
            </div>
          </form>
      </div>
    </section>
  )
}
