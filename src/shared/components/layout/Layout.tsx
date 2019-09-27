import React from 'react';

import { LayoutProps } from './Layout.types';
import { Grid } from 'shared/components';

export const Layout: React.FC<LayoutProps> = ({ children, header }) => {
  return (
    <Grid container spacing={2}>
      {header && (
        <Grid item xs={12}>
          <Grid container justify="center">
            {header}
          </Grid>
        </Grid>
      )}
      <Grid item xs={12}>
        <Grid container justify="center">
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};
