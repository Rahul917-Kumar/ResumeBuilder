import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import CollegeDetail from './EducationalDetail/CollegeDetail';
import SchoolDetail from './EducationalDetail/SchoolDetail';
function EducationDetail({
  educationaldetailofcollege,
  educationaldetailofschool
}) {
  
    const [hideForm, setHideForm] = useState(false);
    

  return (
    <div>
      <div
        className="details"
        onClick={(e) => {
          setHideForm(!hideForm);
        }}
        style={{ cursor: "pointer" }}
      >
        <h3>Educational Detail</h3>
      </div>
      {hideForm && (
        <>
          <div className="settingmargin">
            {/* make it a grid */}
            <CollegeDetail
              educationaldetailofcollege={educationaldetailofcollege}
            />
          </div>
          <div className="settingmargin">
            {/* make it a grid */}
            <SchoolDetail
              educationaldetailofschool={educationaldetailofschool}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default EducationDetail