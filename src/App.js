import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import "./App.css"
import User from "./User"



export default function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetchData()
  },[])

  //fetch the data
  const fetchData = async ()=>{
   await fetch("https://jsonplaceholder.typicode.com/albums")
   .then((res)=> res.json())
   .then((data) => setUsers(data))
   .catch((err)=>{
    console.log(err)
   })
  }

  //add the data
  const addData = async (name)=>{
    console.log(name)
    await fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify({
        title: name
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
       }
    })
    .then((res)=>{
      
        return res.json()
      
    })
    .then((data)=>{
      setUsers((users) => [...users, data])
      alert("New title added")
    })
    .catch((err) =>{
      console.log(err)
    })
  }

  //delete the data
  const onDelete = async(id)=>{
    await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`,{
      method: "DELETE",
    })
    .then((res)=>{
      if(res.status !== 200){
        return
      }else{
        setUsers(users.filter((user)=>{
          return user.id !== id
        }))
      }
    })
  }
  return (
    <div>
      <h1 className="heading">Album by Coding Ninja</h1>
      <br />
      <AddUser  addData={addData}/>
      <div className="container">
        
          {
            users.map((user)=>(
              <p className="container1">
                <User id={user.id} key={user.id} name={user.title} onDelete={onDelete} />
              </p>
            ))
          }
        
      </div>
      
    </div>
  )
}

