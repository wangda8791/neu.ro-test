import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Input,
  Button,
  TextField,
  InputLabel,
  FormControl,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createSecretRequest } from "../../../../store/secret/secretActions";

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "column",
      margin: "auto",
    },
  })
);

export default function AddSecretDialog() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setKey("");
    setValue("");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    dispatch(createSecretRequest(key, value));
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Secret
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="form-dialog-title">Add Secret</DialogTitle>
        <DialogContent display="flex">
          <form className={classes.form} noValidate>
            <FormControl>
              <InputLabel htmlFor="key">Key</InputLabel>
              <TextField
                autoFocus
                id="key"
                label="Key"
                type="text"
                value={key}
                fullWidth
                onChange={(e) => setKey(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="value">Value</InputLabel>
              <Input
                id="value"
                placeholder="Value"
                label="Value"
                type="text"
                value={value}
                rows="5"
                multiline
                fullWidth
                onChange={(e) => setValue(e.target.value)}
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
