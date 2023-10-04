import { useState } from "react";
// import handleEducation from "./handleEducation.jsx";
/* eslint-disable react/prop-types */
function Education({ school, study, yearGrad, setSchool, setStudy, setGrad }) {
  const [isEduFormVisible, setEduFormVisibility] = useState(true);
  //   const schools = [];

  const toggleFormVisibility = () => {
    setEduFormVisibility(!isEduFormVisible);
  };
  return (
    <div className="education">
      <h2>Education</h2>
      {isEduFormVisible && (
        <form className="educationForm">
          <label>School</label>
          <input
            type="text"
            value={school}
            onChange={(event) => setSchool(event.target.value)}
          ></input>

          <label>Title of Study</label>
          <input
            type="text"
            value={study}
            onChange={(event) => setStudy(event.target.value)}
          />
          <label>Year of Completion</label>
          <input
            type="text"
            value={yearGrad}
            onChange={(event) => setGrad(event.target.value)}
          />
        </form>
      )}{" "}
      {!isEduFormVisible && (
        <>
          <button onClick={toggleFormVisibility}>{school}</button>
        </>
      )}
      <button type="button" className="addEdu" onClick={toggleFormVisibility}>
        Add More
      </button>
    </div>
  );
}

// const schoolList() {
//     return (
//         <ul>

//         </ul>
//     )
// }

export default Education;
