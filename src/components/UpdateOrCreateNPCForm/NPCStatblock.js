import React from 'react';
import { pathOr } from 'ramda';
import { TextField, Typography } from '@material-ui/core';
import NumberFormat from 'react-number-format';

const NPCStatblock = ({ npc, updateNPC }) => {
  const updateNPCWithValue = (key) => (values) => {
    updateNPC(key)(values.formattedValue);
  };
  const buildModifier = (key) => {
    const value = getNPCValue(key);
    const mod = `(${Math.floor((value - 10) / 2)})`;
    return mod;
  };

  const getNPCValue = (key) => pathOr(0, key, npc);

  return (
    <>
      <Typography variant="h5">Strength</Typography>
      <NumberFormat
        allowNegative={false}
        format="##"
        value={getNPCValue(['statblock', 'str'])}
        onValueChange={updateNPCWithValue(['statblock', 'str'])}
        isNumericString={true}
        decimalScale={0}
        customInput={TextField}
      />
    </>
  );
};

export default NPCStatblock;
