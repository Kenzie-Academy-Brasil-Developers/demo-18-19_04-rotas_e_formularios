import Container from "../../components/Container";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://kenziehub.herokuapp.com/users/", { method: "get" })
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }, []);
  return (
    <Container>
      Lista de usuários
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
      <Link to="/">Ir para Home</Link>
    </Container>
  );
};

export default Users;
