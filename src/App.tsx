import React from "react";
import UserCard from "./UserCard";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Lista de usuarios</h1>
      <UserCard name="Juan Perez" age={29} isActive={true} />
      <UserCard name="Ana Garcia" age={34} isActive={false} />
      <UserCard name="Carlos Lopez" age={23} isActive={true} />
    </div>
  );
};
export default App;
