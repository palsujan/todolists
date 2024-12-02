- Fetch API Data
- Create Search Functionality

-- All code are in one Signle page below here
    
    import "./styles.css";
    import { useState, useEffect } from "react";
    
    export default function App() {
      const [todos, setTodos] = useState([]);
      const [search, setSearch] = useState("");
      const [inputValue, setInputValue] = useState("");
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://dummyjson.com/todos");
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            setTodos(data.todos);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setSearch(inputValue);
        }, 500);
    
        return () => clearTimeout(timer);
      }, [inputValue]);
    
      const handleChange = (e) => {
        setInputValue(e.target.value);
      };
    
      const filteredTodos = todos.filter((todo) =>
        todo.todo.toLowerCase().includes(search.toLowerCase())
      );
    
      return (
        <div className="App">
          <h1>Search Todos List</h1>
          <input
            type="text"
            value={inputValue}
            placeholder="Type Something"
            onChange={handleChange}
          />
          <div className="todo-row">
            {filteredTodos.map((todo) => (
              <div key={todo?.id} className="todo-col">
                <p>
                  UserId: <strong>{todo?.userId}</strong>
                </p>
                <p>{todo?.todo}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

