import { useEffect } from 'react';
import { getProducts } from '../../features/products/productSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { Product } from '../Product/Product';




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
            <Product product={product} key={product.id}/>
          ))}
        </div>
    </div>
  )
}
