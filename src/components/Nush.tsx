import "./../styles/nushStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Product";

type NushProps = {
  content: string;
  contentDoi: number;
};

const Nush = ({ contentDoi, content }: NushProps) => {
  return (
    <div>
      <div>
        {content} + {contentDoi}
      </div>
      <Product
        image="https://images.squarespace-cdn.com/content/5b80290bee1759a50e3a86b3/1655234687083-VUGUOH34O8P0069XAIF2/flatback-underwater-doug-perrine.jpg?format=1500w&content-type=image%2Fjpeg"
        id={1}
        name="Doroftei"
        price={9999}
      />
    </div>
  );
};
export default Nush;
