import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DevSkill from "./DevandProgrammingskill.js/DevSkill";
import Programmingskill from "./DevandProgrammingskill.js/Programmingskill";

function Skill({ devskill, programmingskill, updateSkill }) {
  const [hideForm, setHideForm] = useState(false);
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div
        className="details"
        onClick={() => {
          setHideForm(!hideForm);
        }}
        style={{ cursor: "pointer" }}
      >
        <h3>Dev and Progamming Skill</h3>
      </div>
      {hideForm && (
        <>
          <div className="tabs" style={{}}>
            <TabContext value={value}>
              <div>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Dev Skill" value="1" />
                  <Tab label="Programming Skill" value="2" />
                </TabList>
              </div>
              <TabPanel value="1" sx={{ width: "100%" }}>
                <DevSkill devskill={devskill} updateSkill={updateSkill} />
              </TabPanel>
              <TabPanel value="2" sx={{ width: "100%" }}>
                <Programmingskill
                  programmingskill={programmingskill}
                  updateSkill={updateSkill}
                />
              </TabPanel>
            </TabContext>
          </div>
        </>
      )}
    </div>
  );
}


export default Skill;


/* 


*/