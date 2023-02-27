import { useState } from "react";
import { TableFrame } from "../userTable/components/components.styled";
import IconButton from "../userTable/components/IconButton";
import { Input } from "./styles/form.styled";

const UserForm = ({
  setShowForm,
  onSubmit,
  isEditing,
  setIsEditing,
  value,
  setValue,
}) => {
  const [data, setData] = useState(
    value || { name: "", email: "", password: "" }
  );

  const handleNameChange = (e) => {
    const newName = e.target.value;

    const { email, password } = data;
    setData({ name: newName, email, password });
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    const { name, password } = data;
    setData({ name, email: newEmail, password });
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    const { name, email } = data;
    setData({ name, email, password: newPassword });
  };

  return (
    <TableFrame>
      <h3>{isEditing ? "Editar usuario" : "Crear nuevo usuario"}</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        <Input
          value={data.name}
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={handleNameChange}
        />
        <Input
          value={data.email}
          type="text"
          placeholder="Ingresa tu correo"
          onChange={handleEmailChange}
        />
        <Input
          value={data.password}
          type="password"
          placeholder="Ingresa tu contraseña"
          onChange={handlePasswordChange}
        />
      </div>
      <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
        <IconButton
          type="send"
          color="#5CCC83"
          action={() => {
            onSubmit(data);
            setData({ name: "", email: "", password: "" });
            setValue({ name: "", email: "", password: "" });
          }}
        />
        <IconButton
          type="cancel"
          color="#DA4626"
          action={() => {
            setData({ name: "", email: "", password: "" });
            setValue({ name: "", email: "", password: "" });
            setShowForm(false);
            if (isEditing) {
              setIsEditing(false);
            }
          }}
        />
      </div>
    </TableFrame>
  );
};

export default UserForm;
