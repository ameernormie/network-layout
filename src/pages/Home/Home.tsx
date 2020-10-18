import React, { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
// import { Navbar } from "../../components"
import "./home.scss";
import Accordion from "@material-ui/core/Accordion/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

export default function Home() {
  const [value, setValue] = useState(0);

  return (
    <main className="home-container">
      <Navbar value={value} setValue={setValue} />

      <div className="home-content-wrapper">
        <div className="tabs-content-container">
          <TabPanel value={value} index={0}>
            <img src="/images/bubble-visualization.png" />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </div>

        <div className="right-side-panel">
          <TabPanel value={value} index={0}>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                Accordion 1
              </AccordionSummary>
              <AccordionDetails>
                  <img src="/images/barchart-sample.jpg" style={{width: "100%"}}/>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                Accordion 1
              </AccordionSummary>
              <AccordionDetails>
                  <img src="/images/barchart-sample.jpg" style={{width: "100%"}}/>
              </AccordionDetails>
            </Accordion>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </div>
      </div>
    </main>
  );
}
