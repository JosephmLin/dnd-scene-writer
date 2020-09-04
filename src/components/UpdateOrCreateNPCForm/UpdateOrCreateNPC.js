import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DmgNPCTab from './DmgNPCTab';
import npcStoreHOC, { storePropKey } from '../hoc/npcStoreHOC';
import CommonTabs from '../common/Tabs';
import './UpdateOrCreateNPC.css';
import flexibleAssoc from '../../toolbox/flexibleAssoc';
import NPCStatblock from './NPCStatblock';

const UpdateOrCreateSceneNPC = ({
  [storePropKey]: NPCS,
  updateOrAddNPC,
  id,
}) => {
  const [npc, setNPC] = useState(NPCS[id] ? NPCS[id] : {});
  const [isStatblockDisabled, setStablockDisabled] = useState(true);
  const [isDMGNPCDisabled, setDMGNPCDisabled] = useState(true);
  const updateNPCWithEvent = (key) => (e) =>
    updateNPCWithValue(key)(e.target.value);

  const updateNPCWithValue = (key) => (value) =>
    setNPC(flexibleAssoc(key)(value, npc));

  const saveNPC = (e) => {
    e.preventDefault();
    updateOrAddNPC(npc);
  };

  const tabComponents = [
    {
      component: <NPCStatblock npc={npc} updateNPC={updateNPCWithValue} />,
      disabled: isStatblockDisabled,
      label: 'Statblock',
    },
    {
      component: <DmgNPCTab npc={npc} updateNPC={updateNPCWithEvent} />,
      disabled: isDMGNPCDisabled,
      label: 'DMG NPC Guide',
    },
  ];
  return (
    <form className="npcForm" onSubmit={saveNPC}>
      <TextField
        id="NPCname"
        label="Name"
        required
        placeholder="John Doe"
        helperText="Name of the NPC"
        value={npc.name}
        onChange={updateNPCWithEvent('name')}
        margin="normal"
        className="name"
        fullWidth
      />
      <TextField
        className="description"
        id="NPCDescription"
        label="Description"
        multiline
        variant="outlined"
        margin="normal"
        value={npc.description}
        fullWidth
        onChange={updateNPCWithEvent('description')}
      />
      <CommonTabs tabComponents={tabComponents} />
      <Button variant="contained" color="primary" type="submit">
        {id ? 'Update' : 'Save New'} NPC
      </Button>
    </form>
  );
};

export default npcStoreHOC(UpdateOrCreateSceneNPC);
