import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FirstExperience from "./Experience/FirstExperience";
import SecondExperiece from "./Experience/SecondExperiece";

function ExperienceDetail({
  experiencefirst,
  experiencesecond,
  updateExperience,
}) {
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
        <h3>Experience</h3>
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
                  <Tab label="Experience 1" value="1" />
                  <Tab label="Experience 2" value="2" />
                </TabList>
              </div>
              <TabPanel value="1" sx={{ width: "100%" }}>
                <FirstExperience
                  experience={experiencefirst}
                  updateExperience={updateExperience}
                />
              </TabPanel>
              <TabPanel value="2" sx={{ width: "100%" }}>
                <SecondExperiece
                  experience={experiencesecond}
                  updateExperience={updateExperience}
                />
              </TabPanel>
            </TabContext>
          </div>
        </>
      )}
    </div>
  );
}

export default ExperienceDetail;
