import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { fetchJobRequest } from "../../../store/job/jobActions";

const useStyles = makeStyles((theme) => ({
  root: {},
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Toolbar = ({ className, clusters, ...rest }) => {
  const classes = useStyles();
  const [cluster, setCluster] = useState("all");
  const dispatch = useDispatch();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Cluster name
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Cluster name"
                  value={cluster}
                  onChange={(e) => {
                    setCluster(e.target.value);
                    dispatch(fetchJobRequest(null, e.target.value));
                  }}
                >
                  <MenuItem value="all" key="all">
                    <em>All clusters</em>
                  </MenuItem>
                  {clusters.map((cluster) => (
                    <MenuItem value={cluster.name} key={cluster.name}>
                      {cluster.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
  clusters: PropTypes.array.isRequired,
};

export default Toolbar;
