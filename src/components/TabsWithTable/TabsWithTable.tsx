import React, { useState } from "react";

import CustomTable from "../CustomTable/CustomTable";
import { AppBar, Tabs, Tab, Button } from "@material-ui/core";
import { TabPanel } from "../TabPanel/TabPanel";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const tableHeaderItems = [
  {
    name: "Name",
  },
  {
    name: "Category",
    type: "right",
  },

  {
    name: "Type",
    type: "right",
  },
  {
    name: "SubCategory",
    type: "right",
  },
  {
    name: "Items",
    type: "right",
  },
];

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const TabsWithTable = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar className="table-tabs-container" position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CustomTable head={tableHeaderItems} rows={rows} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <CustomTable head={tableHeaderItems} rows={rows} />
      </TabPanel>
    </>
  );
};

export default TabsWithTable;
