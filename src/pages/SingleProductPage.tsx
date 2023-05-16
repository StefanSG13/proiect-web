import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./../styles/singleProductPageStyle.css";

type CartItem = {
  id: number;
  quantity: number;
}

type ProductDetailsProp = {
  title: string;
  price: number;
  image: string;
  id: number;
  author: string;
  description: string;
  publisher: string;
};

function getCart() {
  const cartString = localStorage.getItem('cart');
  if (cartString !== null) {
    return JSON.parse(cartString);
  } else {
    return [];
  }
}

function addToCart(productId: number) {
  let cart = getCart();
  const existingCartItem = cart.find((item: CartItem) => item.id == productId)

  if (existingCartItem) {
    existingCartItem.quantity++;
  }
  else {
    cart.push({ id: productId, quantity: 1 });
  }

  console.log(cart);
  // Save the updated cart back to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
}

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDetailsProp>();

  useEffect(() => {
    axios
      .get(`https://localhost:44307/api/Book/get?id=${id}`)
      .then((response: AxiosResponse) => {
        const { title, price, image, id, author, description, publisher } =
          response.data;
        const formattedData: ProductDetailsProp = {
          title,
          price,
          image,
          id,
          author,
          description,
          publisher,
        };
        setProduct(formattedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="d-flex">
        <h1 className="single-product-title">{product?.title}</h1>
        <div className="single-product-author">
          , {product?.author}
        </div>
      </div>
      <br />
      <div className="single-product-section d-flex">
        <div className="single-product-image-container w-25">
          <img
            className="single-product-image"
            src={product?.image}
            alt={product?.title}
          />
        </div>
        <div className="single-product-description-container w-50">{product?.description}</div>
        <div className="single-product-price-container w-25">
          <div className="single-product-price">{product?.price} LEI</div>
          <Button variant="warning" onClick={() => addToCart(product.id)}>Adauga in cos <FontAwesomeIcon icon={faCartShopping} /></Button>{' '}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
