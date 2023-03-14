import * as yup from "yup";

export const PostSchema = yup
   .object({
      content: yup
         .string()
         .required("Conteudo Obrigatorio")
   })
   .required();
