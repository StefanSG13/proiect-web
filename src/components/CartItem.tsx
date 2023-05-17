import Button from 'react-bootstrap/Button';
import "./../styles/cartItemStyle.css";

type ShoppingCartItem = {
    id: number;
    image: string;
    title: string;
    price: number;
    quantity: number;
};

const CartItem = (product: ShoppingCartItem) => {
    return <div className="cart-item-container d-flex">
        <Button variant="warning" className='cart-item-quant-button'>{'<'}</Button>
        <div className="cart-item-quantity">{product.quantity}</div>
        <Button variant="warning" className='cart-item-quant-button'>{'>'}</Button>
        <div className='cart-item-image-container'>
            <img className="cart-item-image" src={product.image} alt={product.title} />
        </div>
        <div className='cart-item-title'>{product.title}</div>
        <div className='cart-item-price'>{product.price} LEI</div>
    </div>;
};

export default CartItem;
