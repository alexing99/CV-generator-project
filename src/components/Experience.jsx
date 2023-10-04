/* eslint-disable react/prop-types */
function Experience({
  company,
  position,
  responsibilities,
  dateStart,
  dateEnd,
  setCompany,
  setPosition,
  setResponsibilities,
  setDateStart,
  setDateEnd,
}) {
  return (
    <div className="experience">
      <h2>Experience</h2>

      <form className="experienceForm">
        <label>Company </label>
        <input
          type="text"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />

        <label>Position</label>
        <input
          type="text"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
        />

        <label>Responsibilities</label>
        <textarea
          className="respBox"
          type="text"
          value={responsibilities}
          onChange={(event) => setResponsibilities(event.target.value)}
        />
        <label>Date Start</label>
        <input
          type="date"
          value={dateStart}
          onChange={(event) => setDateStart(event.target.value)}
        />
        <label>Date End</label>
        <input
          type="date"
          value={dateEnd}
          onChange={(event) => setDateEnd(event.target.value)}
        />
        <button>Add More</button>
      </form>
    </div>
  );
}

export default Experience;
