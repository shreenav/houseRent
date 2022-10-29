import { Box, Container, Grid ,Stack} from '@mui/material';
import OutlinedCard from "../components/dashboard/Result/OutlineCard"
import Typography from '@mui/material/Typography';
import properties from '../assets/dummyData';
import { useEffect, useState } from 'react';

export function QueryResult({onChange, ...rest}) {
  
  const [filteredProperties, setfilteredProperties] = useState(properties)

  useEffect(() => {
    let fp = properties.filter(filterDesiredProperties);
    setfilteredProperties(fp);
    onChange();
  }, [rest.value.searchButton])

  
  //console.log(rest);

  function filterDesiredProperties(x){
    let checkPrice = false;
    let checkPropertyType = false;
    let checkMoveInDate = false;
    let checkLocation = false;
    var FuzzyMatching = require('fuzzy-matching');
    var fm = new FuzzyMatching([rest.value.locationInput]);

    if(x.currentlyAvailable === false){
      return false;
    }

    if(rest.value.priceInput === "All"){
      checkPrice = true;
    }
    else{
      let priceRange = rest.value.priceInput.split("-");
      let startPriceRange = parseInt(priceRange[0].substring(1));
      let endPriceRange = parseInt(priceRange[1].substring(1));
      checkPrice = (x.rentPrice >= startPriceRange && x.rentPrice <= endPriceRange);
    }

    if(rest.value.propertyTypeInput === "Any Type"){
      checkPropertyType = true;
    }
    else{
      checkPropertyType = x.propertyType === rest.value.propertyTypeInput;
    }

    checkMoveInDate = (x.availableFrom.getTime() <=  new Date(rest.value.timeInput).getTime());
    if(rest.value.locationInput === ""){
      checkLocation = true;
    }
    else{
      checkLocation = (fm.get(x.location.City).distance >= 0.60);
    }
    
    if(checkLocation && checkMoveInDate && checkPrice && checkPropertyType)
    {
      return true;
    }
    return false;
  }
  
  //console.log(filteredProperties.length);
  return(
   
    <Box sx={{ width: '100%' }}>
      <Typography style ={{fontSize: '35px' }}>
        Available Properties:
      </Typography>
    
    <Grid container rowSpacing={0}>
      { 
        filteredProperties.length != 0 ? 
        filteredProperties.map((property, index) => (
          <Grid item xs={12} lg = {4} md={6} sm = {6} key = {index}>
            < OutlinedCard value = {property} />
          </Grid>
      )) : <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="60vh"
              margin = "auto"
            >
            <Typography variant = "h5">
              No properties available with current filters.
            </Typography>
          </Box>
      
    }
    </Grid>
  </Box> 
 
     
   
    );
 
};






