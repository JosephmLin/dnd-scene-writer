import React from 'react';
import { TextField } from '@material-ui/core';
import { __, pathOr } from 'ramda';

const DmgNPCTab = ({ npc, updateNPC }) => {
  const getNPCValue = pathOr('', __, npc);
  return (
    <>
      <TextField
        id="ocupation"
        fullWidth
        label="Occupation"
        placeholder="Former blacksmith, current innkeeper"
        helperText="What does this NPC do?"
        value={getNPCValue(['dmg', 'occupation'])}
        onChange={updateNPC(['dmg', 'occupation'])}
      />
      <TextField
        id="appearance"
        fullWidth
        label="Appearance"
        placeholder="Blacksmith burn marks on his arms"
        helperText="What does this NPC look like?"
        value={getNPCValue(['dmg', 'appearance'])}
        onChange={updateNPC(['dmg', 'appearance'])}
      />
      <TextField
        id="Abilities"
        fullWidth
        label="Abilities"
        placeholder="Brawny (High Strength), but absentminded (Low Wisdom)"
        helperText="What are this NPC's notable strengths and weaknesses?"
        value={getNPCValue(['dmg', 'abilities'])}
        onChange={updateNPC(['dmg', 'abilities'])}
      />
      <TextField
        id="Talent"
        fullWidth
        label="Talent"
        placeholder="Especially good at drinking"
        helperText="What is something this NPC does that is unique?"
        value={getNPCValue(['dmg', 'talent'])}
        onChange={updateNPC(['dmg', 'talent'])}
      />
      <TextField
        id="Mannerism"
        fullWidth
        label="Mannerism"
        placeholder="Tends to over explain"
        helperText="What is this NPC's behavior?"
        value={getNPCValue(['dmg', 'mannerism'])}
        onChange={updateNPC(['dmg', 'mannerism'])}
      />
      <TextField
        id="Interaction"
        fullWidth
        label="Interaction"
        placeholder="Very Friendly, but somewhat tactless"
        helperText="How does this NPC treat others?"
        value={getNPCValue(['dmg', 'interaction'])}
        onChange={updateNPC(['dmg', 'interaction'])}
      />
      <TextField
        id="Ideal"
        fullWidth
        label="Ideal"
        placeholder="Respect others, and treat each other fairly"
        helperText="What does this NPC believe in?"
        value={getNPCValue(['dmg', 'ideal'])}
        onChange={updateNPC(['dmg', 'ideal'])}
      />
      <TextField
        id="Bond"
        fullWidth
        label="Bond"
        placeholder="Protective of his best swords"
        helperText="What location, person, or thing is important to the NPC?"
        value={getNPCValue(['dmg', 'bond'])}
        onChange={updateNPC(['dmg', 'bond'])}
      />
      <TextField
        id="Flaw"
        fullWidth
        label="Flaw Or Secret"
        placeholder="Has a mistress, a waitress, unbeknown to the rest of his family"
        helperText="What element of this NPC's personality or history can undermine this character? Or a secret they try to hide?"
        value={getNPCValue(['dmg', 'flaw'])}
        onChange={updateNPC(['dmg', 'flaw'])}
      />
    </>
  );
};

export default DmgNPCTab;
