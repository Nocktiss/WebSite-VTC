import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";

// Custom components
import TextInput from "../../lib/Styled/Form/TextInput";
import DatePicker from "../../lib/Styled/Form/DatePicker";
import Button from "../../lib/Styled/Button";
import SelectInput from "../../lib/Styled/Form/SelectInput";
import ResponsiveContainerGrid from "../../lib/Styled/Responsive/ResponsiveContainerGrid";
import schema from "../../schemas/ContactFormSchema";
import { TextareaAutosize } from "@material-ui/core";

const styles = {
  gridCenter: {
    display: "flex",
    justifyContent: "center",
  },
};

const request = [
  {
    label: "Reservation",
  },
  {
    label: "Devis",
  },
  {
    label: "Informations",
  },
  {
    label: "Contact",
  },
];

const ContactForm = () => {
  const { t } = useTranslation();
  const { register, errors, handleSubmit, clearError } = useForm({
    mode: "onBlur",
  });

  const properties = {
    register,
    errors,
    clearError,
    schema,
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.tron.log(data);
  };

  return (
    <div
      style={{
        display: "block",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <p
        style={{
          // display: "flex",
          paddingTop: "80px",
          marginBottom: "100px",
          textAlign: "center",
          fontSize: "3.5em",
        }}
      >
        {t("form.contact_reservation")}
      </p>
      <ResponsiveContainerGrid>
        <Grid style={styles.gridCenter} container xs={12} spacing={6}>
          <Grid item xs={5}>
            <TextInput properties={properties} field="name" label="Nom" />
          </Grid>
          <Grid item xs={5}>
            <TextInput properties={properties} field="email" label="Email" />
          </Grid>
          <Grid item xs={5} spacing={6}>
            <TextInput
              properties={properties}
              field="mobileNumber"
              label={t("form.phone_number")}
              type="number"
            />
          </Grid>
          <Grid item xs={5} spacing={6}>
            <SelectInput
              properties={properties}
              field="startDeparture"
              label={t("form.request")}
              options={request}
            />
          </Grid>
          <Grid item xs={5} spacing={6}>
            <TextInput
              properties={properties}
              field="endDeparture"
              label="début"
              options={request}
            />
          </Grid>
          <Grid item xs={5} spacing={6}>
            <TextInput
              properties={properties}
              field="request"
              label="fin"
              options={request}
            />
          </Grid>
          <Grid item xs={4} spacing={6}>
            <DatePicker
              properties={properties}
              field="calendar"
              label={t("form.calendar")}
              defaultValue="2020-01-01T00:00:00-04:00"
              params={{
                format: "dd/MM/yyyy",
                minDate: "2020-01-01T00:00:00-04:00",
                maxDate: "2020-01-01T00:00:00-04:00",
              }}
            />
          </Grid>
          <Grid item xs={4} spacing={6}>
            <TextInput
              properties={properties}
              field="hour"
              label="Heure"
              options={request}
            />
          </Grid>
        </Grid>
        <p
          style={{
            paddingTop: "20px",
            display: "flex",
            justifyContent: "start",
            fontSize: "1em",
          }}
        >
          {t("form.contact_reservation")}
        </p>
        <Grid style={styles.gridCenter} container xs={12} spacing={6}>
          <Grid item sm={10}>
            <TextInput
              properties={properties}
              multiline
              label="Information complémentaire"
              InputProps={{
                inputComponent: TextareaAutosize,
                rows: 8,
              }}
            />
          </Grid>
        </Grid>
        {/* <Button handleSubmit={handleSubmit(onSubmit)} label="submit">
              {t("send")}
            </Button> */}
      </ResponsiveContainerGrid>
    </div>
  );
};

export default ContactForm;
