import * as yup from "yup";

export const Registerschema = yup
  .object({
    name: yup.string().required("Digite seu nome"),
    email: yup
      .string()
      .required("O Email é obrigatório")
      .email("Email inválido"),
    password: yup
      .string()
      .required("Digite uma senha")
      .min(6, "A senha precisa ter pelo menos 6 caracteres"),
   profile_img: yup.string().optional(),
   age: yup.string().required("Informe sua idade"),
   city: yup.string().required("Informe a sua cidade"),
   bio: yup.string().required("Diga um pouco sobre você").min(20, "Use pelo menos 20 caracteres")

  })
  .required();