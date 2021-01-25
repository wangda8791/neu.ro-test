import React from "react";
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              <TextField autoFocus id="key" label="Key" type="text" fullWidth />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="value">Value</InputLabel>
              <Input
                id="value"
                placeholder="Value"
                label="Value"
                type="text"
                rows="5"
                multiline
                fullWidth
              />
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
