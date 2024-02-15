import React, { useState, useEffect } from 'react';
import axios from 'axios';  
import { Link, Navigate } from 'react-router-dom';

export const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios.put(`https://6583ceda4d1ee97c6bce50ed.mockapi.io/Crud/my-crudop/${id}`,
      { name: name, email: email })
      .then(() => {
        Navigate("/read"); // Capitalize 'Navigate'
      })
      .catch(() => {
        console.log("No data updated");
        
      });
  };
  
  return (
    <>
      <h2>UPDATE OPERATION</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            described="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleUpdate} style={{ marginRight: '10px' }}>
          Update
        </button>

        <Link className="btn btn-primary" to='/read'>
          Home
        </Link>
      </form>
    </>
  );
};
