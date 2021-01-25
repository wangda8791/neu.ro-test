import React from "react";
import { Box, Container, makeStyles } from "@material-ui/core";
import Page from "../../../components/Page";
import Results from "./Results";
import Toolbar from "./Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const JobListView = () => {
  const classes = useStyles();
  const clusters = [
    {
      name: "xxx",
    },
  ];
  const jobs = [
    {
      id: "job-73746599-f792-4c7d-905d-f345d404de2c",
      owner: "neuro-cli-e2e",
      cluster_name: "default",
      status: "running",
      uri:
        "job://default/neuro-cli-e2e/job-73746599-f792-4c7d-905d-f345d404de2c",
    },
  ];

  return (
    <Page className={classes.root} title="Jobs">
      <Container maxWidth={false}>
        <Toolbar clusters={clusters} />
        <Box mt={3}>
          <Results jobs={jobs} />
        </Box>
      </Container>
    </Page>
  );
};

export default JobListView;
