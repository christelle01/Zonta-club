import React, { createContext, useContext, useState } from "react";
import { Alert, Stack, Snackbar, Button, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import * as Yup from "yup";
import TabButton from "../common/custom/tab/TabButton";
import TabPanel from "../common/custom/tab/TabPanel";
import PersonalInfo from "./PersonalInfo";
import TravelInfo from "./TravelInfo";
import HostingInfo from "./HostingInfo";
import Summary from "./Summary";
import { Form, FormikProvider, useFormik } from "formik";
import { saveForm } from "../../utils/api/requests";

const initialState = {
  personal: {
    nom: "",
    prenom: "",
    pays: "",
    telephone: "",
    email: "",
    poste: "",
    zone: "",
    division: "",
    disposition: "",
  },
  travel: {
    title: "",
    arrivalDate: null,
    returnDate: null,
    entryPoint: "",
    leaveAtLome: false,
  },
  hosting: {
    hotel: { cat: "", noms: "" },
    entryDate: null,
    checkOut: null,
    personlResidence: false,
  },
};

const SignUpFormProvider = createContext({
  values: initialState,
  saving: false,
  errors: initialState,
  touched: initialState,
  onChange: (field, value) => {},
});

const validationschema = Yup.object().shape({
  personal: Yup.object().shape({
    nom: Yup.string().required("Le nom est obligatoire"),
    prenom: Yup.string().required("Le prenom est obligatoire"),
    pays: Yup.string().required("Le pays est obligatoire"),
    telephone: Yup.string().required("Le téléphone est obligatoire"),
    email: Yup.string()
      .email("L'email est invalide")
      .required("L'email est obligatoire"),
    poste: Yup.string().required("Le poste est obligatoire"),
    zone: Yup.string().required("La zone est obligatoire"),
    division: Yup.string().required("La division est obligatoire"),
    disposition: Yup.string().required("La disposition est obligatoire"),
  }),

  travel: Yup.object().shape({
    title: Yup.string(),
    arrivalDate: Yup.date().nullable(),
    returnDate: Yup.date().nullable(),
    entryPoint: Yup.string(),
    leaveAtLome: Yup.boolean(),
  }),

  hosting: Yup.object().shape({
    hotel: Yup.object().shape({
      cat: Yup.string(),
      noms: Yup.string(),
    }),
    entryDate: Yup.date().nullable(),
    checkOut: Yup.date().nullable(),
    personlResidence: Yup.boolean(),
  }),
});

export const useSignUpFormContext = () => useContext(SignUpFormProvider);

export default function Inscription() {
  const [currentTab, setCurrentTab] = useState(0);
  const [saving, setSaving] = useState(false);

  const [responseMessage, setResponseMessage] = useState({message:null, type:null});

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: initialState,
    enableReinitialize: false,
    validationSchema: validationschema,
    onSubmit: (values) => {
      setSaving(true);
      saveForm({
        values: values,
        callback: (id) => {
          setSaving(false);
          setResponseMessage({message:"Votre inscription a été enregistré", type:"success"});
          handleOpen();
          console.log({ id });
        },
        onError: () => {
          setSaving(false);
          setResponseMessage({message:"Votre inscription a échoué", type:"error"});
        },
      });
    },
  });

  const scrollToElement = () => {
    const element = window.document.getElementById("signup-form-header");
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNext = () => {
    setCurrentTab((prev) => (prev === 3 ? 0 : prev + 1));
    scrollToElement();
  };

  const handlePrev = () => {
    setCurrentTab((prev) => (prev === 0 ? 0 : prev - 1));
    scrollToElement();
  };

  const { handleSubmit, setFieldValue, values, errors, touched } = formik;

  const onChange = (field, value) => {
    setFieldValue(field, value);
  };

  return (
    <SignUpFormProvider.Provider
      value={{ values, onChange, saving, errors, touched }}
    >
      <Stack width={1} justifyContent="center" alignItems="center" py={10}>
        <Stack
          width={1}
          direction="row"
          spacing={3}
          justifyContent="center"
          id="signup-form-header"
        >
          <TabButton
            title="Information Personnelle"
            value={0}
            selected={currentTab === 0}
            onClick={setCurrentTab}
          />
          <TabButton
            title="Information de voyage"
            value={1}
            selected={currentTab === 1}
            onClick={setCurrentTab}
          />
          <TabButton
            title="Information d'hébergement"
            value={2}
            selected={currentTab === 2}
            onClick={setCurrentTab}
          />
          <TabButton
            title="Résumé"
            value={3}
            selected={currentTab === 3}
            onClick={setCurrentTab}
          />
        </Stack>

        <Stack width={{ xs: 1, md: 0.7 }}>
          {!!Object.entries(errors)?.length && (
            <Stack width={1} direction="row" justifyContent="center">
              <Alert severity="error">Certains champs sont incomplet</Alert>
            </Stack>
          )}
          <FormikProvider value={formik}>
            <Form
              autoComplete="off"
              noValidate
              autoCapitalize="on"
              onSubmit={handleSubmit}
            >
              {currentTab === 0 && (
                <TabPanel>
                  <PersonalInfo handleNext={handleNext} />
                </TabPanel>
              )}
              {currentTab === 1 && (
                <TabPanel>
                  <TravelInfo handleNext={handleNext} handlePrev={handlePrev} />
                </TabPanel>
              )}
              {currentTab === 2 && (
                <TabPanel>
                  <HostingInfo
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                  />
                </TabPanel>
              )}
              {currentTab === 3 && (
                <TabPanel>
                  <Summary handleNext={handleNext} handlePrev={handlePrev} />
                </TabPanel>
              )}
            </Form>
          </FormikProvider>
        </Stack>
        <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
      >
        <Alert
        severity={responseMessage.type}
        autoHideDuration={6000}
        action={
          <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
        }
        >
          {responseMessage.message}
        </Alert>
      </Snackbar>
      </Stack>
    </SignUpFormProvider.Provider>
  );
}
