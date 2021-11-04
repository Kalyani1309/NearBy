import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "./ForgotPwdDialog.css"

export default function ResetPwdDialog(props) {

    const [emailAddress, setEmailAddress] = React.useState("");

    const handleChange = (event, name) => {
        setEmailAddress(event.target.value);
    };

  return (
    <div>
      <Dialog open={props.open} classes={{ paper: "dialogWidth" }} onClose={()=>props.onClose()}>
        <DialogTitle style={{ color: "#030140" }} variant="h5">Forgot Password</DialogTitle>
        <DialogContent>
          <DialogContentText variant="body2">
            Enter the email associated with your account and we'll send an email with instructions to reset your password. 
          </DialogContentText>
            <TextField fullWidth sx={{marginTop:3}}
                label="Email Address"
                required
                value={emailAddress}
                onChange={(event) => handleChange(event)}
            />
        </DialogContent>
        <DialogActions style={{justifyContent:"center", marginBottom: 16}}>
          <Button variant="contained" disabled={emailAddress===""} onClick={()=> props.sendPwdResetInstruction(emailAddress)}>Send Instructions</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
