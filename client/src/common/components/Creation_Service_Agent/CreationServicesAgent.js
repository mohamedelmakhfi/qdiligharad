import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import CustomiseService from "./CustomiseService";
import CreeService from "./CreeService";

export default function CreationServicesAgent() {
  return (
    <Tabs defaultValue={0}>
      <TabsList>
        <Tab value={0}>Personnaliser un service</Tab>
        <Tab value={1}>Cree un service</Tab>
      </TabsList>
      <TabPanel value={0}><CustomiseService /></TabPanel>
      <TabPanel value={1}><CreeService /></TabPanel>
    </Tabs>
  );
}

const darkBlue = "#111B47";
const gold = "#D69500";

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${gold};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${darkBlue};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  height: auto;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  border : 1px solid ${darkBlue};
  border-radius: 12px;
`;

const TabsList = styled(BaseTabsList)`
  width: 700px;
  background-color: ${darkBlue};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
`;
