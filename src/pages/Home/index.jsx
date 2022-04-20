import { Link, useHistory } from "react-router-dom";
import Container from "../../components/Container";

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      Página Inicial
      <Link to="/login">Ir para Login</Link>
      <Link to="/register">Ir para Cadastro</Link>
      <button onClick={() => history.push("/users")}>Ir para Users</button>
    </Container>
  );
};

export default Home;
