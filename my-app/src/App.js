import { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import EditUser from "./components/EditUser";

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  // CREATE
  const addUser = (user) => {
    setUsers([...users, { id: Date.now(), ...user }]);
  };

  // DELETE
  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  // UPDATE
  const updateUser = (updatedUser) => {
    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
    setEditUser(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple React CRUD</h2>

      {editUser ? (
        <EditUser editUser={editUser} updateUser={updateUser} />
      ) : (
        <AddUser addUser={addUser} />
      )}

      <UserList
        users={users}
        deleteUser={deleteUser}
        setEditUser={setEditUser}
      />
    </div>
  );
}

export default App;
