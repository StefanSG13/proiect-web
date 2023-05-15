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
    <div className="css-is-cool">
      <div className="product-container">
        <img className="product-image" src={image} alt={title} />
        <div className="product-title">{title}</div>
        <div className="price-container">
          <div className="price">{price.toLocaleString()} LEI</div>
          <a href={`http://localhost:5173/produse/${id}`}>
            <Button className="product-button" variant="primary">
              <FontAwesomeIcon icon={faCartShopping} />
            </Button>
          </a>
          {""}
        </div>
      </div>
    </div>
  );
};

export default Product;
