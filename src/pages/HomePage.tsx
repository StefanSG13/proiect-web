import Footer from "../commonComponents/Footer";
import NavBar from "../commonComponents/NavBar";
import SlideShow from "../commonComponents/SlideShow";
import Product from "../components/Product";
import "./../styles/homePageStyle.css";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <br></br>
      <SlideShow
        image1="https://i.ytimg.com/vi/gTO6kBNbAWI/maxresdefault.jpg"
        image2="https://i.ytimg.com/vi/gTO6kBNbAWI/maxresdefault.jpg"
        image3="https://i.ytimg.com/vi/gTO6kBNbAWI/maxresdefault.jpg"
      />
      <br></br>
      <br></br>
      <h1 className="section-header">CELE MAI NOI CĂRȚI</h1>
      <div className="products-container">
        <Product
          id={1}
          title="Doroftei"
          image="https://images.squarespace-cdn.com/content/5b80290bee1759a50e3a86b3/1655234687083-VUGUOH34O8P0069XAIF2/flatback-underwater-doug-perrine.jpg?format=1500w&content-type=image%2Fjpeg"
          price={6969}
        />
        <Product
          id={1}
          title="Doroftei"
          image="https://images.squarespace-cdn.com/content/5b80290bee1759a50e3a86b3/1655234687083-VUGUOH34O8P0069XAIF2/flatback-underwater-doug-perrine.jpg?format=1500w&content-type=image%2Fjpeg"
          price={6969}
        />
        <Product
          id={1}
          title="Doroftei"
          image="https://images.squarespace-cdn.com/content/5b80290bee1759a50e3a86b3/1655234687083-VUGUOH34O8P0069XAIF2/flatback-underwater-doug-perrine.jpg?format=1500w&content-type=image%2Fjpeg"
          price={6969}
        />
        <Product
          id={1}
          title="Doroftei"
          image="https://images.squarespace-cdn.com/content/5b80290bee1759a50e3a86b3/1655234687083-VUGUOH34O8P0069XAIF2/flatback-underwater-doug-perrine.jpg?format=1500w&content-type=image%2Fjpeg"
          price={6969}
        />
      </div>
      <br></br>
      <br></br>
      <h1 className="section-header">RECOMANDĂRILE NOASTRE</h1>
      <div className="products-container">
        <Product
          id={1}
          title="Doroftei"
          image="https://images.squarespace-cdn.com/content/5b80290bee1759a50e3a86b3/1655234687083-VUGUOH34O8P0069XAIF2/flatback-underwater-doug-perrine.jpg?format=1500w&content-type=image%2Fjpeg"
          price={6969}
        />
        <Product
          id={1}
          title="Doroftei"
          image="https://images.squarespace-cdn.com/content/5b80290bee1759a50e3a86b3/1655234687083-VUGUOH34O8P0069XAIF2/flatback-underwater-doug-perrine.jpg?format=1500w&content-type=image%2Fjpeg"
          price={6969}
        />
        <Product
          id={1}
          title="Doroftei"
          image="https://images.squarespace-cdn.com/content/5b80290bee1759a50e3a86b3/1655234687083-VUGUOH34O8P0069XAIF2/flatback-underwater-doug-perrine.jpg?format=1500w&content-type=image%2Fjpeg"
          price={6969}
        />
        <Product
          id={1}
          title="Doroftei"
          image="https://images.squarespace-cdn.com/content/5b80290bee1759a50e3a86b3/1655234687083-VUGUOH34O8P0069XAIF2/flatback-underwater-doug-perrine.jpg?format=1500w&content-type=image%2Fjpeg"
          price={6969}
        />
      </div>
    </div>
  );
};

export default HomePage;
