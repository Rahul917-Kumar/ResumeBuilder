import React from 'react'
import CodeIcon from "@mui/icons-material/Code";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { db } from "../../../firebaseConfig/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

function Programmingskill({ programmingskill, updateSkill }) {
  const [skill, setprogrammingskill] = React.useState({
    languagefirst: programmingskill.languagefirst,
    languagesecond: programmingskill.languagesecond,
    languagethird: programmingskill.languagethird,
    languagefourth: programmingskill.languagefourth,
    /* languagefifth: programmingskill.languagefifth,
    languagesixth: programmingskill.languagesixth, */
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setprogrammingskill((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const updateData = async (e) => {
    e.preventDefault();
    const id = localStorage.getItem("userId");
    const ref = doc(db, "resume", id);

    const updatedData = {
      programmingskill: {
        languagefirst: skill.languagefirst,
        languagesecond: skill.languagesecond,
        languagethird: skill.languagethird,
        languagefourth: skill.languagefourth,
        /* languagefifth: skill.languagefifth,
        languagesixth: skill.languagesixth, */
      },
    };

    await updateDoc(ref, updatedData).then(() => {
      console.log("updated succesfully");
    });

    updateSkill(updatedData, "programmingskill");
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
              name="languagefirst"
              placeholder="Enter Programming Skill"
              value={skill.languagefirst}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CodeIcon />{" "}
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
              name="languagesecond"
              placeholder="Enter Programming Skill"
              value={skill.languagesecond}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CodeIcon />{" "}
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
              name="languagethird"
              placeholder="Enter Programming Skill"
              value={skill.languagethird}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CodeIcon />{" "}
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
              name="languagefourth"
              placeholder="Enter Programming Skill"
              value={skill.languagefourth}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CodeIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />
            {/* <TextField
              fullWidth
              label="Skill"
              id="fullWidth"
              sx={{ m: 1 }}
              name="languagefifth"
              placeholder="Enter Programming Skill"
              value={skill.languagefifth}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CodeIcon />{" "}
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
              name="languagesixth"
              placeholder="Enter Programming Skill"
              value={skill.languagesixth}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CodeIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            /> */}
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

export default Programmingskill