import React, { useContext } from 'react'
import { UserContext } from '../context/GlobalState'
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Stack } from '@mui/material';
function Alert() {

    const [state] = React.useState({
      open: false,
      vertical: "top",
      horizontal: "center",
    });

    const { vertical, horizontal, open } = state;


    const{alert , setAlert} = useContext(UserContext)
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }

      setAlert({open:false})
    };
  return (
    <Stack spacing={2} sx={{ width: "100%", position:"absolute" , top:"20px" , left:"10px"  }} >
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={alert.type}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default Alert