//import React from 'react'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';

const Start = () => {
  const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:3000/verify')
    .then(result => {
        if(result.data.Status){
          if (result.data.role ==="admin"){
              navigate('/dashboard')
          }else{
            navigate('/employee_details/'+result.data.id)
          }
        } 
        
    }).catch(err => console.log(err))
  }, [])
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage2">
      <div className="p-3 rounded w-25 border loginForm2">
        <h2 className="text-center">Login As</h2>
        <div className="d-flex justify-content-between mt-5 mb-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              navigate("/employee_login");
            }}
          >
            Employee
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              navigate("/adminlogin");
            }}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
