import React, { useEffect, useState } from "react";
import "./../styles/shoppingCartPageStyle.css"

type ShoppingCartItem = {
    id: number;
    image: string;
    title: string;
    price: string;
}

const ShoppingCartPage = () => {
    const [products, setProducts] = useState<ShoppingCartItem[]>([]);

    return (
        <div className="cart-container d-flex">
            <div className="items-container">

            </div>
            <div className="grand-total"></div>
        </div>
    );
};

export default ShoppingCartPage;