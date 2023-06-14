import React from "react";
import useUsers from "../../../hooks/useUsers";
import ManageUsersCard from "./ManageUsersCard";

const ManageUsers = () => {
  const [users] = useUsers();
  return (
    <div>
      <div>
        {users.map((user) => (
          <ManageUsersCard key={user._id} user={user}></ManageUsersCard>
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
