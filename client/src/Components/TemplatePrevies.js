import React, { useContext, useEffect, useState } from 'react'
import {saveAs} from "file-saver"
import { UserContext } from '../context/GlobalState'
import { db } from "../firebaseConfig/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

import CircularProgress from "@mui/material/CircularProgress";
import {templateDetail} from "./templatesdata"
function TemplatePrevies() {
  
  const [allData, setAllData] = useState([]);
  const {setCheck} = useContext(UserContext)
  const [loading, setLoading] = useState(true);
  const createanddownloadpdf = async(id)=>{
    setLoading(true)
      const {
        personaldetail,
        devskill,
        programmingskill,
        experiencefirst,
        experiencesecond,
        projectfirst,
        secondproject,
        thirdproject,
        educationaldetailofschool,
        educationaldetailofcollege,
      } = allData[0];
    fetch("http://localhost:5000/create-pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        id: id,
        personaldetail,
        devskill,
        programmingskill,
        experiencefirst,
        experiencesecond,
        projectfirst,
        secondproject,
        thirdproject,
        educationaldetailofschool,
        educationaldetailofcollege,
      }),
    }).then((res) => {
      res.arrayBuffer().then((res) => {
        var blob = new Blob([res], { type: "application/pdf" });
        saveAs(blob, "newPdf");
        setLoading(false)
      });
    });

  }

  const GetData = () => {
    return localStorage.getItem("userId");
  };
  
    useEffect(() => {
       const getResumeDetailfromFirestore = async () => {
         const id = GetData();
         const docref = doc(db, "resume", id);
         const docSnap = await getDoc(docref);
         const newData = [docSnap.data()];
         setAllData([...newData]);
       };
       setLoading(false)
       getResumeDetailfromFirestore();
       setCheck(true)
    },[setCheck]);


  return (
    <>
      {loading ? (
        <div className="loading">
          <CircularProgress size="10rem" />
        </div>
      ) : (
        <div className="root root1">
          <div style={{ textAlign: "center", padding: "1rem 0 1rem 0" }}>
            <h1
              style={{ fontFamily: "Gentium Plus, serif", fontWeight: "bold" }}
            >
              Resume Template's
            </h1>
            <hr></hr>
          </div>
          <div className="containtemplate">
            {
              templateDetail.map((data)=>{
                return (
                  <div
                    className="containtemplateimage"
                    onClick={() => createanddownloadpdf(data.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={data.src}
                      alt=""
                      style={{ width: "100%", height: "100%  " }}
                    ></img>
                  </div>
                );
              })
            }

          </div>
        </div>
      )}
    </>
  );
}

export default TemplatePrevies