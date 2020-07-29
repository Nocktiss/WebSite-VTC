import * as Yup from "yup";
import { parse } from "date-fns";

const ContactFormSchema = {
  email: Yup.string().required("⚠ Email requis").email("⚠ Mail Invalide"),
  name: Yup.string().required("⚠ Nom requis"),
  mobileNumber: Yup.number()
    .required("⚠ Numéro de téléphone requis")
    .integer("⚠ Le numéro de téléphone ne doit comporter que des chiffres")
    .min(10, "⚠ 10 numéros demandé")
    .nullable()
    .transform((value, originalValue) =>
      originalValue.trim() === "" ? null : value
    ),
  hour: Yup.string().required("Heure requise"),
  startDeparture: Yup.string().required("⚠ Adresse de départ requis"),
  endDeparture: Yup.string().required("⚠ Adresse de départ requis"),
  calendar: Yup.string().required("Date is required"),
  monthCalendar: Yup.string().required("Date is required"),
  request: Yup.string().min(1, "⚠ Demande Requis"),
};

async function DateValidation(value, params) {
  const { minDate, maxDate } = params;
  const parsedDate = parse(value, "dd/MM/yyyy", new Date());
  return Yup.date()
    .typeError("Date Invalide")
    .validate(parsedDate)
    .then()
    .catch((err) => {
      return err.message;
    });
}

export default {
  yupValidations: ContactFormSchema,
  customValidations: {
    calendar: DateValidation,
  },
};
