import Carousel from "react-bootstrap/Carousel";
import "./../styles/slideShowStyle.css";

type SlideShowProp = {
  image1: string;
  image2: string;
  image3: string;
};

const SlideShow = ({ image1, image2, image3 }: SlideShowProp) => {
  return (
    <div className="slide-show">
      <Carousel className="carousel" variant="dark">
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 carousel-image"
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="carousel-image d-block w-100"
            src={image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100 carousel-image"
            src={image3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default SlideShow;
