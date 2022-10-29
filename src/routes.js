import { Navigate , useRoutes } from 'react-router-dom';
import {Page} from "./pages/Page"

import {DashboardLayout}  from './components/dashboard-layout';
import {QueryResult} from './pages/QueryResult';
import WholePage from './pages/WholePage.jsx';
import { useState } from 'react';

export default function Routes() {


  const [filterAttributes, setFilterAttributes] = useState({
    "priceInput" : "All",
    "propertyTypeInput" : "Any Type",
    "locationInput" : "",
    "timeInput" : new Date(),
    "searchButton" : false
  });

  function handleSearchButtonState(){
    setFilterAttributes({
      ...filterAttributes,
      "searchButton" : false
    });
  } 

  function handleChangeInFilterAttributes(e){
    if(e.$D != undefined || e.$D != null){
      setFilterAttributes({...filterAttributes, "timeInput":e});
    }
    else if(e.target.name == "searchButton"){
      setFilterAttributes({...filterAttributes, "searchButton" : e.target.value == "true" ? true : false});
    }
    else{
      setFilterAttributes({...filterAttributes, [e.target.name]:e.target.value});
    }


  }

  console.log(filterAttributes);

 return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children:[
        { element: <Navigate to="/rent" replace /> },
        { path: 'rent', element: <><Page value = {filterAttributes} onChange = {handleChangeInFilterAttributes}/> <QueryResult value = {filterAttributes} onChange = {handleSearchButtonState}/></> },
        { path: 'buy', element: <><Page value = {filterAttributes} onChange = {handleChangeInFilterAttributes}/> <QueryResult value = {filterAttributes} onChange = {handleSearchButtonState}/></> },
        { path: 'Sell', element: <><Page value = {filterAttributes} onChange = {handleChangeInFilterAttributes}/> <QueryResult value = {filterAttributes} onChange = {handleSearchButtonState}/></>},
        { path: 'manage-properties', element: <><Page value = {filterAttributes} onChange = {handleChangeInFilterAttributes}/> <QueryResult value = {filterAttributes} onChange = {handleSearchButtonState}/></>  },
        { path: 'resources', element: <><Page value = {filterAttributes} onChange = {handleChangeInFilterAttributes}/> <QueryResult value = {filterAttributes} onChange = {handleSearchButtonState}/></>  },
        { path: 'login', element: <><Page value = {filterAttributes} onChange = {handleChangeInFilterAttributes}/> <QueryResult value = {filterAttributes} onChange = {handleSearchButtonState}/></> },
        { path: 'register', element: <><Page value = {filterAttributes} onChange = {handleChangeInFilterAttributes}/> <QueryResult value = {filterAttributes} onChange = {handleSearchButtonState}/></>  },
        
      ]

      


    // element : <Page />
   
    },
    // {
    //   path :'/card',
    //   element : <OutlineCard />
    // }
])

}