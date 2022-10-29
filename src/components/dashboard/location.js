import {  Card, CardContent, Grid} from '@mui/material';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
export function Budget({onChange, ...rest}){

  function updateAddress(e){
    onChange(e);
  }

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
          <TextField id="outlined-basic" label="Location" variant="standard"
          value = {rest.value.value.locationInput} onChange = {updateAddress} name = "locationInput"/>
         </Grid>
         </Grid>
     
    </CardContent>
  </Card>
  )
};

