/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function General({
  firstName,
  lastName,
  setFirst,
  setLast,
  email,
  setEmail,
  phone,
  setPhone,
}) {
  return (
    <div className="general">
      <h2>General Info</h2>
      <form className="generalForm">
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirst(event.target.value)}
          className="firstName"
        />

        <label>Last Name</label>
        <input
          type="text"
          className="lastname"
          value={lastName}
          onChange={(event) => setLast(event.target.value)}
        />

        <label>E-mail</label>
        <input
          type="email"
          className="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label>Phone</label>
        <input
          type="tel"
          className="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </form>
    </div>
  );
}

export default General;
