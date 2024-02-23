import { useState } from "react";
import axios from "axios";

function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState('bad');
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      const response = await axios.get(
        "https://fsa-jwt-practice.herokuapp.com/authenticate"
      );
      setSuccessMessage(response.message);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <h2>Authenticate: </h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate: </button>
    </>
  );
}
export default Authenticate;
