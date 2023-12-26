//import React from 'react'

import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddCategory() {
    const [category, setCategory] = useState()
    const navigate = useNavigate ()
    const handleSubmit =(e) => {
        e.preventDefault() 

      

        axios.post('http://localhost:3000/auth/add_category', { category })

        .then(result => {
            if(result.data.Status){
                  navigate('/dashboard/category')
            }else{
                alert(result.data.Error)
            }
        })
        .catch(err => {
            console.log(err);
        })
        
    }
  return (
    <div className='d-flex justify-content-center align-items-center h-100'>
    <div className='p-3 rounded w-25 border shadow-lg'>

        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Category</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                
                <input
                    type="text"
                    name="category"
                    placeholder="Enter Category"
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-control rounded-0"
                />
            </div>

            <button
                type="submit"
                className='btn btn-block btn-info rounded-pill'
                style={{ marginBottom: '10px' }}
            >
                + Add Category
            </button>
        </form>
    </div>
</div>



  )
}

export default AddCategory