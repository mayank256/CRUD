import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get('https://6583ceda4d1ee97c6bce50ed.mockapi.io/Crud/my-crudop')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios.delete(`https://6583ceda4d1ee97c6bce50ed.mockapi.io/Crud/my-crudop/${id}`).then(() => {
      getData();
    });
  }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2>READ OPERATION</h2>
      <br/>
      <Link className="btn btn-primary" to='/'>Create</Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => (
            <tr key={eachData.id}>
              <th scope="row">{eachData.id}</th>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>
                <Link to="/update">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => setToLocalStorage(eachData.id, eachData.name, eachData.email)}
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button type="button" className="btn btn-danger" onClick={() => handleDelete(eachData.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Read;
