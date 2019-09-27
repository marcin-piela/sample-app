import React from 'react';
import { Paper, Icon, Tooltip } from '@material-ui/core';

import { EndpointsProps } from '../Endpoints.types';

import { useLocale } from 'shared/hooks';
import useStyles from './MobileBox.styles';

export const MobileBox: React.FC<EndpointsProps> = ({ items }) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <>
      {items &&
        items.map(row => {
          return (
            <Paper className={classes.paper}>
              <div className={classes.itemWrapper}>
                <div className={classes.item}>
                  <div className={classes.itemLabel}>{formatMessage({ id: 'endpoints.label.name' })}: </div>
                  <div className={classes.itemValue}>{row.name}</div>
                </div>
              </div>

              <div className={classes.itemWrapper}>
                <div className={classes.item}>
                  <div className={classes.itemLabel}>{formatMessage({ id: 'endpoints.label.service_profile' })}: </div>
                  <div className={classes.itemValue}>{row.service_profile.name}</div>
                </div>
              </div>

              <div className={classes.itemWrapper}>
                <div className={classes.item}>
                  <div className={classes.itemLabel}>{formatMessage({ id: 'endpoints.label.tariff_profile' })}: </div>
                  <div className={classes.itemValue}>{row.tariff_profile.name}</div>
                </div>
              </div>

              <div className={classes.itemWrapper}>
                <div className={classes.item}>
                  <div className={classes.itemLabel}>{formatMessage({ id: 'endpoints.label.iccid' })}: </div>
                  <div className={classes.itemValue}>{row.sim && row.sim.iccid}</div>
                </div>
              </div>

              <div className={classes.itemWrapper}>
                <div className={classes.item}>
                  <div className={classes.itemLabel}>{formatMessage({ id: 'endpoints.label.msisdn' })}: </div>

                  <div className={classes.itemValue}>{row.sim && row.sim.msisdn}</div>
                </div>
              </div>

              <div className={classes.itemWrapper}>
                <div className={classes.item}>
                  <div className={classes.itemLabel}>{formatMessage({ id: 'endpoints.label.ip' })}: </div>

                  <div className={classes.itemValue}>{row.ip_address}</div>
                </div>
              </div>

              <div className={classes.itemWrapper}>
                <div className={classes.item}>
                  <div className={classes.itemLabel}>{formatMessage({ id: 'endpoints.label.imei' })}: </div>
                  <div className={classes.itemValue}>
                    {row.imei}
                    {row.imei_lock ? (
                      <Tooltip title="EMEI Locked" key={row.id} placement="right">
                        <Icon className={classes.lockIcon}>lock</Icon>
                      </Tooltip>
                    ) : (
                      <Tooltip title="EMEI Locked" key={row.id} placement="right">
                        <Icon className={classes.lockIcon}>lock_open</Icon>
                      </Tooltip>
                    )}
                  </div>
                </div>
              </div>

              <div className={classes.itemWrapper}>
                <div className={classes.item}>
                  <div className={classes.itemLabel}>{formatMessage({ id: 'endpoints.label.endpoint_status' })}: </div>
                  <div>
                    {row.status.id === 0 ? (
                      <Icon className={classes.enable}>check</Icon>
                    ) : (
                      <Icon className={classes.disable}>cancel</Icon>
                    )}
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
    </>
  );
};
