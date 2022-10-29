import NextLink from 'next/link';
import { useRouter  } from 'next/router';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { Box, Button, ListItem } from '@mui/material';
import {Route, Link, Routes, useLocation} from 'react-router-dom';
import React , {useState,useContext , useEffect } from "react";
import {UserContext} from '../App';

export const NavItem = (props) => {
  const {state,dispatch} = useContext(UserContext);
  const { href, icon, title, ...others } = props;
  // const router = useRouter();
  const location = useLocation();
  // console.log(href);
  const active = href ? (location.pathname === href || href == "/" && location.pathname == "/rent" ): false
  // const active = false;
  // console.log(href +  location.pathname);
   
  useEffect(()=>{
    if(active){
      let final_data = location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2)
      // console.log(final_data)
      dispatch({type:'USER',payload:{state : true , checking : final_data}})
    }
  },[active])

  
  
  
  
  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        mb: 0.5,
        py: 0,
        px: 2
      }}
      {...others}
    >
      <NavLink
      style ={{textDecoration : "none"}}
        to={href}
         passhref="true"
      >
        <Button
          component="a"
          startIcon={icon}
          disableRipple
          sx={{
            backgroundColor: active && 'rgba(255,255,255, 0.08)',
            borderRadius: 1,
            color: active ? 'secondary.main' : 'neutral.300',
            fontWeight: active && 'fontWeightBold',
            justifyContent: 'flex-start',
            px: 3,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '& .MuiButton-startIcon': {
              color: active ? 'secondary.main' : 'neutral.400'
            },
            '&:hover': {
              backgroundColor: 'rgba(255,255,255, 0.08)'
            }
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {title}
          </Box>
        </Button>
      </NavLink>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string
};
