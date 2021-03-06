import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { pipe, path } from 'ramda';
import { Checkbox } from '@material-ui/core';
import './SceneSetup.css';
import SceneDescription from './SceneDescription';
import SceneCombat from './SceneCombat';
import SceneNPCs from '../../NPCTextarea/NPCTextarea';
import SceneLocation from './SceneLocation';
import CommonTabs from '../../common/Tabs';

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

  /**
   * @typedef Scene
   * @prop {String} abstract
   * @prop {String} description
   * @prop {String} name
   * @prop {Object} combat
   * @prop {String} combat.summary
   * @prop {String} combat.resolution
   * @prop {Array.<npc.id>} npcs
   *
   */
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

  const tabComponents = [
    {
      label: 'Description',
      disabled: false,
      component: (
        <SceneDescription
          description={description}
          onDescriptionChange={setDescription}
        />
      ),
    },
    {
      label: 'Combat',
      disabled: !hasCombat,
      component: <SceneCombat combat={combat} onCombatChange={setCombat} />,
    },
    {
      label: 'NPCs',
      disabled: false,
      component: <SceneNPCs npcs={npcs} onNPCChange={setNPCs} />,
    },
    {
      label: 'Locations',
      disabled: false,
      component: (
        <SceneLocation location={location} onLocationChange={setLocation} />
      ),
    },
  ];
  return (
    <React.Fragment>
      <TextField
        className="SceneName"
        label="Name"
        fullWidth
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
        <FormControlLabel
          id="end"
          value="end"
          checked={hasCombat}
          onChange={handleCheck(setHasCombat)}
          control={<Checkbox color="primary" />}
          label="Combat"
          labelPlacement="end"
        />
        <CommonTabs tabComponents={tabComponents} />
        <Button type="submit"> Save Scene </Button>
      </form>
    </React.Fragment>
  );
}
