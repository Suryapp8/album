import React from 'react'
import "./User.css"

function User({id, name, onDelete}) {
    const handleDelete =()=>{
        onDelete(id)
    }
  return (
    <div className='container'>
      <div className='make-a-line'>
        <span className='title'>{name}</span>
        <button className='dlt-btn' onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default User
