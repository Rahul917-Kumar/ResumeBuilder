import React, { useState } from 'react'
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FirstProject from './ProjectDetails/FirstProject';
import SecondProject from './ProjectDetails/SecondProject';
import ThirdProject from './ProjectDetails/ThirdProject';

function ProjectDetail({
  projectfirst,
  secondproject,
  thirdproject,
  updateProjects,
  getResumeDetailfromFirestore,
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
        <h3>Project Detail</h3>
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
                  <Tab label="Project 1" value="1" />
                  <Tab label="Project 2" value="2" />
                  <Tab label="Project 3" value="3" />
                </TabList>
              </div>
              <TabPanel value="1" sx={{ width: "100%" }}>
                <FirstProject
                  projectfirst={projectfirst}
                  updateProjects={updateProjects}
                  
                />
              </TabPanel>
              <TabPanel value="2" sx={{ width: "100%" }}>
                <SecondProject
                  secondproject={secondproject}
                  updateProjects={updateProjects}
                  
                />
              </TabPanel>
              <TabPanel value="3" sx={{ width: "100%" }}>
                <ThirdProject
                  thirdproject={thirdproject}
                  updateProjects={updateProjects}
                  
                />
              </TabPanel>
            </TabContext>
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectDetail