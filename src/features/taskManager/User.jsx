import { useState, useEffect} from "react";
import axios from "axios";
export const Users= () => {
const [users, setUsers] = useState([]);
const [error, setError] = useState(null);

useEffect (() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response)
    const data = response.data;
    const userNames = data.map((user) => user.name);
    setUsers(userNames);
  })
  .catch((error) => {
    setError("Error fetching users");
  });
    
}, []);

return (
    <div>
    <h1>Users</h1>
    {error && <p>{error}</p>}
        <ul>
        {users.map((user) => (
        <li key={user}>{user}</li>
        ))}
        </ul>
    </div>
);
};