import Container from "../../components/Container";
import { Link, useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Container>
      Login
      <Link to="/">Ir para Home</Link>
    </Container>
  );
};

export default Login;
