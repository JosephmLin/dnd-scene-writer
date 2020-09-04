import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuItem,
  Menu,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import routes from '../../routeConstants';
import { path, pipe, mapObjIndexed, values } from 'ramda';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const location = useLocation().pathname;
  const title = path([location, 'title'], routes);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const generateNavbarLinks = (routeConfig, route) => (
    <Link className="nav-link" key={route} to={route}>
      <MenuItem onClick={handleClose}>{routeConfig.title}</MenuItem>
    </Link>
  );

  return (
    <AppBar position="static">
      <Toolbar disableGutters={true}>
        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className="menu"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
        >
          {pipe(mapObjIndexed(generateNavbarLinks), values)(routes)}
        </Menu>
        <Typography variant="h6" className="title">
          {title}
        </Typography>
        <Button className="login" color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
