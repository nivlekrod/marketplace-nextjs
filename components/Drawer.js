import { useRouter } from "next/router";
import Link from "next/link";

export default function Drawer() {
  function isActive(btnRoute) {
    const router = useRouter();
    let className = "text-start btn btn-light border m-1";
    return router.pathname === btnRoute ? className + " active" : className;
  }

  return (
    <div className="col-xs-1 col-md-2 border-end d-flex flex-column">
      <Link href="/categorias">
        <button className={isActive("/categorias")}>Categorias</button>
      </Link>
      <Link href="/produtos">
        <button className={isActive("/produtos")}>Produtos</button>
      </Link>
      <Link href="/vendas">
        <button className={isActive("/vendas")}>Minhas Vendas</button>
      </Link>
      <Link href="/meus-dados">
        <button className={isActive("/meus-dados")}>Meus Dados</button>
      </Link>
    </div>
  );
}
