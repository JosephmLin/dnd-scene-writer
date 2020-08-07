import React from 'react';
import { action } from '@storybook/addon-actions';
import CommonTabs from '../components/CommonTabs';

export default {
  title: 'Common Tabs',
  component: CommonTabs,
};

let tabLabels = [1, 2, 3, 4];

let tabComponents = {
  1: <div> hello world 1 </div>,
  2: <div> hello world 2 </div>,
  3: <div> hello world 3 </div>,
  4: <div> hello world 4 </div>,
};

export const SceneCombatStory = () => (
  <CommonTabs tabLabels={tabLabels} tabComponents={tabComponents} />
);
