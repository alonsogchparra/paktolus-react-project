import { Button, Container, Grid } from "@material-ui/core";
import React from "react";
import TableResult from "../Content/TableResult";

const Dashboard = ({ handleOpenGame }) => {
  return (
    <div>
      <Container style={{ marginTop: "200px" }}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ marginBottom: "30px" }}
        >
          <Button onClick={() => handleOpenGame()} color="primary" size="large">
            opens popup
          </Button>
        </Grid>
      </Container>

      <TableResult />
    </div>
  );
};

export default Dashboard;
