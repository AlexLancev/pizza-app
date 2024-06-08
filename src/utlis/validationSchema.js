import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Имя обязательно")
    .min(2, "Имя должно содержать минимум 2 символа")
    .matches(/^[a-zA-Zа-яА-ЯёЁ]+$/, "Имя не должно содержать цифр или специальных символов"),
  phone: yup
    .string()
    .matches(/^\+7 \(\d{3}\) \d{3}-\d{4}$/, "Номер телефона должен быть в формате +7 (999) 999-9999")
    .required("Телефон обязателен"),
});

export default schema;
