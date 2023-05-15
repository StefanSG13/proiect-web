import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import "./../styles/singleProductPageStyle.css";
import NavBar from "../commonComponents/NavBar";
import Footer from "../commonComponents/Footer";

type ProductDetailsProp = {
  title: string;
  price: number;
  image: string;
  id: number;
  author: string;
  description: string;
  publisher: string;
};

const SingleProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDetailsProp>();

  useEffect(() => {
    axios
      .get("https://localhost:44307/api/Book/get?id=" + id)
      .then((response: AxiosResponse) => {
        console.log(response);
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

  console.log(product);

  return (
    <div>
      <NavBar />
      <h1 className="product-title">{product?.title}</h1>
      <div className="product-section d-flex">
        <div className="image-container">
          <img
            className="product-image"
            src={product?.image}
            alt={product?.title}
          />
        </div>
        <div className="description-container">{product?.description}</div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProductPage;
