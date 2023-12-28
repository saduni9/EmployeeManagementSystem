//import React from 'react'

import axios from "axios";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/employee/details/" + id)

      .then((result) => {
        setEmployee(result.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleLogout = () => {
    axios
      .get("http://localhost:3000/employee/logout")
      .then((result) => {
        if (result.data.Status) {
          localStorage.removeItem("valid")
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="p-2 d-flex justify-content-center shadow">
        <h4>Employee Management System</h4>
      </div>
      <div className="d-flex justify-content-center flex-column align-items-center mt-3">
        <h3>Name: {employee.name}</h3>
        <h3>Email: {employee.email}</h3>
        <h3>Salary: {employee.salary}</h3>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary mb-2 mr-2">Edit</button>
        <button className="btn btn-danger mb-2 mr-2" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default EmployeeDetails;
