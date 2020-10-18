import React, { useState, Dispatch, SetStateAction } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { navItems } from "../../mockData/navItems";
import "./navbar.scss";

type NavbarProps = {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
};

const Navbar = (props: NavbarProps) => {
  const { value, setValue } = props;

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar className="navbar-container" position="static">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="simple tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </AppBar>
  );
};

export default Navbar;
