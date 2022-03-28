import React from 'react'

const UpdatePassword = () => {
  return (
    <>
    <form className='formBlock'>
        <h2>Update Password</h2>
        <div className="form-group">
            <input 
            type="password" 
            name='password' 
            className="form-control" 
            placeholder="Enter password" />
        </div>

        <div className="form-group">
            <input 
            type="password" 
            name="confirmpassword" 
            className="form-control" 
            placeholder="Enter password again" />
        </div>

        <div className="form-group">
            <button 
            className="btn btn-info">Upload Password</button>
        </div>
    </form>
    </>
  )
}

export default UpdatePassword