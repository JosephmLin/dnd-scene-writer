import React, { useState } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { map } from 'ramda';

/**
 * @function
 * @description functional component
 * @param {Array.<String>} tabLabels order matters based on tab order
 * @param {Object} tabComponents key is the tab Label
 */
const CommonTabs = ({ tabLabels, tabComponents }) => {
  const [currentTab, changeTab] = useState(0);

  const handleChange = (event, value) => {
    changeTab(value);
  };

  const generateTab = (label) => {
    return <Tab label={label} key={label} />;
  };

  const generateComponent = () => {
    return tabComponents[tabLabels[currentTab]];
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Tabs value={currentTab} onChange={handleChange} variant="fullWidth">
          {map(generateTab, tabLabels)}
        </Tabs>
      </AppBar>
      {generateComponent()}
    </>
  );
};

export default CommonTabs;
