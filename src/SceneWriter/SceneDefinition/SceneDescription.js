import React from 'react';
import TextField from '@material-ui/core/TextField';

const SceneDescription = ({ onDescriptionChange, description }) => {
  const updateDescription = (key) => (e) => {
    onDescriptionChange({
      ...description,
      [key]: e.target.value,
    });
  };

  // TODO: Add Images, add NPC chips, add NPC/enemy tagging
  return (
    <>
      <TextField
        multiline
        id="summary"
        fullWidth
        rows={3}
        label="Summary"
        placeholder="Nobody greets as you walk in. A small huddle of men with pitchforks are conversing angrily at a table..."
        helperText="A Full Description of the Scene"
        value={description.summary}
        onChange={updateDescription('summary')}
      />
      <TextField
        id="transition"
        fullWidth
        label="Resolution/Transition"
        placeholder="The town is willing to pay them 1000 gp each to kill a dragon."
        helperText="The Resolution to the drama"
        value={description.resolution}
        onChange={updateDescription('resolution')}
      />
    </>
  );
};

export default SceneDescription;
