import React, { createContext, useContext, useState } from "react";
import { Stack } from "@mui/material";
import * as Yup from "yup";
import TabButton from "../common/custom/tab/TabButton";
import TabPanel from "../common/custom/tab/TabPanel";
import PersonalInfo from "./PersonalInfo";
import TravelInfo from "./TravelInfo";
import HostingInfo from "./HostingInfo";
import Summary from "./Summary";
import { Form, FormikProvider, useFormik } from "formik";

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
    hotelName: "",
    entryDate: null,
    checkOut: null,
    personlResidence: false,
  },
};

const validationschema = Yup.object().shape({
  personal: {
    nom: Yup.string().required("Le nom est obligatoire"),
  },
});

const SignUpFormProvider = createContext({
  values: initialState,
  validationschema: validationschema,
  onChange: (field, value) => {},
});

export const useSignUpFormContext = () => useContext(SignUpFormProvider);

export default function Inscription() {
  const [currentTab, setCurrentTab] = useState(0);

  const formik = useFormik({
    initialValues: initialState,
    enableReinitialize: false,
    onSubmit: (values) => {},
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

  const { handleSubmit, setFieldValue, values } = formik;

  const onChange = (field, value) => {
    setFieldValue(field, value);
  };

  return (
    <SignUpFormProvider.Provider value={{ values, onChange }}>
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
      </Stack>
    </SignUpFormProvider.Provider>
  );
}