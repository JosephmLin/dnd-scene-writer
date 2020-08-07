import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/core/Autocomplete';
const SceneLocation = ({ onLocationChange, location }) => {
  const updateLocation = (key) => (e) => {
    onLocationChange({
      ...location,
      [key]: e.target.value,
    });
  };

  // TODO:
  return (
    <>
      <TextField
        id="LocationName"
        fullWidth
        label="Location Name"
        placeholder="The Boar's Head Inn"
        helperText="Name of location"
        value={location.name}
        onChange={updateLocation('name')}
      />
      <TextField
        multiline
        id="LocationDescription"
        fullWidth
        rows={3}
        label="Location Description"
        placeholder="boar's head on the wall, small fireplace, a bard in the corner strumming quietly"
        helperText="A Full Description of the Scene"
        value={location.description}
        onChange={updateLocation('description')}
      />
    </>
  );
};

export default SceneLocation;
