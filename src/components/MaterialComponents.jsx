import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Slider from '@material-ui/core/Slider';
import MenuItem from '@material-ui/core/MenuItem';

export default function MaterialComponents() {
  return (
    <div>
      <Box color="red">
        <Container maxWidth="sm">
          <Button variant="contained">Default</Button>
          <Checkbox />
          <InputLabel id="label">Age</InputLabel>
          <Select labelId="label" id="select" value="20">
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
          </Select>
          <Slider
            defaultValue={0.00000005}
            aria-labelledby="discrete-slider-small-steps"
            step={0.00000001}
            marks
            min={-0.00000005}
            max={0.0000001}
            valueLabelDisplay="auto"
          />
        </Container>
      </Box>
    </div>
  );
}
