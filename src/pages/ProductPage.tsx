import Footer from "../commonComponents/Footer";
import NavBar from "../commonComponents/NavBar";
import React, { useEffect, useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import Form from "react-bootstrap/Form";
import axios, { AxiosResponse } from "axios";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import "./../styles/productPageStyle.css";
import Product from "../components/Product";

type ProductProp = {
  title: string;
  price: number;
  image: string;
  id: number;
};

const ProductPage = () => {
  const [sliderValue, setSliderValue] = useState<string>("50");

  const [products, setProducts] = useState<ProductProp[]>([]);

  useEffect(() => {
    axios
      .get("https://localhost:44307/api/Book/get-all")
      .then((response: AxiosResponse) => {
        console.log(response.data);
        const formattedData = response.data.map((item: any) => {
          return {
            title: item.title,
            price: item.price,
            image: item.image,
            id: item.id,
          };
        });
        setProducts(formattedData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(products);

  return (
    <div>
      <NavBar />
      <div className="d-flex component-container">
        <div className="filter-section">
          <div className="filter-container">
            <h4 className="filter-header mt-2">Preț</h4>
            <RangeSlider value={sliderValue} min={0} max={100} step={1} />
            <div className="hr"></div>
            <h4 className="filter-header">Categorie</h4>
            <Form>
              {["Romance", "Aventura", "Politiste", "Sci-Fi"].map((type) => (
                <div key={`default-${type}`} className="filter-option">
                  <Form.Check
                    type="checkbox"
                    onChange={(value) => setSliderValue(value.target.value)}
                    id={`default-checkbox`}
                    label={`${type}`}
                  />
                </div>
              ))}
            </Form>
            <div className="hr"></div>
            <h4 className="filter-header">Ordonează după:</h4>
            {[
              "Cele mai noi",
              "Cele mai vechi",
              "Cele mai populare",
              "Cele mai vandute",
            ].map((type) => (
              <div key={`default-${type}`} className="filter-option">
                <Form.Check
                  type="radio"
                  name="group1"
                  id={`default-radio`}
                  label={`${type}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="products-section d-flex gap-30">
          {products.map((ProductProp) => (
            <Product
              id={ProductProp.id}
              title={ProductProp.title}
              price={ProductProp.price}
              image={ProductProp.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
