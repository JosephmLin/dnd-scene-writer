import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DmgNPCTab from './DmgNPCTab';
import npcStoreHOC, { storePropKey } from '../hoc/npcStoreHOC';
import CommonTabs from '../CommonTabs';
import './UpdateOrCreateNpc.css';

const UpdateOrCreateSceneNPC = ({
  [storePropKey]: NPCS,
  updateOrAddNPC,
  id,
}) => {
  const [currentTab, setTab] = useState(0);
  const [npc, setNPC] = useState(NPCS[id] ? NPCS[id] : {});
  const updateNPC = (key) => (e) => {
    setNPC({
      ...npc,
      [key]: e.target.value,
    });
  };

  const saveNPC = (e) => {
    e.preventDefault();
    updateOrAddNPC(npc);
  };

  const tabLabels = ['DMG NPC Guide'];
  const tabComponents = {
    'DMG NPC Guide': <DmgNPCTab npc={npc} updateNPC={updateNPC} />,
  };
  return (
    <form className="npcForm" onSubmit={saveNPC}>
      <TextField
        id="NPCname"
        label="Name"
        required
        placeholder="John Doe"
        helperText="Name of the NPC"
        value={npc.name}
        onChange={updateNPC('name')}
      />
      <TextField
        id="NPCDescription"
        label="One Line Description"
        placeholder="Large blacksmith, talkative and forward"
        value={npc.description}
        onChange={updateNPC('description')}
      />
      <CommonTabs tabLabels={tabLabels} tabComponents={tabComponents} />
      <Button type="submit">{id ? 'Update' : 'Save New'} NPC</Button>
    </form>
  );
};

export default npcStoreHOC(UpdateOrCreateSceneNPC);
