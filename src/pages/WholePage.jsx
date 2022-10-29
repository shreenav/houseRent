import React from 'react'
import {QueryResult} from './QueryResult';
import {Page} from "./Page"

const WholePage = () => {
  return(
    <>
    <div style={{ display: "inline-block"}}>
       <Page />
    </div>
    <div>
        <QueryResult/>
    </div>
     
     
    </>
  );
}

export default WholePage