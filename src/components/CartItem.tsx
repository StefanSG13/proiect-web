import "./../styles/cartItemStyle.css";

type ShoppingCartItem = {
  id: number;
  image: string;
  title: string;
  price: number;
};

const CartItem = (product: ShoppingCartItem) => {
  return <div className="cart-item-container">{product.title}</div>;
};

export default CartItem;
