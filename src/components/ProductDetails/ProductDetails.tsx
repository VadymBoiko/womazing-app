import { useParams } from 'react-router-dom'
import { selectOneProduct } from '../../features/products/productsSlice';
import { useAppSelector } from '../../hooks/useTypedSelector'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'

const ProductDetails = () => {

const {id} = useParams();

const product = useAppSelector(state => selectOneProduct(state, id))


    return (
        <section className='product-info'>
            <div className='container'>
                <h1 className='product__title'>{product?.title}</h1>
                <Breadcrumbs />
                <div className='product'>
                    <div className='product__image'>
                        <img src="https://images.unsplash.com/photo-1441123100240-f9f3f77ed41b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2V4ZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Свитшот Sweet Shot" />
                    </div>
                    <div className='product__details'>
                        <h4 className='product__price'>{`$${product?.price}`}</h4>
                        <div className='product__sizes'>
                            <p className='product__size-title'>select size</p>
                            {product?.sizes.map(size =>(
                                <div className='product__size'>{size}</div>
                            ))}
                        </div>
                        <div className='product__colors'>
                            <p className='product__colors-title'>Select color</p>
                            {product?.colors.map(color => (
                                <div className='product__color'>{color}</div>
                            ))}
                        </div>
                        <form className='product__addInCart'>
                            <input className='product__count' type="text" />
                            <button type='submit' className='product__btn'>Add in cart</button>
                        </form>
                    </div>
                </div>
                <div className='connection'>
                    <h2 className='connection__title'>Connection product</h2>
                    <div className='connection__list'>
                        {/* <Product />
                        <Product /> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails