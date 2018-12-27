import React from "react";
import { NavLink } from 'react-router-dom'; 
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const Navigation = () => {
  return (

    <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="h6" color="inherit">
      <NavLink to="/">Todolist</NavLink>
      <NavLink to="/game">  Game</NavLink>
      </Typography>
    </Toolbar>
  </AppBar>
  );
};

export default Navigation;