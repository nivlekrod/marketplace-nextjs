import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";
import categoriaService from "../../../services/categoria.service";
import produtoService from "../../../services/produto.service";
import { useRouter } from "next/router";

export default function EditarProduto() {
  const [categoryList, setCategoryList] = useState([]);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    categoriaService.getCategorias().then((r) => setCategoryList(r));
    if (id) {
      produtoService.getProduto(id).then((r) => {
        setName(r.name);
        setPrice(r.price);
        setImage(r.image);
        setCategory(r.category);
      });
    }
  }, [id]);

  async function handleEditar(e) {
    e.preventDefault();
    const produto = await produtoService.updateProduto(
      {
        name,
        image,
        price,
        category,
      },
      id
    );
    if (produto.id) {
      alert("Produto editado com sucesso :D");
      router.push("/produtos");
    } else {
      alert("Falha ao editar produto, tente novamente :c");
    }
  }

  return (
    <Container className="p-2">
      <Card className="p-2">
        <Form onSubmit={handleEditar}>
          <h2>Editar Produto</h2>
          <Form.Group className="p-2">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome do produto"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="p-2">
            <Form.Label>Imagem</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o endereço da imagem"
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="p-2">
            <Form.Label>Preço</Form.Label>
            <Form.Control
              type="number"
              placeholder="Insira o preço do produto"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="p-2">
            <Form.Label>Categoria</Form.Label>
            <Form.Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Escolha uma categoria</option>
              {categoryList.map((e) => (
                <option key={e.id} value={e.name}>
                  {e.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="p-2 text-center">
            <Button type="submit">Editar</Button>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
}
