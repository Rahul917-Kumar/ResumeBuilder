import React, { useState } from 'react'
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SchoolIcon from "@mui/icons-material/School";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Button from "@mui/material/Button";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { db } from "../../../firebaseConfig/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import PercentIcon from "@mui/icons-material/Percent";

function SchoolDetail({ educationaldetailofschool }) {
  const [educationdetail, setEducationalDetail] = useState({
    school: educationaldetailofschool.school,
    schoolqualification: educationaldetailofschool.qualification,
    percentage: educationaldetailofschool.percentage,
    schoolendyear: educationaldetailofschool.endyear,
    schoolcity: educationaldetailofschool.city,
    schoolstate: educationaldetailofschool.state,
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationalDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateData = async (e) => {
    const id = localStorage.getItem("userId");
    e.preventDefault();
    const ref = doc(db, "resume", id);
    const updatedData = {
      educationaldetailofschool: {
        percentage: educationdetail.percentage,
        city: educationdetail.schoolcity,
        school: educationdetail.school,
        endyear: educationdetail.schoolendyear,
        qualification: educationdetail.schoolqualification,
        state: educationdetail.schoolstate,
      },
    };
    await updateDoc(ref, updatedData).then(() => {
      console.log("updated succedfully");
    });
  };

  return (
    <div>
      <h5>School Detail</h5>
      <form>
        <div className="grid">
          <div>
            {/* for right side detail */}
            <TextField
              fullWidth
              label="School Name"
              id="fullWidth"
              sx={{ m: 1 }}
              name="school"
              value={educationdetail.school}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SchoolIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Qualification"
              id="fullWidth"
              sx={{ m: 1 }}
              placeholder="Ex: AISSCE, ISC "
              name="schoolqualification"
              value={educationdetail.schoolqualification}
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="City"
              id="fullWidth"
              sx={{ m: 1 }}
              name="schoolcity"
              value={educationdetail.schoolcity}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationCityIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
            />
          </div>
          <div>
            {/* for left side detail */}

            <TextField
              fullWidth
              label="To Year"
              placeholder="dd-mm-yyyy"
              id="fullWidth"
              sx={{ m: 1 }}
              name="schoolendyear"
              value={educationdetail.schoolendyear}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarMonthIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="State"
              id="fullWidth"
              sx={{ m: 1 }}
              name="schoolstate"
              value={educationdetail.schoolstate}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationCityIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Percentage"
              id="fullWidth"
              sx={{ m: 1 }}
              name="percentage"
              value={educationdetail.percentage}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PercentIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
            />
          </div>
        </div>
        <Button
          endIcon={<SaveAsIcon />}
          variant="outlined"
          onClick={updateData}
        >
          Save
        </Button>
      </form>
    </div>
  );
}

export default SchoolDetail