import React from 'react';
import { action } from '@storybook/addon-actions';
import SceneCombat from '../SceneWriter/SceneDefinition/SceneCombat';

export default {
  title: 'SceneCombat',
  component: SceneCombat,
};

let combat = {};

const onCombatChange = (val) => {
  action('updated');
};

export const SceneCombatStory = () => (
  <SceneCombat combat={combat} onCombatChange={onCombatChange} />
);
