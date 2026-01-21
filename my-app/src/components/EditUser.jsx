import { useState } from "react";

function EditUser({ editUser, updateUser }) {
  const [name, setName] = useState(editUser.name);

  const submit = (e) => {
    e.preventDefault();
    updateUser({ ...editUser, name });
  };

  return (
    <form onSubmit={submit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Update</button>
    </form>
  );
}

export default EditUser;
