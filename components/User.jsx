import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

export default function User({ className }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <img
          onClick={signOut}
          src={session.user.image}
          alt="user-image"
          className="h-10 w-10 cursor-pointer rounded-full p-1 hover:bg-gray-200"
        ></img>
      </>
    );
  }

  return (
    <>
      <button className={`auth-button ${className}`} onClick={signIn}>
        Sign in
      </button>
    </>
  );
}
