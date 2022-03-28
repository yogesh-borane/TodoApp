import React from 'react'

const RemoveAccount = () => {
  return (
    <>
    <form className='formBlock'>
        <div className="form-group">
            <input type="file" className="form-control" />
        </div>
        <div className="form-group">
            <button className="btn btn-info">Delete Account</button>
        </div>
    </form>
    </>
  )
}

export default RemoveAccount