import React, { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import TitleIcon from "@mui/icons-material/Title";
import Button from "@mui/material/Button";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { db } from "../../../firebaseConfig/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import DescriptionIcon from "@mui/icons-material/Description";

function SecondProject({ secondproject, updateProjects }) {
  const [project, setProject] = useState({
    link: secondproject.link,
    title: secondproject.title,
    firstpoint: secondproject.description.firstpoint,
    secondpoint: secondproject.description.secondpoint,
    thirdpoint: secondproject.description.thirdpoint,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateData = async (e) => {
    e.preventDefault();
    const id = localStorage.getItem("userId");
    const ref = doc(db, "resume", id);
    const updatedData = {
      secondproject: {
        link: project.link,
        title: project.title,
        description: {
          firstpoint: project.firstpoint,
          secondpoint: project.secondpoint,
          thirdpoint: project.thirdpoint,
        },
      },
    };

    await updateDoc(ref, updatedData).then(() => {
      console.log("updated succesfully");
    });

    updateProjects(updatedData, "secondproject")
  };

  return (
    <div style={{}} className="settingmargin">
      <form>
        <div className="grid">
          <div>
            {/* left side data */}
            <TextField
              fullWidth
              label="Project Title"
              id="fullWidth"
              sx={{ m: 1 }}
              name="title"
              value={project.title}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TitleIcon />{" "}
                  </InputAdornment>
                ),
              }}
              variant="standard"
              onChange={handleChange}
              autoComplete="off"
            />
            <TextField
              fullWidth
              label="Project Link"
              id="fullWidth"
              sx={{ m: 1 }}
              name="link"
              value={project.link}
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
          <div>
            {/* right side data */}
            <TextField
              fullWidth
              label="Techstack"
              id="fullWidth"
              sx={{ m: 1 }}
              name="firstpoint"
              placeholder="Techstack used"
              value={project.firstpoint}
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
              label="Project Description"
              id="fullWidth"
              sx={{ m: 1 }}
              name="secondpoint"
              value={project.secondpoint}
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
              label="Project Description"
              id="fullWidth"
              sx={{ m: 1 }}
              name="thirdpoint"
              value={project.thirdpoint}
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

export default SecondProject;
