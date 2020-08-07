import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Avatar, Button, Chip } from '@material-ui/core';
import { append, without, map } from 'ramda';
import Autocomplete from '@material-ui/lab/Autocomplete';
import npcAutofillComponentHOC, {
  storePropKey,
} from './hoc/npcAutofillComponentHOC';

const NPCAutofillComponent = ({
  [storePropKey]: NPC_STORE,
  onNPCChange,
  existingNPCs,
}) => {
  const [autocomplete] = useState('');
  const [input, setInput] = useState('');
  const addNPCChip = (selectedNPC) => {
    onNPCChange(append(selectedNPC, existingNPCs));
  };

  const handleDelete = (id) => () => {
    onNPCChange(without(id, existingNPCs));
  };

  const generateNPCChips = (npc) => {
    return (
      <Chip
        label={npc.name}
        avatar={<Avatar src={npc.src} onDelete={handleDelete(npc.id)} />}
      />
    );
  };

  return (
    <div>
      <Autocomplete
        id="NPC Auto Complete"
        options={NPC_STORE}
        style={{ width: '50%' }}
        getOptionLabel={(option) => option.name}
        value={autocomplete}
        onChange={(event, selectedNPC) => {
          addNPCChip(selectedNPC);
          // This clears after adding a new NPC chip
          setInput('');
        }}
        inputValue={input}
        onInputChange={(event, newInputValue) => {
          setInput('newInputValue');
        }}
        renderInput={(params) => <TextField {...params} label="All NPCS" />}
      />
      <Button label="Create New NPC" />
      {map(generateNPCChips, existingNPCs)}
    </div>
  );
};

export default npcAutofillComponentHOC(NPCAutofillComponent);
