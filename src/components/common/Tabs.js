import React, { useState } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { map } from 'ramda';

/**
 * @function
 * @description functional component
 * @param {Array.<String>} tabLabels order matters based on tab order
 * @param {Object} tabComponents key is the tab Label
 */
const CommonTabs = ({ tabComponents }) => {
  const [currentTab, changeTab] = useState(false);
  const handleChange = (event, value) => {
    changeTab(value);
  };

  const generateTab = (config) => {
    return (
      <Tab disabled={config.disabled} label={config.label} key={config.label} />
    );
  };

  const generateComponent =
    currentTab !== false ? tabComponents[currentTab].component : null;

  return (
    <>
      <AppBar position="static" color="default">
        <Tabs value={currentTab} onChange={handleChange} variant="fullWidth">
          {map(generateTab, tabComponents)}
        </Tabs>
      </AppBar>
      {generateComponent}
    </>
  );
};

export default CommonTabs;
