import { useState } from "react";
import General from "./General.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

import "../App.css";

function App() {
  // const [generalData, setGeneralData] = useState({
  //   firstName: "Alex",
  //   lastName: "Inglis",
  //   phone: "(914) 707-1907",
  //   email: "alexinglis7799@gmail.com",
  // });

  const [firstName, setFirst] = useState("Alex");
  const [lastName, setLast] = useState("Inglis");
  const [phone, setPhone] = useState("(914) 707-1907");
  const [email, setEmail] = useState("alexinglis7799@gmail.com");

  const [school, setSchool] = useState("Dalhousie University");
  const [study, setStudy] = useState("Psychology & Philosophy");
  const [yearGrad, setGrad] = useState("2021");
  const [schools, setSchools] = useState([]);

  const [company, setCompany] = useState("HESS");
  const [position, setPosition] = useState("Teacher");
  const [responsibilities, setResponsibilities] = useState(
    "Taught English, Science, art, and cooking to children ages 3-13."
  );
  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();

  return (
    <>
      <div className="application">
        <div>
          <General
            firstName={firstName}
            lastName={lastName}
            phone={phone}
            email={email}
            setFirst={setFirst}
            setLast={setLast}
            setEmail={setEmail}
            setPhone={setPhone}
          />
        </div>
        <div>
          <Education
            school={school}
            study={study}
            yearGrad={yearGrad}
            setSchool={setSchool}
            setStudy={setStudy}
            setGrad={setGrad}
            schools={schools}
            setSchools={setSchools}
          />
        </div>
        <div>
          <Experience
            company={company}
            position={position}
            responsibilities={responsibilities}
            dateStart={dateStart}
            dateEnd={dateEnd}
            setCompany={setCompany}
            setPosition={setPosition}
            setResponsibilities={setResponsibilities}
            setDateStart={setDateStart}
            setDateEnd={setDateEnd}
          />
        </div>
      </div>
      <div className="applicationRender">
        <h2>{firstName + " " + lastName}</h2>
        <p>{email}</p>
        <p>{phone}</p>
        <h3>Education</h3>
        <p>{school}</p>
        <p>{study}</p>
        <p>Graduated: {yearGrad}</p>
        <h3>Experience</h3>
        <p>{company}</p>
        <p>{position}</p>
        <p>{responsibilities}</p>
        <p>
          Started: <console className="log">{dateStart}</console>
        </p>
        <p>
          Ended: <console className="log">{dateEnd}</console>
        </p>

        {/* <p>{dateStartString}</p>
        <p>{dateEnd.toDateString()}</p> */}
      </div>
    </>
  );
}

export default App;
