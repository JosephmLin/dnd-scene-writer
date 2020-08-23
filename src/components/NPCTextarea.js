import React, { useState, useEffect } from 'react';
import { Avatar, Button, Chip } from '@material-ui/core';
import { append, applySpec, map, reject, replace, pipe, prop } from 'ramda';
import npcStoreReadOnlyHOC, { storePropKey } from './hoc/npcStorerReadOnlyHOC';
import TaggableTextarea from './TaggableTextarea';
import './NPCTextarea.css';

const NPCAutofillComponent = ({
  [storePropKey]: NPC_STORE,
  onNPCChange,
  existingNPCs,
  getNpcs,
}) => {
  const [npcsInTextarea, setNpcsInTextarea] = useState([]);

  useEffect(() => {
    getNpcs();
  }, [getNpcs, npcsInTextarea]);

  const createWhitelistObject = applySpec({
    value: pipe(prop('name'), replace(' ', '-')),
    title: prop('description'),
    id: prop('_id'),
  });
  const whitelist = map(createWhitelistObject, NPC_STORE);

  const addNpc = (npc) => {
    setNpcsInTextarea((oldNpcs) => {
      return [...oldNpcs, npc];
    });
  };
  const removeNpc = (npc) => {
    setNpcsInTextarea((oldNpcs) => reject((ele) => ele.id === npc.id, oldNpcs));
  };
  const openNpc = (npc) => {
    // reroute
    console.log(npc);
  };

  const generateNPCChips = (npc) => {
    return (
      <Chip key={npc.id} label={npc.value} avatar={<Avatar src={npc.img} />} />
    );
  };

  console.log(npcsInTextarea);
  return (
    <div className="npcTextarea">
      <TaggableTextarea
        whitelist={whitelist}
        onAddTag={addNpc}
        onRemoveTag={removeNpc}
        onOpenTag={openNpc}
      />
      {map(generateNPCChips, npcsInTextarea)}
    </div>
  );
};

export default npcStoreReadOnlyHOC(NPCAutofillComponent);
