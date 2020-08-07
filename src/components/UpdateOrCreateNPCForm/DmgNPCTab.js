import React from 'react';
import { TextField } from '@material-ui/core';

const DmgNPCTab = ({ npc, updateNPC }) => {
  return (
    <>
      <TextField
        id="ocupation"
        fullWidth
        label="Occupation"
        placeholder="Former blacksmith, current innkeeper"
        helperText="What does this NPC do?"
        value={npc.occupation}
        onChange={updateNPC('occupation')}
      />
      <TextField
        id="appearance"
        fullWidth
        label="Appearance"
        placeholder="Blacksmith burn marks on his arms"
        helperText="What does this NPC look like?"
        value={npc.appearance}
        onChange={updateNPC('appearance')}
      />
      <TextField
        id="Abilities"
        fullWidth
        label="Abilities"
        placeholder="Brawny (High Strength), but absentminded (Low Wisdom)"
        helperText="What are this NPC's notable strengths and weaknesses?"
        value={npc.abilities}
        onChange={updateNPC('abilities')}
      />
      <TextField
        id="Talent"
        fullWidth
        label="Talent"
        placeholder="Especially good at drinking"
        helperText="What is something this NPC does that is unique?"
        value={npc.talent}
        onChange={updateNPC('talent')}
      />
      <TextField
        id="Mannerism"
        fullWidth
        label="Mannerism"
        placeholder="Tends to over explain"
        helperText="What is this NPC's behavior?"
        value={npc.mannerism}
        onChange={updateNPC('mannerism')}
      />
      <TextField
        id="Interaction"
        fullWidth
        label="Interaction"
        placeholder="Very Friendly, but somewhat tactless"
        helperText="How does this NPC treat others?"
        value={npc.interaction}
        onChange={updateNPC('interaction')}
      />
      <TextField
        id="Ideal"
        fullWidth
        label="Ideal"
        placeholder="Respect others, and treat each other fairly"
        helperText="What does this NPC believe in?"
        value={npc.interaction}
        onChange={updateNPC('interaction')}
      />
      <TextField
        id="Bond"
        fullWidth
        label="Bond"
        placeholder="Protective of his best swords"
        helperText="What location, person, or thing is important to the NPC?"
        value={npc.bond}
        onChange={updateNPC('bond')}
      />
      <TextField
        id="Flaw"
        fullWidth
        label="Flaw Or Secret"
        placeholder="Has a mistress, a waitress, unbeknown to the rest of his family"
        helperText="What element of this NPC's personality or history can undermine this character? Or a secret they try to hide?"
        value={npc.flaw}
        onChange={updateNPC('flaw')}
      />
    </>
  );
};

export default DmgNPCTab;
