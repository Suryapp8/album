import React from 'react'
import "./AddUser.css"
export default function AddUser({addData}) {

    const handleOnSubmit =(e)=>{
        e.preventDefault()
        addData(e.target.name.value);
        e.target.name.value = ""
       }
  return (
    <div>
        <div className='add-title'>
            <form onSubmit={handleOnSubmit}>
                <h2>Add album name</h2>
                <input placeholder='Title' name="name" />
                <button onSubmit={handleOnSubmit}>Add</button>
            </form>
        </div>
      

    </div>
  )
}
