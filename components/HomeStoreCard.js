import Image from "next/image";
import { Col } from "react-bootstrap";

export default function HomeStoreCard(props) {
  return (
    <>
      <Col className="m-2">
        <Image
          src={props.img}
          height="400px"
          style={{ borderRadius: "24px" }}
        />
        <h5>{props.name}</h5>
      </Col>
    </>
  );
}
