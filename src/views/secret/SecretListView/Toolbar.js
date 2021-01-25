import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Box,
  makeStyles,
} from "@material-ui/core";
import AddSecretDialog from "../components/AddSecretDialog";

const useStyles = makeStyles(() => ({
  root: {},
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box display="flex" justifyContent="flex-end">
        <AddSecretDialog />
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
};

export default Toolbar;
