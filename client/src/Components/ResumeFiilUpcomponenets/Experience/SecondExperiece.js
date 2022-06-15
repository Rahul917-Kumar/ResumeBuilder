import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { db } from "../../../firebaseConfig/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DescriptionIcon from "@mui/icons-material/Description";

function SecondExperiece({ experience, updateExperience }) {
  const [experiences, setExperience] = useState({
    organisation: experience.organisation,
    position: experience.position,
    startdate: experience.duration.startdate,
    enddate: experience.duration.enddate,
    firstpoint: experience.description.firstpoint,
    secondpoint: experience.description.secondpoint,
    thirdpoint: experience.description.thirdpoint,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateData = async (e) => {
    e.preventDefault();
    const id = localStorage.getItem("userId");
    const ref = doc(db, "resume", id);
    const updatedData = {
      experiencesecond: {
        organisation: experiences.organisation,
        position: experiences.position,
        duration: {
          startdate: experiences.startdate,
          enddate: experiences.enddate,
        },
        description: {
          firstpoint: experiences.firstpoint,
          secondpoint: experiences.secondpoint,
          thirdpoint: experiences.thirdpoint,
        },
      },
    };

    updateDoc(ref, updatedData).then(() => {
      console.log("update succesfully");
    });

    updateExperience(updatedData, "experiencesecond");

  };

  return (
    <div className="settingmargin">
      <form>
        <div className="grid">
          <div>
            {/* left side data */}
            <TextField
              fullWidth
              label="Organisation"
              id="fullWidth"
              sx={{ m: 1 }}
              name="organisation"
              placeholder="Organisation Name"
              value={experiences.organisation}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CorporateFareIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />
            <TextField
              fullWidth
              label="Position"
              id="fullWidth"
              sx={{ m: 1 }}
              name="position"
              placeholder="Position"
              value={experiences.position}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />
            <TextField
              fullWidth
              label="From"
              id="fullWidth"
              sx={{ m: 1 }}
              name="startdate"
              placeholder="dd-mm-yyyy"
              value={experiences.startdate}
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
              label="To"
              id="fullWidth"
              sx={{ m: 1 }}
              name="enddate"
              placeholder="dd-mm-yyyy"
              value={experiences.enddate}
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
          </div>
          <div>
            {/* right side data */}
            <TextField
              fullWidth
              label="Description"
              id="fullWidth"
              sx={{ m: 1 }}
              name="firstpoint"
              placeholder=""
              value={experiences.firstpoint}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DescriptionIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />
            <TextField
              fullWidth
              label="Description"
              id="fullWidth"
              sx={{ m: 1 }}
              name="secondpoint"
              placeholder=""
              value={experiences.secondpoint}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DescriptionIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />
            <TextField
              fullWidth
              label="Description"
              id="fullWidth"
              sx={{ m: 1 }}
              name="thirdpoint"
              placeholder=""
              value={experiences.thirdpoint}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DescriptionIcon />{" "}
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
  );
}

export default SecondExperiece;
