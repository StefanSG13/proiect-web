import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./../styles/productStyle.css";

type ProductProp = {
  title: string;
  price: number;
  image: string;
  id: number;
};

const Product = ({ title, price, image, id }: ProductProp) => {
  return (
    <div className="product-container">
      <div className="image-container">
        <img className="product-image" src={image} alt={title} />
      </div>
      <div className="product-title">{title}</div>
      <div className="price-container">
        <div className="price">{price} LEI</div>
        <a href={`https://localhost:5173/produse/${id}`}>
          <Button className="product-button" variant="primary">
            <FontAwesomeIcon icon={faCartShopping} />
          </Button>
        </a>
        {""}
      </div>
    </div>
  );
};

export default Product;
