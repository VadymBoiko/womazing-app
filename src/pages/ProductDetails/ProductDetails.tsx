import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { addProduct } from '../../features/cart/cartSlice';
import { getProducts, getSingleProduct} from '../../features/products/productsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelector';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { Product } from '../../components/Product/Product';
import { IProduct } from '../../interfaces/interfaces';

const ProductDetails = () => {

    const dispatch = useAppDispatch();

    const [color, setColor] = useState<string>('');
    const [size, setSize] = useState<string >('');
    const [count, setCount] = useState<number>(1);
    const newId = Date.now();
    const  {id} = useParams();
    const {data, productSingle, loadingSingle , error} = useAppSelector(state => state.productsSlice);

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getSingleProduct(Number(id)))
    }, [dispatch, id]);

    useEffect(() =>{
        if(productSingle?.colors !== undefined && productSingle?.sizes !== undefined){
            setColor(productSingle?.colors[0]);
            setSize(productSingle?.sizes[0]);
        }
    }, [productSingle]);

    const addToCartHandler = (product:IProduct | null) =>{
        if(product !== null){
            dispatch(addProduct({
                ...product,
                id: newId,
                size: size,
                color: color,
                count: count,
            }))
        }
    }

    if (loadingSingle){
        <p>loading...</p>
    }
    if (error){
        <p>oh no this is error</p>
    }
    return (
        <section className='product-info'>
            <div className='container'>
                <h1 className='product__title'>{productSingle?.title}</h1>
                <Breadcrumbs />
                <div className='product'>
                    <div className='product__image'>
                        <img src={productSingle?.image} alt={productSingle?.title} />
                    </div>
                    <div className='product__details'>
                        <h4 className='product__price'>{`$${productSingle?.price}`}</h4>
                        <h5 className='product__size-title'>select size</h5>
                        <ul className='product__sizes'>
                            {productSingle?.sizes.map(item => ( 
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
                            {productSingle?.colors.map(item => (
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
                            <input 
                                className='product__count' 
                                type="number"  
                                min='1' 
                                defaultValue={count} 
                                onChange={(e) => setCount(Number(e.target.value))}
                            />
                            <button type='button' className='product__btn'  onClick={() => addToCartHandler(productSingle)}>Add in cart</button>
                        </form>
                    </div>
                </div>
                <div className='connection'>
                    <h2 className='connection__title'>Connection product</h2>
                    <div className='connection__list'>
                        {data?.filter((item) => {
                             return item.category === productSingle?.category && item.id !== productSingle?.id
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