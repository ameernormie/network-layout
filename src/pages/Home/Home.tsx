import React, { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
// import { Navbar } from "../../components"
import "./home.scss";
import Accordion from "@material-ui/core/Accordion/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CustomTable from "../../components/CustomTable/CustomTable";
import TabsWithTable from "../../components/TabsWithTable/TabsWithTable";
import { TabPanel } from "../../components/TabPanel/TabPanel";

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
            <img src="/images/map-sample.jpeg" />
          </TabPanel>

          <TabPanel value={value} index={2}>
            <TabsWithTable />
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
                <img
                  src="/images/barchart-sample.jpg"
                  style={{ width: "100%" }}
                />
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
                <img
                  src="/images/barchart-sample.jpg"
                  style={{ width: "100%" }}
                />
              </AccordionDetails>
            </Accordion>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                Accordion 1
              </AccordionSummary>
              <AccordionDetails>
                <img
                  src="/images/barchart-sample.jpg"
                  style={{ width: "100%" }}
                />
              </AccordionDetails>
            </Accordion>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                Accordion 1
              </AccordionSummary>
              <AccordionDetails>
                <img
                  src="/images/barchart-sample.jpg"
                  style={{ width: "100%" }}
                />
              </AccordionDetails>
            </Accordion>
          </TabPanel>
        </div>
      </div>
    </main>
  );
}
