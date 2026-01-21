import { useState } from "react";

function AddUser({ addUser }) {
  const [name, setName] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name) return;
    addUser({ name });
    setName("");
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default AddUser;
