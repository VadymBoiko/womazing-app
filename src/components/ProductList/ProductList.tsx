import { useEffect, FC, useState } from 'react';
import { getProducts } from '../../features/products/productSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import Pagination from '../pagination/Pagination';
import { Product } from '../Product/Product';


interface ProductListProps {
  category: string;
}

export const ProductList: FC<ProductListProps> = ({ category }) => {

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productPerPage] = useState<number>(9); 

  const dispatch = useAppDispatch();

  const { data, error, loading } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch]);

  const filteredData = data?.filter((product) => {
    if (category === 'all') {
      return data
    } else {
      return product.category === category
    }
  })


  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;
  const currentProduct = filteredData?.slice(firstProductIndex, lastProductIndex);

  const paginate = (pageNumber:number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage( prev => prev + 1);
  const prevPage = () => setCurrentPage( prev => prev - 1) ;

  return (
    <div>
      <div className="calculation-products">Showed 9 from 12 goods</div>
      <div className="products">
        {error && <p>oh no that is error</p>}
        {loading && <p>loading...</p>}
        {data && currentProduct !== undefined && currentProduct.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      <div className="calculation-products">Showed 9 from 12 goods</div>
      <Pagination 
        totalProduct={data?.length} 
        productPerPage={productPerPage}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
        />
    </div>
  )
}
