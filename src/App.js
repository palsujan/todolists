import { useState, useEffect } from 'react';
import './App.css';
import SearchInput from './components/SearchInput';
import Todolist from './components/Todolist';

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    const fetchData = async() =>{
      try{
          const response = await fetch("https://dummyjson.com/todos");
          if(!response.ok){
            throw new Error("Faild to fetch data");
          }
          const data = await response.json();
          console.log(data);
      } catch(error){
        console.log("Error", error);
      }
    }
    fetchData();
  },[]);
  // const filteredData = todos.filter(()=>)
  return (
    <div className="App">
      <h1>Text Center</h1>
      <SearchInput search={search} setSearch={setSearch}/>
      <Todolist  />
    </div>
  );
}

export default App;
