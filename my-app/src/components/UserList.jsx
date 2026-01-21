function UserList({ users, deleteUser, setEditUser }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => setEditUser(user)}>Edit</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
