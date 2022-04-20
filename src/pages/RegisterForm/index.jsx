import Container from "../../components/Container";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

const RegisterForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email().required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Senha com menos de 6 caracteres."),
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
    api.post("/users", data).then((res) => console.log(res.data));

    reset();
  };

  console.log(errors);

  return (
    <Container>
      <h2>Fomrulário de cadastro</h2>
      <form onSubmit={handleSubmit(sendData)}>
        <input
          className={errors.name ? "error" : ""}
          placeholder="Nome"
          {...register("name")}
        />
        {<span>{errors.name && errors.name.message}</span>}
        <input placeholder="Email" type="email" {...register("email")} />
        <input placeholder="Senha" type="password" {...register("password")} />
        <input placeholder="Biografia" {...register("bio")} />
        <input
          placeholder="Contatos (Linkedin, telefone)"
          {...register("contact")}
        />
        <input placeholder="Módulo do Curso" {...register("course_module")} />
        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  );
};

export default RegisterForm;
