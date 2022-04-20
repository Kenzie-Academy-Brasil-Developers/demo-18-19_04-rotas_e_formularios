import Container from "../../components/Container";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const RegisterForm = ({ setUser }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email().required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Senha com menos de 6 caracteres."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não conferem")
      .required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const sendData = (data) => {
    delete data.confirmPassword;

    api
      .post("/users", data)
      .then((res) => {
        toast.success("Parabéns, Usuário cadastrado");
        setUser(res.data);
        history.push("/login", { data });
      })
      .catch((err) => toast.error("Algo deu errado"));

    reset();
  };

  return (
    <Container>
      <h2>Formulário de cadastro</h2>
      <form onSubmit={handleSubmit(sendData)}>
        <input
          className={errors.name ? "error" : ""}
          placeholder="Nome"
          {...register("name")}
        />
        {<span>{errors.name?.message}</span>}
        <input placeholder="Email" type="email" {...register("email")} />
        {<span>{errors.email?.message}</span>}
        <input placeholder="Senha" {...register("password")} />
        {<span>{errors.password?.message}</span>}

        <input
          type="password"
          placeholder="Confirmação de Senha"
          {...register("confirmPassword")}
        />
        {<span>{errors.confirmPassword?.message}</span>}

        <input placeholder="Biografia" {...register("bio")} />
        {<span>{errors.bio?.message}</span>}
        <input
          placeholder="Contatos (Linkedin, telefone)"
          {...register("contact")}
        />
        {<span>{errors.contact?.message}</span>}

        <select {...register("course_module")}>
          <option value="M1">Módulo 1</option>
          <option value="M2">Módulo 2</option>
          <option value="M3">Módulo 3</option>
          <option value="M4">Módulo 4</option>
        </select>
        {<span>{errors.course_module?.message}</span>}

        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  );
};

export default RegisterForm;
