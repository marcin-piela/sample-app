import React from 'react';
import ExitIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';

import { HeaderProps } from './Header.types';
import useStyles from './Header.styles';
import { AppBar, Toolbar, Typography, IconButton } from 'shared/components';

export const Header: React.FC<HeaderProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {children}
        </Typography>
        <Link to="/logout" style={{color: 'white'}}>
          <IconButton color="inherit">
            <ExitIcon />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
