import Container from "../../components/Container";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

const Profile = () => {
  const [user, setUser] = useState({});

  //PEGANDO O DADO ENVIADO VIA URL NO COMPONENTE
  const { id } = useParams();

  useEffect(() => {
    //BUSCANDO DADOS NA API COM A INSTÂNCIA DO AXIOS
    api.get(`/users/${id}`).then((res) => {
      setUser(res.data);
    });

    // MESMA FUNCIONALIDADE ACIMA MAS UTILIZANDO O FETCH
    // fetch(`http://kenziehub.herokuapp.com/users/${id}`)
    //   .then((res) => res.json())
    //   .then((res) => setUser(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      Perfil do usuário
      <p>{user.name}</p>
      <p>{user.email}</p>
      <Link to="/users">Ir para Página de usuários</Link>
    </Container>
  );
};

export default Profile;
