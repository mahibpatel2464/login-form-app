import { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h2>User List</h2>

      {users.map((user) => (
        <div key={user.id} style={styles.card}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>City: {user.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
  },
  card: {
    background: "#f4f4f4",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "8px",
  },
};
