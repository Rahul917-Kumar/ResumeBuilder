import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../context/GlobalState";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig/firebaseConfig";
import {  doc, setDoc} from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import SendIcon from "@mui/icons-material/Send";



function Dashboard() {
 
  const [uid , setUid] = useState("")
  const [email , setEmail] = useState("")
  
  const navigate = useNavigate();
  const haveone = useRef(true)
  const { user, setCheck } = useContext(UserContext);
  
  

  const checkForExsitingUser = async () => {
    console.log("isnide func");
    const docref = doc(db, "resume",uid);
    const docSnap = await getDoc(docref);
    if (docSnap.exists()) {
      console.log("exsits");
      //setHave(true);
      console.log("inside func");

      haveone.current = true;
    } else {
      //setHave(false);
      haveone.current = false;
    }
  }; 
  const handleCreateResume = () => {
  
    if (user) {
      
      checkForExsitingUser().then(() => {
       console.log("haveone");
        console.log(haveone.current);
        if (!haveone.current) {
           console.log("checking after lots of problem");
          console.log("userin");
          const ref = doc(db, "resume", uid);
          setDoc(ref, {
            personaldetail: {
              firstname: "",
              lastname: "",
              email: "",
              phoneno: "",
              githublink: "",
            },
            educationaldetailofcollege: {
              college: "",
              qualification: "",
              cgpa: "",
              startyear: "",
              endyear: "",
              city: "",
              state: "",
            },
            educationaldetailofschool: {
              school: "",
              qualification: "",
              percentage: "",
              endyear: "",
              city: "",
              state: "",
            },
            projectfirst: {
              title: "",
              link: "",
              description: {
                firstpoint: "",
                secondpoint: "",
                thirdpoint: "",
              },
            },
            secondproject: {
              title: "",
              link: "",
              description: {
                firstpoint: "",
                secondpoint: "",
                thirdpoint: "",
              },
            },

            thirdproject: {
              title: "",
              link: "",
              description: {
                firstpoint: "",
                secondpoint: "",
                thirdpoint: "",
              },
            },
            experiencefirst: {
              organisation: "",
              position: "",
              duration:{
                startdate:"",
                enddate:""
              },
              description: {
                firstpoint: "",
                secondpoint: "",
                thirdpoint: "",
              },
            },
            experiencesecond: {
              organisation: "",
              position: "",
              duration: {
                startdate:"",
                enddate:""
              },
              description: {
                firstpoint: "",
                secondpoint: "",
                thirdpoint: "",
              },
            },
            devskill: {
              skillfirst: "",
              skillsecond: "",
              skillthird: "",
              skillfourth: "",
              skillfifth: "",
              skillsixth: "",
              skillseventh: "",
              skilleight: "",
            },
            programmingskill: {
              languagefirst: "",
              languagesecond: "",
              languagethird: "",
              languagefourth: "",
              languagefifth: "",
              languagesixth: "",
            },
          }).then(()=>{
            navigate("/resume");
          });
        }else{
          navigate("/resume");
        }
      });
    }

    
  };

  
  
  useEffect(() => {
    const dataEmail =localStorage.getItem("userEmail") 
    const dataId =localStorage.getItem("userId") 
    //console.log(data)
    let name = dataEmail;
    name = name.split("@");
    setEmail(name[0])
    setUid(dataId)
    setCheck(true);
    
     
  }, [setCheck]);
  return (
    <div className="dashboard">
      <div style={{ margin: "1rem 0 1rem 0" }}>
        <p className="para">
          Welcome <span className="name">{email}</span>
        </p>
      </div>
      <div>
        <Button
          variant="contained"
          onClick={handleCreateResume}
          sx={{ p: "1rem 2rem 1rem 2rem ", fontSize: "1.4rem" }}
          endIcon={<SendIcon />}
        >
          Create Resume
        </Button>
      </div>
      
    </div>
  );
}

export default Dashboard;
