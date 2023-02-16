import { ChangeEvent, FC, useEffect, useState } from 'react';
import { decrementProduct, incrementProduct, removeProduct, setCountProduct } from '../../features/cart/cartSlice';
import { useAppDispatch } from '../../hooks/useTypedSelector';
import { ReactComponent as CloseSVG } from '../../icons/Close.svg';
import { IOrderProduct } from '../../interfaces/interfaces';


interface CartItemProps{
    item: IOrderProduct
}

export const CartItem:FC<CartItemProps> = ({item}) => {

    const [count, setCount] = useState<string>('');

    const dispatch = useAppDispatch();

    const handleIncrement = (item:IOrderProduct) =>{
        dispatch(incrementProduct(item.id));
        setCount(item.count.toString())
    }
    const handleDecrement = (item:IOrderProduct) => {
        dispatch(decrementProduct(item.id));
        setCount(item.count.toString())
    }
    const handleChangeCount = (item:IOrderProduct, e:ChangeEvent<HTMLInputElement>)  => {
        setCount(e.target.value)
        dispatch(setCountProduct({...item, count: Number(count)} ))

    }

    useEffect(() =>{

    }, [count]);

    return (
        <div className='productsInCart__item'>
            <div className='productsInCart__product'>
                <span className='productsInCart__svg' onClick={() => dispatch(removeProduct(item.id))}><CloseSVG /></span>
                <div className='productsInCart__image'>
                    <img src={item.image} alt={item.title} />
                </div>
                <p className='productsInCart__title'>{item.title}</p>
            </div>
            <div className='productsInCart__detail'>
                <div className='productsInCart__color'>{item.color}</div>
                <p className='productsInCart__size'>{item.size}</p>
                <p className='productsInCart__price'>${item.price}</p>
                <div className='productsInCart__count'>
                    <button className='productsInCart__btn' onClick={() => handleDecrement(item)}>-</button>
                    <input 
                        className='productsInCart__input'
                        type='text'
                        value={item.count}
                        onChange={(e) => {
                            handleChangeCount(item, e);
                        }}
                    />
                    <button className='productsInCart__btn' onClick={() => 
                    handleIncrement(item)
                    }>+</button>
                </div>
                <p className='productsInCart__sum'>${item.price * item.count}</p>
            </div>
        </div>
    )
}
