import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { pipe, path } from 'ramda';
import { Checkbox } from '@material-ui/core';
import './SceneSetup.css';
import SceneDescription from './SceneDescription';
import SceneCombat from './SceneCombat';
import SceneNPCs from '../../components/NPCAutofillComponent';
import SceneLocation from './SceneLocation';
import SceneTabs from './SceneTabs';

const editField = (setField) => pipe(path(['target', 'value']), setField);
const handleCheck = (setField) => pipe(path(['target', 'checked']), setField);

export default function SceneSetup({ name, save }) {
  // Scene Properties
  const [abstract, setAbstract] = useState('');
  const [sceneName, setSceneName] = useState(name ? name : '');

  // Scene Options
  const [hasCombat, setHasCombat] = useState(true);

  // Tab State
  const [description, setDescription] = useState({});
  const [combat, setCombat] = useState({});
  const [npcs, setNPCs] = useState({});
  const [location, setLocation] = useState({});

  const buildScene = () => ({
    abstract,
    description,
    name,
    combat,
    npcs,
  });

  const onSave = (e) => {
    e.preventDefault();
    save(buildScene());
  };

  const showDescription = () => {
    return (
      <SceneDescription
        description={description}
        onDescriptionChange={setDescription}
      />
    );
  };

  const showCombat = () => {
    return <SceneCombat combat={combat} onCombatChange={setCombat} />;
  };

  const showNPCs = () => {
    return <SceneNPCs npcs={npcs} onNPCChange={setNPCs} />;
  };

  const showLocations = () => {
    return <SceneLocation location={location} onLocationChange={setLocation} />;
  };

  return (
    <React.Fragment>
      <TextField
        className="SceneName"
        label="Name"
        placeholder="Act 1: A morose meeting at the inn"
        value={sceneName}
        onChange={editField(setSceneName)}
      />
      <form onSubmit={onSave}>
        <TextField
          id="abstract"
          label="Abstract"
          placeholder="The Adventurers learn about the problems in the village."
          fullWidth
          helperText="One Line Abstract of the Scene"
          value={abstract}
          onChange={editField(setAbstract)}
        />
        <SceneDescription
          description={description}
          onDescriptionChange={editField(setDescription)}
        />
        <FormControlLabel
          value="end"
          checked={hasCombat}
          onChange={handleCheck(setHasCombat)}
          control={<Checkbox color="primary" />}
          label="Combat"
          labelPlacement="end"
        />
        <SceneTabs
          hasCombat={hasCombat}
          showDescription={showDescription}
          showCombat={showCombat}
          showNPCs={showNPCs}
          showLocations={showLocations}
        />
        <Button type="submit"> Save Scene </Button>
      </form>
    </React.Fragment>
  );
}
