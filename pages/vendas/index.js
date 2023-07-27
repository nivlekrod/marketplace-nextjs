import Link from "next/link";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Pagination,
  Row,
  Table,
} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import ItemTable from "../../components/ItemTable";

export default function Vendas() {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      order: `#${i+1}`,
      client: `Fulano ${i}`,
      price: `R$ ${i},99`,
      createdAt: "xx/xx/xxxx",
      id: i,
    });
  }

  const header = [
    "PEDIDO",
    "CLIENTE",
    "TOTAL",
    "CRIADO EM",
    "AÇÕES"
  ];

  return (
    <>
      <Card className="m-md-5 p-md-5">
        <h2 className="text-center">Vendas</h2>
        <Row className="pt-2">
          <Col md={12}>
            <InputGroup>
              <InputGroup.Text>
                <Icon.Search />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Pesquisar..." />
            </InputGroup>
          </Col>
        </Row>
        <ItemTable data={data} header={header} detailLink="vendas" />
      </Card>
    </>
  );
}
