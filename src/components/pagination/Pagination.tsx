import { FC } from 'react';
import { ReactComponent as Arrow } from '../../icons/ArrowPage.svg'

interface PaginationProps {
  productPerPage: number;
  totalProduct: number | undefined;
  paginate: (pageNumber: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  currentPage: number;
}


const Pagination: FC<PaginationProps> = ({
  productPerPage,
  totalProduct,
  paginate,
  nextPage,
  prevPage,
  currentPage
}) => {
  const pageNumbers = [];
  if (totalProduct !== undefined) {
    for (let i = 1; i <= Math.ceil((totalProduct / productPerPage)); i++) {
      pageNumbers.push(i)
    }
  }

  return (
    <ul className='paginate'>
      {currentPage !== 1 &&<span className='paginate__arrow paginate__arrow-left' onClick={prevPage}><Arrow /></span>}
      {pageNumbers.map((number) => (
        <li
          className={`paginate__item ${currentPage === number && 'paginate__item_active'}`}
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </li>
      ))}
      {currentPage !== pageNumbers.length && <span className='paginate__arrow paginate__arrow-right' onClick={nextPage}><Arrow /></span>}
    </ul>
  )
}

export default Pagination