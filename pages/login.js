import Link from "next/link";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState } from "react";
import authService from "../services/auth.service";
import { useAuthContext } from "../context/auth.context";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useAuthContext();

  if (isAuthenticated) {
    router.push("/categorias");
  }

  async function handleLogin(e) {
    e.preventDefault();
    // TODO: Lógica de login para o sistema
    /*
      1. Verificar os dados inseridos
      2. Enviar a requisição para o backend
      3. Esperar a resposta
        3.1. Se existir erro, alertar ao usuário
        3.2. Se a req. estiver ok, 
            salva o token e vai para proxima pagina
    */
    try {
      await authService.login({
        email,
        password,
      });
      setIsAuthenticated(true);
      router.push("/categorias");
    } catch (erro) {
      alert("Falha ao autenticar, por favor tente novamente");
    }
  }

  return (
    <>
      <Container className="p-5">
        <Card>
          <Form onSubmit={handleLogin}>
            <h1 className="text-center">Entrar na sua loja</h1>
            <Form.Group className="p-2">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Insira o seu e-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="p-2">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Insira a sua senha"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="p-2 text-center">
              <Button type="submit">Entrar no sistema</Button>
              <br />
              <Link href="/nova-conta">
                <a>Crie uma conta</a>
              </Link>
            </Form.Group>
          </Form>
        </Card>
      </Container>
    </>
  );
}
