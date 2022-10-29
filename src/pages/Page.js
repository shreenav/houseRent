import { Box, Container, Grid } from '@mui/material';
import {Budget} from '../components/dashboard/location';
import {Price} from '../components/dashboard/Price';
import {Property} from '../components/dashboard/PropertyType';
import {Time} from '../components/dashboard/Time';
import {Search} from '../components/dashboard/Search';
import OutlinedCard from "../components/dashboard/Result/OutlineCard"
import dayjs from 'dayjs';
// import { DashboardLayout } from '../components/dashboard-layout';
import { useState } from 'react';
export function Page(props) {
    // const [location, setLocationValue ] = useState("New York, USA");

    // const [price, setPrice] = useState('$500 - $1000');

    // const [propertyType, setPropertyType] = useState('Street House');

    // const [moveInDATE, setMoveInDate] = useState(dayjs('2014-08-18T21:11:54'));

    function handleChange(event){
      props.onChange(event);
    }

    // function handleChangeInPrice(newPrice){
    //   setPrice(newPrice);
    // }

    // function handleChangeInPropertyType(newPropertyType){
    //   setPropertyType(newPropertyType);
    // }

    // function handleChangeInMoveInDate(newMoveInDate){
    //   setMoveInDate(newMoveInDate);
    // }


    return(
    <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={1}
        >
          <Grid
            item
            lg={2.5}
            sm={6}
            xl={9}
            xs={12}
          >
            <Budget value = {props} onChange = {handleChange}/>
          </Grid>
          <Grid
            item
            lg={2.5}
            sm={6}
            xl={9}
            xs={12}
          >
            <Time value = {props} onChange = {handleChange}/>
          </Grid>
          <Grid
            item
            lg={2.2}
            sm={6}
            xl={9}
            xs={12}
          >
            <Price value = {props} onChange = {handleChange}/>
          </Grid>
          <Grid
            item
            lg={2.2}
            sm={6}
            xl={9}
            xs={12}
          >
            <Property value = {props} onChange = {handleChange}/>
          </Grid>
          <Grid
            item
            lg={2.2}
            sm={6}
            xl={9}
            xs={12}
          >
            <Search value = {props} onChange = {handleChange}/>
          </Grid>
         
        </Grid>
      </Container>
     

      


    </Box>

    

    </>
    );
 
};






