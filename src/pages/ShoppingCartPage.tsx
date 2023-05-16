import React, { useEffect, useState } from "react";
import "./../styles/shoppingCartPageStyle.css";
import CartItem from "../components/CartItem";
import axios from "axios";

type ShoppingCartItem = {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
};

type localItem = {
  id: number;
  quantity: number;
  // add any additional properties here as needed
};

function useShoppingCartItemsFromLocalStorage(): ShoppingCartItem[] {
  const [products, setProducts] = useState<ShoppingCartItem[]>([]);

  useEffect(() => {
    const shoppingCartItemsString = localStorage.getItem("cart");
    if (shoppingCartItemsString) {
      const shoppingCartItems: ShoppingCartItem[] = JSON.parse(
        shoppingCartItemsString
      );
      const productIds = shoppingCartItems.map((item) => item.id);
      const params = new URLSearchParams();
      productIds.forEach((id) => params.append("ids", id.toString()));
      axios
        .get(`https://localhost:44307/api/Book/get-range?${params.toString()}`)
        .then((response) => {
          const products = response.data;
          const updatedShoppingCartItems = shoppingCartItems.map((item) => {
            const product = products.find(
              (p: ShoppingCartItem) => p.id === item.id
            );
            if (product) {
              return {
                ...item,
                ...product,
              };
            } else {
              return item;
            }
          });
          setProducts(updatedShoppingCartItems);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    }
  }, []);

  return products;
}

const ShoppingCartPage = () => {
  let products = useShoppingCartItemsFromLocalStorage();
  console.log(products);
  if (!products || products.length === 0) {
    products = [{ id: 3, quantity: 5, image: "5", price: 5, title: "555" }];
  }

  return (
    <div className="cart-container d-flex">
      <div className="items-container">
        <CartItem
          price={products[0].price}
          title={products[0].title}
          image={products[0].image}
          id={products[0].id}
        />
      </div>
      <div className="grand-total"></div>
    </div>
  );
};

export default ShoppingCartPage;
