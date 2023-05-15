import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../styles/footerStyle.css";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <div>
      <MDBFooter
        className="text-center  footer-container"
        color="white"
        bgColor="dark"
      >
        <MDBContainer className="p-4">
          <section className="mb-4">
            <p>Vă Multumim ca ne folosiți site-ul.</p>
          </section>

          <section className="d-flex">
            <a
              href="#!"
              className="position-absolute start-35 translate-middle-y text-white"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a
              href="#!"
              className="position-absolute start-45 translate-middle-y text-white"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="#!"
              className="position-absolute start-55 translate-middle-y text-white"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="#!"
              className="position-absolute start-50 translate-middle-y text-white"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright: SC Doroftei SRL
        </div>
      </MDBFooter>
    </div>
  );
};
export default Footer;
