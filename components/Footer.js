import { Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

export default function Footer() {
  return (
    <>
      <footer className="border-top footer text-white bg-dark p-3">
        <div className="container">
          <div className="text-center p-3">Nossas Redes:</div>
          <div className="text-center">
            <Icon.Facebook className="m-2" size={36} />
            <Icon.Twitter className="m-2" size={36} />
            <Icon.Instagram className="m-2" size={36} />
          </div>
          <Row className="justify-content-center p-3">
            &copy; 2022 - ECommerce
          </Row>
        </div>
      </footer>
    </>
  );
}
