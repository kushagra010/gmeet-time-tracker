import React from 'react';
import { FormControlLabel, Switch, TextField } from '@mui/material';

export const Popup = () => {
  return (
    <div>
      <FormControlLabel control={<Switch defaultChecked />} label='Label' />
      <TextField label='Outlined' variant='outlined' />
    </div>
  );
};
