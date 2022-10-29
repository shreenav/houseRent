import { Card, CardContent, Grid} from '@mui/material';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import dayjs from 'dayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
export function Time({onChange, ...rest}){

    const updateTime = (e) => {
      onChange(e);
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      
        <DesktopDatePicker
          label="Move-in Date"
          inputFormat="MM/DD/YYYY"
          value={rest.value.value.timeInput}
          onChange={updateTime}
          name = "timeInput"
          renderInput={(params) => <TextField {...params} />}
        />

        </LocalizationProvider>
        
            </Grid>
         </Grid>
     
    </CardContent>
  </Card>
  )
};

