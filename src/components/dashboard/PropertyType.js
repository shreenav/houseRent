import {Card, CardContent, Grid} from '@mui/material';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
    {
      value: 'Any Type',
      label: 'AnyType'
    },
    {
      value: 'Apartments',
      label: 'Apartments'
    },

    {
        value: 'Street-House',
        label: 'Street House'
    },
    {
        value: 'City Villa',
        label: 'City Villa'
    },
    {
        value: 'Room Rentals',
        label: 'Room Rentals',
    }
    
  ];

export function Property({onChange, ...rest}){

    const updatePropertyType = (event) => {
      onChange(event);
    };

  return(
  <Card
    sx={{ height: '100%' , width : "100%"}}
    // {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={0}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
        <TextField
          id="standard-select-currency"
          select
          label="Property Type"
          variant="standard"
          fullWidth
          value = {rest.value.value.propertyTypeInput}
          onChange = {updatePropertyType}
          name = "propertyTypeInput"
          defaultValue = "Street-House"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
         </Grid>
         </Grid>
     
    </CardContent>
  </Card>
  )
};

