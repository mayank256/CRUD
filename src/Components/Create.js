import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Corrected typo

    console.log("Clicked");

    axios.post(
      'https://6583ceda4d1ee97c6bce50ed.mockapi.io/Crud/my-crudop',
      { name: name, email: email },
      { headers: { "Access-Control-Allow-Origin": "*" } } // Set headers directly in the axios configuration
    )
      .then(response => {
        // Handle the response if needed
        console.log(response);
      })
      .catch(error => {
        // Handle errors if any
        console.error(error);
      });
    
      history("/read")
  }

  return (
    <>
      <h2>CREATE </h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default Create;
