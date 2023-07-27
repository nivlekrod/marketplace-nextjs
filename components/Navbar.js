import Link from "next/link";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useRouter } from "next/router";
import { useAuthContext } from "../context/auth.context";
import authService from "../services/auth.service";

export default function NavbarMarketplace() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useAuthContext();

  function handleLogout() {
    authService.logout();
    setIsAuthenticated(false);
    router.push("/login");
  }

  return (
    <>
      <Navbar expand="sm" className="border-bottom">
        <Container fluid>
          <Navbar.Brand>O MarketPlace</Navbar.Brand>
          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse id="nav" className="flex-grow-0">
            <Nav>
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/" passHref>
                <Nav.Link>Sobre</Nav.Link>
              </Link>
              <Link href="/" passHref>
                <Nav.Link>Ajuda</Nav.Link>
              </Link>
              {isAuthenticated ? (
                <Nav.Link onClick={handleLogout}>
                  Sair
                </Nav.Link>
              ) : (
                <Link href="/login" passHref>
                  <Nav.Link>Entrar</Nav.Link>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
