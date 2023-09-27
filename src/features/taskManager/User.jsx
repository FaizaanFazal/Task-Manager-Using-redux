import { useState, useEffect} from "react";
import axios from "axios";


export const Users= () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [id, setId] = useState(23);
  const [name, setName] = useState('Jazba');

  const handlePostRequest = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', { id, name });
      console.log(response);
      // You can handle the response data here as needed.
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };


   function getUsers(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log(response.status)
      const data = response.data;
      const userNames = data.map((user) => user.name);
      setUsers(userNames);
    })
    .catch((error) => {
      setError("Error fetching users");
    });
  }

  useEffect (() => {
    getUsers();
      
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
          <button onClick={handlePostRequest}>Submit</button>
      </div>
  );
};