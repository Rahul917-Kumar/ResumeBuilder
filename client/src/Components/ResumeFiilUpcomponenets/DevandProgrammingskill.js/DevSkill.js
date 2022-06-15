import React, { useState } from 'react'
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import Button from "@mui/material/Button";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { db } from "../../../firebaseConfig/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

function DevSkill({ devskill, updateSkill }) {
  const [skill, setDevskill] = useState({
    skillfirst: devskill.skillfirst,
    skillsecond: devskill.skillsecond,
    skillthird: devskill.skillthird,
    skillfourth: devskill.skillfourth,
    skillfifth: devskill.skillfifth,
    skillsixth: devskill.skillsixth,
    skillseventh: devskill.skillseventh,
    skilleight: devskill.skilleight,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDevskill((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateData = async (e) => {
    e.preventDefault();
    const id = localStorage.getItem("userId");
    const ref = doc(db, "resume", id);
    const updatedData = {
      devskill: {
        skillfirst: skill.skillfirst,
        skillsecond: skill.skillsecond,
        skillthird: skill.skillthird,
        skillfourth: skill.skillfourth,
        skillfifth: skill.skillfifth,
        skillsixth: skill.skillsixth,
        skillseventh: skill.skillseventh,
        skilleight: skill.skilleight,
      },
    };

    await updateDoc(ref, updatedData).then(() => {
      console.log("update Succesfull");
    });

    updateSkill(updatedData, "devskill");

  };

  return (
    <div className="settingmargin">
      <form>
        <div className="grid">
          <div>
            {/* left side data */}
            <TextField
              fullWidth
              label="Skill"
              id="fullWidth"
              sx={{ m: 1 }}
              name="skillfirst"
              placeholder="Enter Dev Skill"
              value={skill.skillfirst}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SettingsApplicationsIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />
            <TextField
              fullWidth
              label="Skill"
              id="fullWidth"
              sx={{ m: 1 }}
              name="skillsecond"
              placeholder="Enter Dev Skill"
              value={skill.skillsecond}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SettingsApplicationsIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />
            <TextField
              fullWidth
              label="Skill"
              id="fullWidth"
              sx={{ m: 1 }}
              name="skillthird"
              placeholder="Enter Dev Skill"
              value={skill.skillthird}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SettingsApplicationsIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />
            <TextField
              fullWidth
              label="Skill"
              id="fullWidth"
              sx={{ m: 1 }}
              name="skillfourth"
              placeholder="Enter Dev Skill"
              value={skill.skillfourth}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SettingsApplicationsIcon />{" "}
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
              label="Skill"
              id="fullWidth"
              sx={{ m: 1 }}
              name="skillfifth"
              placeholder="Enter Dev Skill"
              value={skill.skillfifth}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SettingsApplicationsIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />
            <TextField
              fullWidth
              label="Skill"
              id="fullWidth"
              sx={{ m: 1 }}
              name="skillsixth"
              placeholder="Enter Dev Skill"
              value={skill.skillsixth}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SettingsApplicationsIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />
            <TextField
              fullWidth
              label="Skill"
              id="fullWidth"
              sx={{ m: 1 }}
              name="skillseventh"
              placeholder="Enter Dev Skill"
              value={skill.skillseventh}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SettingsApplicationsIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />
            <TextField
              fullWidth
              label="Skill"
              id="fullWidth"
              sx={{ m: 1 }}
              name="skilleight"
              placeholder="Enter Dev Skill"
              value={skill.skilleight}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SettingsApplicationsIcon />{" "}
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

export default DevSkill