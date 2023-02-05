
import { Link, useLocation } from 'react-router-dom';

import "./Breadcrumbs.scss";
import { BreadcrumItem } from './BreadcrumItem';




export const Breadcrumbs = () => {

  const location = useLocation()
  let currentLink = "";
  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')

    
  return (
    <nav className='breadcrumbs'>
      <ul className='breadcrumbs__list'>
        <li className='breadcrumbs__item'><Link className='breadcrumbs__link' to='/'>Home</Link></li>
        <span className="breadcrumbs__divider">{'—'}</span>
        {crumbs.map((crumb, index, array) => {
          currentLink += `/${crumb}`
          return (
            <BreadcrumItem path={currentLink} name={crumb} key={crumb} isLast={array.length - 1 === index} />
          )
        })}
      </ul>
    </nav>
  )
}
