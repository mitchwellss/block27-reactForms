import { useState } from "react";
import axios from "axios";

function SignUpForm({setToken}) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);



  async function handleSubmit(event) {
    event.preventDefault();

    try {   
        const {data} = await axios.post ('https://fsa-jwt-practice.herokuapp.com/signup', {username,  password})
         
      console.log('data return: ', data);

      
      
      setToken(data.token)
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value = {username} onChange={(event) => setUserName(event.target.value)}/>
        </label>


        <label>
          Password:
          <input
            value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
         
       
        <button>Submit</button>
      </form>
    </>
  );
}

export default SignUpForm;
