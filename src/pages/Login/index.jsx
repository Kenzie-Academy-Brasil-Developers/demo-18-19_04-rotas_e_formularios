import Container from "../../components/Container";
import { Link, useLocation } from "react-router-dom";

const Login = ({ user }) => {
  const location = useLocation();
  console.log(location);
  return (
    <Container>
      Login Agora faça seu login - {user.name}
      <Link to="/">Ir para Home</Link>
    </Container>
  );
};

export default Login;
