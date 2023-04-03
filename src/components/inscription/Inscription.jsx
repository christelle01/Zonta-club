import React, { useState } from "react";
import { Stack } from "@mui/material";
import TabButton from "../common/custom/tab/TabButton";
import TabPanel from "../common/custom/tab/TabPanel";
import PersonalInfo from "./PersonalInfo";
import TravelInfo from "./TravelInfo";
import HostingInfo from "./HostingInfo";

export default function Inscription() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleNext = () => {
    setCurrentTab((prev) => (prev === 3 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentTab((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <Stack width={1} justifyContent="center" alignItems="center" p={2}>
      <Stack width={1} direction="row" spacing={3} justifyContent="center">
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

      {currentTab === 0 && (
        <TabPanel>
          {" "}
          <PersonalInfo handleNext={handleNext} />{" "}
        </TabPanel>
      )}
      {currentTab === 1 && (
        <TabPanel>
          {" "}
          <TravelInfo handleNext={handleNext} />{" "}
        </TabPanel>
      )}
      {currentTab === 2 && (
        <TabPanel>
          {" "}
          <HostingInfo handleNext={handleNext} />{" "}
        </TabPanel>
      )}
      {currentTab === 3 && <TabPanel> 04 </TabPanel>}
    </Stack>
  );
}
