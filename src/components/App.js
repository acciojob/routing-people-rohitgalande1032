
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import 'regenerator-runtime/runtime';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserList from "./UserList";
import UserProfile from "./UserProfile";

const App = () => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  console.log(list)

  const getData = () => {
    setLoading(true)
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response=> response.json())
      .then(data=> {
        setList(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(()=>{
    getData()
  }, [])

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<UserList list={list} loading={loading}/>}/>
        <Route path="/users/:id" element={<UserProfile list={list} loading={loading}/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  )
}

export default App
