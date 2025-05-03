import { signIn } from "@/auth";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <h2 className=" text-white text-2xl text-center font-bold">
        Iniciar Sesión
      </h2>

      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button
          className="bg-btnBlue rounded-full px-4 py-2 my-2 flex items-center gap-4 text-white cursor-pointer"
          type="submit"
        >
          <div className="bg-white p-1 rounded-full">
            <Image
              src={"/google-logo.png"}
              alt="google"
              width={22}
              height={22}
            />
          </div>
          Signin with Google
        </button>
      </form>
    </div>
  );
}
