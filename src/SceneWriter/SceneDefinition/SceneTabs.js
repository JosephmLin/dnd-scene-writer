import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Typography } from '@material-ui/core';
import './SceneTabs.css';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const SceneTabs = (props) => {
  const [currentTab, changeTab] = useState(0);

  const handleChange = (event, value) => {
    changeTab(value);
  };

  return (
    <div className="SceneTabs">
      <AppBar position="static" color="priamry">
        <Tabs value={currentTab} onChange={handleChange} variant="fullWidth">
          <Tab label="Description" />
          <Tab label="Combat" />
          <Tab label="Location" />
          <Tab label="NPCs" />
        </Tabs>
      </AppBar>
      {currentTab === 0 && props.showDescription()}
      {currentTab === 1 && props.showCombat()}
      {currentTab === 2 && props.showLocation()}
      {currentTab === 3 && props.showNPCs()}
    </div>
  );
};

export default SceneTabs;
