import React from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import UserButton from "./features/auth/_components/UserButton";

const Home = () => {
  return (
    <div>
      Logged In !
      <UserButton />
    </div>
  );
};

export default Home;
