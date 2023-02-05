import { FC } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../interfaces/interfaces";
import Overlay from "../../utilities/Overlay";

interface ProductProps {
  product: IProduct
}

export const Product:FC<ProductProps> = ({product}) => {
  return (
    <div className="card-item">
      <Link to={`${product.id}`}>
      <div className="card-item__img-wrapper">
        <Overlay />
        <img
          className="card-item__image"
          src={ product.image }
          alt={ product.title }
        />
      </div>
      <div className="card-item__title">{ product.title }</div>
      <p className="card-item__price">{ `${product.price}$` }</p>
      </Link>
    </div>
  );
};
