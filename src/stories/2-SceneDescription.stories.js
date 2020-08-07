import React from 'react';
import { action } from '@storybook/addon-actions';
import SceneDescription from '../SceneWriter/SceneDefinition/SceneDescription';

export default {
  title: 'SceneDescription',
  component: SceneDescription,
};

let description = {
  summary: 'abc',
  resolution: '123',
};

const onDescriptionChange = (val) => {
  action('updated');
};

export const SceneDescriptionStory = () => (
  <SceneDescription
    description={description}
    onDescriptionChange={onDescriptionChange}
  />
);
