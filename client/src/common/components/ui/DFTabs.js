import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import DFPaperCustomized from "./DFPaperCustomized";

const DFTabs = (props) => {
  const {
    children,
    tabs,
    styled,
    defaultKey = 1,
    actions,
    ...otherprops
  } = props;
  const isOpen = true;
  const [value, setValue] = React.useState(0);
  const [tabWidth, setTabWidth] = React.useState(175);
  const [tabLeft, setTabLeft] = React.useState(0);
  const tabRef = React.useRef(null);

  React.useEffect(() => {
    if (tabRef.current) {
      let width = tabRef.current.offsetWidth;
      let left = tabRef.current.getBoundingClientRect().left;
      setTabWidth(width);
      if (isOpen) {
        left = left - 240;
      }
      setTabLeft(left - 50);
    }
  }, [value]);

  React.useEffect(() => {
    setValue(defaultKey - 1);
  }, [defaultKey]);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", color: "red" }}>
        {/*<Box sx={{position: 'relative', left: '90%', top: '40px'}}>
        <Button variant="contained" color="primary">Button 2</Button></Box>*/}
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{ style: { display: styled && "none" } }}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={tab.key}
              label={tab.label}
              ref={value === index ? tabRef : null}
              {...a11yProps(index)}
              sx={
                styled && {
                  border: `1px solid ${
                    value === index ? "#cdcdcd" : "#f1f1f1"
                  }`,
                  backgroundColor: value === index && "#f1f1f1",
                  padding: "10px",
                  marginLeft: index > 0 ? "5px" : "30px",
                  borderBottom: value === index ? "none" : "1px solid #f1f1f1",
                  borderBottomRightRadius: value === index ? "0px" : "10px",
                  borderBottomLeftRadius: value === index ? "0px" : "10px",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                }
              }
            />
          ))}
          {actions && <ButtonInTabs actions={actions} />}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <>
          {value === index && (
            <DFPaperCustomized
              titleHidden={styled}
              titleStyle={{
                width: `${tabWidth}px`,
                left: `${tabLeft}px`,
              }}
            >
              {tab.content}
            </DFPaperCustomized>
          )}
        </>
      ))}
    </>
  );
};

const ButtonInTabs = ({ className, onClick, actions }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "90%",
        top: "12px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      {actions}
    </Box>
  );
};

export default DFTabs;
