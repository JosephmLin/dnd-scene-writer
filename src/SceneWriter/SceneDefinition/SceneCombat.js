import React from 'react';
import TextField from '@material-ui/core/TextField';

const SceneCombat = ({ onCombatChange, combat }) => {
  const updateCombat = (key) => (e) => {
    onCombatChange({
      ...combat,
      [key]: e.target.value,
    });
  };

  // TODO: Add Images, add NPC chips, add NPC/enemy tagging
  return (
    <>
      <TextField
        multiline
        id="combat"
        fullWidth
        rows={3}
        label="Summary"
        placeholder="Nobody greets as you walk in. A small huddle of men with pitchforks are conversing angrily at a table..."
        helperText="A Full combat of the Scene"
        value={combat.summary}
        onChange={updateCombat('summary')}
      />
      <TextField
        id="transition"
        fullWidth
        label="Resolution/Transition"
        placeholder="The town is willing to pay them 1000 gp each to kill a dragon."
        helperText="The Resolution to the drama"
        value={combat.resolution}
        onChange={updateCombat('resolution')}
      />
    </>
  );
};

export default SceneCombat;
