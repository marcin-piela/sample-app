import React from "react";

import { EndpointsProps } from "./Endpoints.types";
import { Layout, Header } from "shared/components";
import { useLocale } from "shared/hooks";
import {
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Container,
  Icon,
  Tooltip
} from "@material-ui/core";
import useStyles, { StyledTableCell, StyledTableRow } from "./Endpoints.styles";

export const Endpoints: React.FC<EndpointsProps> = ({ items }) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Layout header={<Header>Lorem ipsum BITCH</Header>}>
      <Container fixed>
        <Paper className={classes.paper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {/* <StyledTableCell>
                  {formatMessage({ id: "endpoints.label.id" })}
                </StyledTableCell> */}
                <StyledTableCell>
                  {formatMessage({ id: "endpoints.label.name" })}
                </StyledTableCell>
                <StyledTableCell>
                  {formatMessage({ id: "endpoints.label.service_profile" })}
                </StyledTableCell>
                <StyledTableCell>
                  {formatMessage({ id: "endpoints.label.tariff_profile" })}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {formatMessage({ id: "endpoints.label.iccid" })}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {formatMessage({ id: "endpoints.label.msisdn" })}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {formatMessage({ id: "endpoints.label.ip" })}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {formatMessage({ id: "endpoints.label.imei" })}
                </StyledTableCell>
                <StyledTableCell>
                  {formatMessage({ id: "endpoints.label.endpoint_status" })}
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items &&
                items.map(row => {
                  return (
                    <Tooltip
                      title={`Endpoint ID: ${row.id}`}
                      key={row.id}
                      placement="right"
                    >
                      <StyledTableRow>
                        <StyledTableCell>{row.name}</StyledTableCell>
                        <StyledTableCell>
                          {row.service_profile.name}
                        </StyledTableCell>
                        <StyledTableCell>
                          {row.tariff_profile.name}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.sim && row.sim.iccid}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.sim && row.sim.msisdn}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.ip_address}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.imei}
                          {row.imei_lock ? (
                            <Icon className={classes.lockIcon}>lock</Icon>
                          ) : (
                            <Icon className={classes.lockIcon}>lock_open</Icon>
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.status.id === 0 ? (
                            <Icon className={classes.enable}>check</Icon>
                          ) : (
                            <Icon className={classes.disable}>cancel</Icon>
                          )}
                        </StyledTableCell>
                      </StyledTableRow>
                    </Tooltip>
                  );
                })}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </Layout>
  );
};
