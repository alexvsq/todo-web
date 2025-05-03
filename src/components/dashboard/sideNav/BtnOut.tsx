import { signOut } from "@/auth";

export default function BtnOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button
        className="bg-danger rounded-full px-4 py-2 my-2 text-white cursor-pointer"
        type="submit"
      >
        Signout
      </button>
    </form>
  );
}
