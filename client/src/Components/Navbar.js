import React, { useContext } from 'react'
import Appbar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Stack } from '@mui/material';
import Button from "@mui/material/Button";
import {  Link, useNavigate } from "react-router-dom";
import { UserContext } from '../context/GlobalState';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Navbar() {
    const { logout , check , setCheck} = useContext(UserContext)
    const navigate = useNavigate()
    const handleLogout = async()=>{
        try {
            await logout().then(() => {
              console.log("logout succesfully");
               toast.success("User Logout Succesfull", {
                 position: "top-center",
                 autoClose: 1000,
                 hideProgressBar: false,
                 closeOnClick: true,
                 pauseOnHover: true,
                 draggable: true,
                 progress: undefined,
               }); 
              
              
            }).then(()=>{
              setTimeout(()=>{
                setCheck(false);
                navigate("/");
              },1500)
            })
        } catch (error) {
            toast.warn("User Logout Failed", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }); 
            console.log(error);
        }
        
    }
  return (
    <Appbar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Resume Builder
          </Link>
        </Typography>
        <Stack direction="row" spacing={2}>
          {check && (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Stack>
        <ToastContainer />
      </Toolbar>
    </Appbar>
  );
}

export default Navbar
