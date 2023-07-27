import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import HomeStoreCard from "./HomeStoreCard";
import Loja1 from "../public/imgs/lojas/loja1.jpg";
import Loja2 from "../public/imgs/lojas/loja2.jpg";
import Loja3 from "../public/imgs/lojas/loja3.jpg";
import Loja4 from "../public/imgs/lojas/loja4.jpg";
import Loja5 from "../public/imgs/lojas/loja5.jpg";
import Loja6 from "../public/imgs/lojas/loja6.jpg";
import Loja7 from "../public/imgs/lojas/loja7.jpg";
import Loja8 from "../public/imgs/lojas/loja8.jpg";
import Loja9 from "../public/imgs/lojas/loja9.jpg";

export default function HomeStoreList() {
  let lojas = [];
  let lojasImg = [
    Loja1,
    Loja2,
    Loja3,
    Loja4,
    Loja5,
    Loja6,
    Loja7,
    Loja8,
    Loja9,
  ];

  for (let i = 0; i < lojasImg.length; i++) {
    lojas.push({
      id: i,
      name: `Minha Super Loja ${i}`,
      img: lojasImg[i],
    });
  }
  const [storesToShow, setStoresToShow] = useState([
    lojas[0],
    lojas[1],
    lojas[2],
  ]);
  const [disableRight, setDisableRight] = useState(false);
  const [disableLeft, setDisableLeft] = useState(true);

  function goRight() {
    const index = lojas.findIndex((e) => e.id === storesToShow[2].id);
    if (lojas.length - 1 !== index) {
      storesToShow.shift();
      storesToShow.push(lojas[index + 1]);
      setDisableLeft(false);
      setDisableRight(false);
    }
    setStoresToShow([...storesToShow]);
    if (lojas[lojas.length - 1].id === storesToShow[2].id) {
      setDisableRight(true);
    }
  }

  function goLeft() {
    const index = lojas.findIndex((e) => e.id === storesToShow[0].id);
    if (index !== 0) {
      storesToShow.pop();
      storesToShow.unshift(lojas[index - 1]);
      setDisableLeft(false);
      setDisableRight(false);
    }
    setStoresToShow([...storesToShow]);
    if (lojas[0].id === storesToShow[0].id) {
      setDisableLeft(true);
    }
  }

  return (
    <>
      <Row className="text-center align-items-center">
        <Col>
          <Icon.ArrowLeftCircleFill
            color={disableLeft ? "gray" : "black"}
            onClick={goLeft}
            size={96}
          />
        </Col>
        {storesToShow.map((e) => (
          <HomeStoreCard key={e.id} img={e.img} name={e.name} />
        ))}
        <Col>
          <Icon.ArrowRightCircleFill
            size={96}
            onClick={goRight}
            color={disableRight ? "gray" : "black"}
          />
        </Col>
      </Row>
    </>
  );
}
