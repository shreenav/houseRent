import { Card, CardContent, Grid} from '@mui/material';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
    {
      value: 'All',
      label: 'All'
    },
    {
      value: '$500-$1000',
      label: '$500 - $1000'
    },

    {
        value: '$1001-$2000',
        label: '$1001 - $2000'
    },
    {
        value: '$2001-$3000',
        label: '$2001 - $3000'
    },
    {
        value: '$3001-$4000',
        label: '$3001 - $4000',
    },
    {
      value: '$4001-$5000',
      label: '$4001 - $5000',
  }
  ];

export function Price({onChange, ...rest}){

    const updatePrice = (event) => {
      onChange(event);
    };

  return(
  <Card
    sx={{ height: '100%' , width : "100%"}}
    //{...props}
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
          label="Price"
          variant="standard"
          value = {rest.value.value.priceInput} onChange = {updatePrice}
          name = "priceInput"
          defaultValue = "$500-$1000"
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

