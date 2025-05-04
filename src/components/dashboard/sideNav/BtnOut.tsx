"use client";
import { signOut } from "next-auth/react";

export default function BtnOut() {
  return (
    <button
      onClick={() => signOut()}
      className="bg-danger rounded-full px-4 py-2 my-2 text-white cursor-pointer"
    >
      Signout
    </button>
  );
}
