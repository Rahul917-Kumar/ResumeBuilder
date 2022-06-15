import React, { useState } from 'react'
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { db } from "../../../firebaseConfig/firebaseConfig";
import {  doc,  updateDoc } from "firebase/firestore";
import Button from "@mui/material/Button";
import SaveAsIcon from "@mui/icons-material/SaveAs";

function CollegeDetail({educationaldetailofcollege}) {
    const [educationdetail, setEducationalDetail] = useState({
      college: educationaldetailofcollege.college,
      collegequalification: educationaldetailofcollege.qualification,
      cgpa: educationaldetailofcollege.cgpa,
      collegestartyear: educationaldetailofcollege.startyear,
      collegeendyear: educationaldetailofcollege.endyear,
      collegecity: educationaldetailofcollege.city,
      collegestate: educationaldetailofcollege.state
    });
    const handleChange = (e)=>{
        const {name , value} =e.target
        setEducationalDetail((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
    
    const updateData = async(e)=>{
        e.preventDefault()
        const id = localStorage.getItem("userId")
        const ref = doc(db , "resume" , id )
        const updatedData  = {
            educationaldetailofcollege:{
                cgpa:educationdetail.cgpa,
                city:educationdetail.collegecity,
                college:educationdetail.college,
                endyear:educationdetail.collegeendyear,
                qualification:educationdetail.collegequalification,
                startyear:educationdetail.collegestartyear,
                state:educationdetail.collegestate
            }
        }
        await updateDoc(ref,updatedData).then(()=>{
            console.log("updated succedfully")
        })
    }

  return (
    <>
      <h5>College/Institution Detail</h5>
      <form>
        <div className="grid">
          <div>
            {/* for left side detail */}
            <TextField
              fullWidth
              label="College Name"
              id="fullWidth"
              sx={{ m: 1 }}
              name="college"
              value={educationdetail.college}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SchoolIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />
            <TextField
              fullWidth
              label="Qualification"
              id="fullWidth"
              sx={{ m: 1 }}
              name="collegequalification"
              value={educationdetail.collegequalification}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />
            <TextField
              fullWidth
              label="City"
              id="fullWidth"
              sx={{ m: 1 }}
              name="collegecity"
              value={educationdetail.collegecity}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationCityIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />

            <TextField
              fullWidth
              label="CGPA"
              id="fullWidth"
              sx={{ m: 1 }}
              name="cgpa"
              value={educationdetail.cgpa}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div>
            {/* for right side detail */}
            <TextField
              fullWidth
              label="From Year"
              id="fullWidth"
              placeholder="dd-mm-yyyy "
              sx={{ m: 1 }}
              name="collegestartyear"
              value={educationdetail.collegestartyear}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarMonthIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />
            <TextField
              fullWidth
              label="To Year"
              id="fullWidth"
              sx={{ m: 1 }}
              placeholder="dd-mm-yyyy"
              name="collegeendyear"
              value={educationdetail.collegeendyear}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarMonthIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />

            <TextField
              fullWidth
              label="State"
              id="fullWidth"
              sx={{ m: 1 }}
              name="collegestate"
              value={educationdetail.collegestate}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationCityIcon />{" "}
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
    </>
  );
}

export default CollegeDetail