import { useEffect, useState } from "react";
import UserForm from "./form/UserForm";
import IconButton from "./userTable/components/IconButton";
import UserTable from "./userTable/UserTable";
import axios from "axios";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(null);
  const [users, setUsers] = useState([]);

  const getAllUsers = () => {
    axios.get("http://localhost:8000/api/v1/users").then((res) => {
      setUsers(res.data);
    });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const data = {
    headerItems: [
      { name: "Id", width: "7%" },
      { name: "Nombre", width: "30%" },
      { name: "email", width: "40%" },
      { name: "Opciones", width: "20%" },
    ],
    rows: users,
  };
  const handleAdd = () => {
    setShowForm(true);
    setIsEditing(false);
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:8000/api/v1/users", data).then(() => {
      getAllUsers();
    });
  };

  return (
    <div className="App">
      <IconButton type="add" color="#278D99" action={handleAdd} />
      {showForm && (
        <UserForm
          setShowForm={setShowForm}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          value={value}
          setValue={setValue}
          onSubmit={onSubmit}
        />
      )}
      <UserTable
        data={data}
        setIsEditing={setIsEditing}
        showForm={setShowForm}
        setValue={setValue}
      />
    </div>
  );
}

export default App;
