import { useEffect, FC } from 'react';
import { getProducts } from '../../features/products/productSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { Product } from '../Product/Product';


interface ProductListProps {
  category: string;
}

export const ProductList: FC<ProductListProps> = ({ category }) => {

  const dispatch = useAppDispatch();

  const { data, error, loading } = useAppSelector((state) => state)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  return (
    <div>
      <div className="products">
        {error && <p>oh no that is error</p>}
        {loading && <p>loading...</p>}
        {data && data.filter((product) => {
          if (category === 'all') {
            return data
          } else {
            return product.category === category
          }
        }).map(product => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}
