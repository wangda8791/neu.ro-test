import React, { useEffect } from "react";
import {
  Backdrop,
  Box,
  CircularProgress,
  Container,
  makeStyles,
} from "@material-ui/core";
import Page from "../../../components/Page";
import Results from "./Results";
import Toolbar from "./Toolbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchConfigRequest } from "../../../store/config/configActions";
import { fetchJobRequest } from "../../../store/job/jobActions";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const JobListView = () => {
  const classes = useStyles();
  const clusters = useSelector((state) => state.config.clusters);
  const jobs = useSelector((state) => state.job.jobs);
  const loading = useSelector((state) => state.job.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConfigRequest());
    dispatch(fetchJobRequest(null, null));
  }, [dispatch]);

  return (
    <Page className={classes.root} title="Jobs">
      <Container maxWidth={false}>
        <Toolbar clusters={clusters} />
        <Box mt={3}>
          <Results jobs={jobs} />
        </Box>
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Container>
    </Page>
  );
};

export default JobListView;
