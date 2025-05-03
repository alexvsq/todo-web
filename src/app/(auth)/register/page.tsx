import Link from "next/link";

export default function page() {
  return (
    <div>
      <h2 className=" text-white text-2xl font-bold">Crear Cuenta</h2>

      <form action="" className=" w-[350px]">
        <p className=" flex flex-col gap-2 my-2">
          <label htmlFor="email" className=" text-white-bg">
            Correo
          </label>
          <input
            type="email"
            name="email"
            id="email-log"
            className=" bg-white-bg rounded-full px-4 py-2 text-sm"
          />
        </p>

        <p className=" flex flex-col gap-2 my-2">
          <label htmlFor="" className=" text-white-bg">
            Contraseña
          </label>
          <input
            type="password"
            name="password-register"
            id="password-register"
            className=" bg-white-bg rounded-full px-4 py-2 text-sm"
          />
        </p>

        <p className=" flex flex-col gap-2 my-2">
          <label htmlFor="password-register-repeat" className=" text-white-bg">
            Repetir Contraseña
          </label>
          <input
            type="password"
            name="password-repeat"
            id="password-register-repeat"
            className=" bg-white-bg rounded-full px-4 py-2 text-sm"
          />
        </p>

        <button className="bg-btnBlue rounded-full px-4 py-2 my-2 w-full text-white cursor-pointer">
          Ingresar
        </button>
      </form>

      <footer className=" bg-pimary-lite flex flex-col px-6 py-2 rounded-xl my-4">
        <Link
          href={"/home/login"}
          className="bg-white-bg rounded-full px-4 py-2 my-2 text-center cursor-pointer"
        >
          Iniciar Sesión
        </Link>
      </footer>
    </div>
  );
}
