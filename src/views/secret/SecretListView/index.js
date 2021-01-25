import React, { useEffect } from "react";
import { Box, Container, Snackbar, makeStyles } from "@material-ui/core";
import Alert from "../../../components/Alert";
import Page from "../../../components/Page";
import Results from "./Results";
import Toolbar from "./Toolbar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSecretRequest,
  resetError,
} from "../../../store/secret/secretActions";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const SecretListView = () => {
  const classes = useStyles();
  const secrets = useSelector((state) => state.secret.secrets);
  const error = useSelector((state) => state.secret.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSecretRequest());
  }, [dispatch]);

  const handleCloseError = () => {
    dispatch(resetError());
  };

  return (
    <Page className={classes.root} title="Secrets">
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results secrets={secrets} />
        </Box>
        <Snackbar
          open={error !== ""}
          autoHideDuration={6000}
          onClose={handleCloseError}
        >
          <Alert severity="error">{error}</Alert>
        </Snackbar>
      </Container>
    </Page>
  );
};

export default SecretListView;
