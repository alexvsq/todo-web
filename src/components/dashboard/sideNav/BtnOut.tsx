import { signOut } from "@/auth";

export default function BtnOut() {
  const handleOut = async () => {
    await signOut();
  };
  return (
    <button
      onClick={handleOut}
      className="bg-danger rounded-full px-4 py-2 my-2 text-white cursor-pointer"
    >
      Signout
    </button>
  );
}
