import * as Yup from "yup";

export const SchemaValidation = Yup.object({
  email: Yup.string().email("Email inválido").required("Email Obrigátorio"),
  password: Yup.string()
    .required("Senha é obrigátoria")
    .min(8, "No minimo 8 Caracteres"),
}).required();
