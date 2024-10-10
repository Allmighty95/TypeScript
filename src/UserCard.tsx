import React from "react";

interface UserCardProps {
  name: string;
  age: number;
  isActive: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ name, age, isActive }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>{name}</h2>
      <p>Edad: {age}</p>
      <p>Estado: {isActive ? "Activo" : "Inactivo"}</p>
    </div>
  );
};
export default UserCard;
