import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "react-redux";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import { useTheme } from "@mui/material/styles";

export default function ClearConfirmation({ onConfirm }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const {
    editable
  } = useSelector((state) => state.faucetList);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    onConfirm(editable ? false : true);
    setOpen(false);
  };

  return (
    <>
      <Button
        color="success"
        onClick={handleClickOpen}
        startIcon={editable?<NotInterestedIcon /> : <AutoFixHighIcon />}
      >
        Edit
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {editable ? "Disable Live Editing" : "Enable Live Editing"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you know you can live edit table now?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            No
          </Button>
          <Button onClick={handleConfirm} autoFocus>
            {editable ? "Disable" : "Enable" }
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
