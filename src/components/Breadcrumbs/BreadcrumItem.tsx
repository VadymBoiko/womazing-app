import React, { FC } from 'react'
import { Link } from 'react-router-dom';


interface IBreadcrumItemProps {
  path: string;
  name: string;
  isLast: boolean;
}

export const BreadcrumItem: FC<IBreadcrumItemProps> = ({ path, name, isLast }) => {


  return (
    <li className='breadcrumbs__item'>
      <Link className={ isLast ? 'breadcrumbs__link_active' : 'breadcrumbs__link'} to={path}>{name}</Link>
      {isLast ? "" : <span className="breadcrumbs__divider">{'—'}</span>}
    </li>

  )
}
