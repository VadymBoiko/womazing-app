import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../../features/product/product';
import { getProducts } from '../../features/products/productsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { Product } from '../Product/Product';

const ProductDetails = () => {

    const dispatch = useAppDispatch()

    const [color, setColor] = useState<string | undefined>('');
    const [size, setSize] = useState<string | undefined>('');
    // const [count, setCount] = useState<number>(1);

    const  params = useParams();
    const {product} = useAppSelector(state => state.productSlice);
    const {data} = useAppSelector(state => state.productsSlice)

    useEffect(() => {
        dispatch(getSingleProduct(params.id));
        dispatch(getProducts());
    }, [dispatch, params]);

    useEffect(() =>{
        setColor(product?.colors[0]);
        setSize(product?.sizes[0]);
    }, [product]);


    // const onSubmit = () =>{
    //     const addProduct = {
    //         title: data?.title,
    //         count:
    //     }
    // }

    if (data === undefined) {
        return (
            <p>No find product</p>
        )
    }
    return (
        <section className='product-info'>
            <div className='container'>
                <h1 className='product__title'>{product?.title}</h1>
                <Breadcrumbs />
                <div className='product'>
                    <div className='product__image'>
                        <img src={product?.image} alt={product?.title} />
                    </div>
                    <div className='product__details'>
                        <h4 className='product__price'>{`$${product?.price}`}</h4>
                        <h5 className='product__size-title'>select size</h5>
                        <ul className='product__sizes'>
                            {product?.sizes.map(item => (
                                <li 
                                    key={item} 
                                    className={`product__size ${item === size ? 'product__size_active' : ''} `}
                                    onClick={() => setSize(item)}
                                >
                                        {item}
                                </li>
                            ))}
                        </ul>
                        <h5 className='product__colors-title'>Select color</h5>
                        <ul className='product__colors'>
                            {product?.colors.map(item => (
                                <li 
                                    style={{ backgroundColor: `${item}` }} 
                                    key={item} 
                                    className={`product__color ${item === color ? 'product__color_active' : ''} `}
                                    onClick={() => setColor(item)}
                                >
                                </li>
                            ))}
                        </ul>
                        <form className='product__addInCart'>
                            <input className='product__count' type="number"  min='1' defaultValue='1' />
                            <button type='submit' className='product__btn' onSubmit={(e) => (e.preventDefault())}>Add in cart</button>
                        </form>
                    </div>
                </div>
                <div className='connection'>
                    <h2 className='connection__title'>Connection product</h2>
                    <div className='connection__list'>
                        {data?.filter((item) => {
                             return item.category === product?.category && item.id !== product?.id
                            }).slice(0,3).map((item) => (
                            <Product 
                                product={item}
                                key={item.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails