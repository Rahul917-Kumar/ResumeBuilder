import React, { useState } from 'react'
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { db } from "../../firebaseConfig/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import Button from "@mui/material/Button";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

function PersonalDetail({PersonalDetails}) {
  const [personaldetail , setPersonalDetail]  = useState({
    email:PersonalDetails.email,
    firstname:PersonalDetails.firstname,
    lastname:PersonalDetails.lastname,
    githublink:PersonalDetails.githublink,
    phoneno:PersonalDetails.phoneno
  })
  const [hideForm , setHideForm] = useState(false)
  const handleChange = (e) =>{
    const {name , value} = e.target
    setPersonalDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const updateData = async(e)=>{
    e.preventDefault()
    const id = localStorage.getItem("userId");
    const ref = doc(db ,"resume" , id)
    const updatedData = {
      personaldetail:{
        email:personaldetail.email,
        firstname:personaldetail.firstname,
        lastname:personaldetail.lastname,
        githublink:personaldetail.githublink,
        phoneno:personaldetail.phoneno
      }
    }
    await updateDoc(ref , updatedData).then(()=>{
      console.log("update succesfull")
    })
  } 

  return (
    <div>
      <div
        className="details"
        onClick={() => {
          setHideForm(!hideForm);
        }}
        style={{ cursor: "pointer" }}
      >
        <h3>Personal Detail</h3>
      </div>
      {hideForm && (
        <>
          <div className="settingmargin">
            <form>
              <div className="grid">
                <div>
                  {/* left side data */}

                  <TextField
                    fullWidth
                    label="FirstName"
                    id="fullWidth"
                    sx={{ m: 1 }}
                    name="firstname"
                    value={personaldetail.firstname}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <DriveFileRenameOutlineIcon />{" "}
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    onChange={handleChange}
                    autoComplete="off"
                  />

                  <TextField
                    fullWidth
                    label="Email"
                    id="fullWidth"
                    sx={{ m: 1 }}
                    name="email"
                    value={personaldetail.email}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AlternateEmailIcon />{" "}
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    onChange={handleChange}
                    autoComplete="off"
                  />

                  <TextField
                    fullWidth
                    label="PhoneNumber"
                    id="fullWidth"
                    sx={{ m: 1 }}
                    name="phoneno"
                    value={personaldetail.phoneno}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <ContactPhoneIcon />{" "}
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
                <div>
                  {/* right side data */}

                  <TextField
                    fullWidth
                    label="LastName"
                    id="fullWidth"
                    sx={{ m: 1 }}
                    name="lastname"
                    value={personaldetail.lastname}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <DriveFileRenameOutlineIcon />{" "}
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    onChange={handleChange}
                    autoComplete="off"
                  />

                  <TextField
                    fullWidth
                    label="GithubLink"
                    id="fullWidth"
                    sx={{ m: 1 }}
                    name="githublink"
                    value={personaldetail.githublink}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <InsertLinkIcon />{" "}
                        </InputAdornment>
                      ),
                    }}
                    variant="standard"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div>
                <Button
                  onClick={updateData}
                  variant="outlined"
                  endIcon={<SaveAsIcon />}
                >
                  Save
                </Button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default PersonalDetail