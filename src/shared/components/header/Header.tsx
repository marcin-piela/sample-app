import React from 'react';
import ExitIcon from '@material-ui/icons/ExitToApp';

import { HeaderProps } from './Header.types';
import useStyles from './Header.styles';
import { AppBar, Toolbar, Typography, Fab } from 'shared/components';

export const Header: React.FC<HeaderProps> = ({ children }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {children}
        </Typography>
        <Fab size="medium">
          <ExitIcon />
        </Fab>
      </Toolbar>
    </AppBar>
  );
};
