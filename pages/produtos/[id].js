import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import ProductImg from "../../public/imgs/produto.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import produtoService from "../../services/produto.service";

export default function DetalhesProduto() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(undefined);

  useEffect(() => {
    produtoService.getProduto(id).then((r) => setData(r));
  }, []);

  return (
    <>
      <Container className="p-5">
        <Card className="p-2">
          {data ? (
            <div>
              <h2>Detalhes do Produto</h2>
              <strong>Nome</strong>
              <p>{data.name}</p>
              <strong>Categoria</strong>
              <p>{data.category}</p>
              <strong>Preço</strong>
              <p>
                {data.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <strong>Criado em</strong>
              <p>{data.createdAt}</p>
              <Col>
                <Image src={data.image} height={300} width={300} />
              </Col>
            </div>
          ) : (
            "Produto não encontrado"
          )}
        </Card>
      </Container>
    </>
  );
}
