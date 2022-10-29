import { Card, CardContent, Grid } from '@mui/material';
import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SearchIcon from '@mui/icons-material/Search';;

export function Search({onChange, ...rest}){

        const [state, setstate] = React.useState(rest.value.value.searchButton);

        function handleClick(e) {
           e.target.value = !rest.value.value.searchButton;
           onChange(e);
          //  setLoading(true);
        }

        // setTimeout(() => {
        //   setstate(!state);
        // }, 1000);

  return(
  <Card
    sx={{ height: '100%' , width : "100%"}}
    // {...props}
  >
    <CardContent >
      <Grid
        container
        spacing={0}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <LoadingButton
          onClick={handleClick}
          endIcon={<SearchIcon/>}
          loading={state}
          loadingPosition="end"
          variant="contained"
          name = "searchButton"
        >
          Search
        </LoadingButton>
         </Grid>
         </Grid>
     
    </CardContent>
  </Card>
  )
};

