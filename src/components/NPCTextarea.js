import React, { useState, useEffect } from 'react';
import { Avatar, Button, Chip } from '@material-ui/core';
import { applySpec, map, reject, replace, pipe, prop } from 'ramda';
import npcStoreReadOnlyHOC, { storePropKey } from './hoc/npcStorerReadOnlyHOC';
import TaggableTextarea from '../tagify/TaggableTextarea';
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
  }, [getNpcs]);
  const createWhitelistObject = applySpec({
    value: pipe(prop('name'), replace(' ', '-')),
    // title: prop('description'),
  });
  const addNpc = (npc) => {
    console.log(npc);
    setNpcsInTextarea([...npcsInTextarea, npc]);
  };
  const removeNpc = (npc) => {
    console.log(npc);
    setNpcsInTextarea(reject((ele) => ele === npc, npcsInTextarea));
  };
  const openNpc = (npc) => {
    // reroute
    console.log(npc);
  };

  const generateNPCChips = (npc) => {
    return (
      <Chip key={npc.id} label={npc.name} avatar={<Avatar src={npc.src} />} />
    );
  };
  const whitelist = map(createWhitelistObject, NPC_STORE);
  console.log(whitelist);
  return (
    <div className="npcTextarea">
      <TaggableTextarea
        whitelist={whitelist ? whitelist : false}
        onAddTag={addNpc}
        onRemoveTag={removeNpc}
        onOpenTag={openNpc}
      />
      {map(generateNPCChips, npcsInTextarea)}
    </div>
  );
};

export default npcStoreReadOnlyHOC(NPCAutofillComponent);
