import React from 'react'

const Uploadphoto = () => {
  return (
    <>
    <form className='formBlock'>
        <div className="form-group">
            <input type="file" className="form-control" />
        </div>
        <div className="form-group">
            <button className="btn btn-info">Upload Photo</button>
        </div>
    </form>
    </>
  )
}

export default Uploadphoto