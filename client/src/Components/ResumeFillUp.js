import React, {  useContext, useEffect,  useState } from "react";
import { UserContext } from "../context/GlobalState";
import EducationDetail from "./ResumeFiilUpcomponenets/EducationDetail";
import ExperienceDetail from "./ResumeFiilUpcomponenets/ExperienceDetail";
import PersonalDetail from "./ResumeFiilUpcomponenets/PersonalDetail";
import ProjectDetail from "./ResumeFiilUpcomponenets/ProjectDetail";
import Skill from "./ResumeFiilUpcomponenets/Skill";
import { db } from "../firebaseConfig/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const GetData = () => {
  return localStorage.getItem("userId");
};

function ResumeFillUp() {
  const [loading, setLoading] = useState(true);
  const { setCheck } = useContext(UserContext);
  const [allData, setAllData] = useState([]);
  const navigate = useNavigate()
 
  const combine = (object, vari) => {
    try {
       vari = {
         ...vari,
         ...object,
       };
       const newData = [vari];
       setAllData([...newData]);
    } catch (error) {
      console.log(error)
    }  
    return;
   
  };

  const updateProjects = (object, detail) => {
    let vari = allData[0];

      if (detail === "projectfirst") {
        delete vari.projectfirst;
        combine(object, vari);
        return;
      }
   

    if (detail === "secondproject") {
      delete vari.secondproject;
      combine(object, vari);
      return;
    }
    if (detail === "thirdproject") {
      delete vari.thirdproject;
      combine(object, vari);
      return;
    }
  };

  const updateExperience = (object, detail) => {
    let vari = allData[0];
    if (detail === "experiencefirst") {
      delete vari.experiencefirst;
      combine(object, vari);
      return; 
    }
    if (detail === "experiencesecond") {
      delete vari.experiencesecond;
      combine(object, vari);
      return;
    }
  };

  

  const updateSkill = (object, detail) => {
    let vari = allData[0];
    if (detail === "devskill") {
      delete vari.devskill;
      combine(object, vari);
      return;
    }
    if (detail === "programmingskill") {
      delete vari.programmingskill;
      combine(object, vari);
      return;
    }
  };

 
  useEffect(() => {

    const getResumeDetailfromFirestore = async () => {
    const id = GetData();
    const docref = doc(db, "resume", id);
    const docSnap = await getDoc(docref);
   
    const newData = [docSnap.data()];
    setAllData([...newData]);
    setLoading(false);
    
  };

    getResumeDetailfromFirestore();
    
    setCheck(true);
  }, [setCheck , setLoading ]);
   const movetoTemplate=()=>{
     navigate("/preview")
   }
  return (
    <div>
      {loading ? (
        <div className="loading">
          <CircularProgress size="10rem" />
        </div>
      ) : (
        allData.map((data) => {
          return (
            <div className="root">
              <div className="containDetails">
                <PersonalDetail PersonalDetails={data.personaldetail} />
              </div>
              <div className="containDetails">
                <EducationDetail
                  educationaldetailofcollege={data.educationaldetailofcollege}
                  educationaldetailofschool={data.educationaldetailofschool}
                />
              </div>
              <div className="containDetails">
                <ProjectDetail
                  projectfirst={data.projectfirst}
                  secondproject={data.secondproject}
                  thirdproject={data.thirdproject}
                  updateProjects={updateProjects}
                />
              </div>
              <div className="containDetails">
                <ExperienceDetail
                  experiencefirst={data.experiencefirst}
                  experiencesecond={data.experiencesecond}
                  updateExperience={updateExperience}
                />
              </div>
              <div className="containDetails">
                <Skill
                  devskill={data.devskill}
                  programmingskill={data.programmingskill}
                  updateSkill={updateSkill}
                />
              </div>

              <div style={{ position: "relative" }}>
                <Button
                  onClick={movetoTemplate}
                  endIcon={<ArrowForwardIcon />}
                  variant="contained"
                  sx={{
                    position: "absolute",
                    right: "0px",
                    padding: "1rem 0.8rem 1rem 0.8rem",
                    fontSize: "1.4rem",
                  }}
                >
                  Select Template
                </Button>
                
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default ResumeFillUp;


