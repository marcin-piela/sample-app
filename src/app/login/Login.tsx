import React from 'react';

import { Grid, Paper, Typography, AppBar } from 'shared/components';
import { LoginProps } from './Login.types';
import useStyles from './Login.styles';

export const Login: React.FC<LoginProps> = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">Login page</AppBar>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center">
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                <Paper className={classes.root}>
                  <Typography variant="h5" component="h3">
                    This is a sheet of paper.
                  </Typography>
                  <Typography component="p">
                    Paper can be used to build surface or other elements for your application.
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
