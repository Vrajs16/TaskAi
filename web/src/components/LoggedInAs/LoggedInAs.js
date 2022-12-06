import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoggedInAs = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Hello</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        {JSON.stringify(user, null, 2)}
      </div>
    )
  );
};

export default LoggedInAs;
