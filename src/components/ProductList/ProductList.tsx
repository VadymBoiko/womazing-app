
import React, {useEffect, useState} from 'react'
import api from '../../api/closest'
import { getProducts } from '../../features/products/productSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector'
import { Product } from '../Product/Product'
import { data } from '../Slider/data/data'




export const ProductList = () => {

  const dispatch = useAppDispatch();


  const { data, error, loading} = useAppSelector((state) => state)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  return (
    <div>
         <div className="products">
          {error && <p>oh no that is error</p>}
          {loading && <p>loading...</p>}
          {data && data.map(product => (
            <Product product={product}/>
          ))}
        </div>
    </div>
  )
}
