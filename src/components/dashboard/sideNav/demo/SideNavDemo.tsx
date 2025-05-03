import FilterStatus from "./FilterStatus";
import FilterOrder from "./FilterOrder";
import Link from "next/link";

export default function SideNav() {
  return (
    <>
      {/*  SIDE MENU DESKTOP  */}
      <aside className="hidden md:flex flex-col  bg-primary text-white h-screen p-4">
        <header className=" py-4 flex gap-2 items-center">
          <div className=" h-8 w-8 rounded-full bg-white-bg" />
          <p>User Demo</p>
        </header>

        <div>
          <header className="py-4">
            <p className=" text-text-secondary font-semibold text-xl">
              Filtros
            </p>
          </header>

          <FilterStatus />

          <FilterOrder />
        </div>

        <footer className=" flex  justify-center items-end h-full">
          <Link href="/" className="w-full">
            <p className=" bg-danger px-4 py-2 rounded-full w-full my-2 text-center">
              Salir
            </p>
          </Link>
        </footer>
      </aside>
      {/* SIDE MENU MOBILE */}

      <aside className="md:hidden block h-16 bg-primary text-white">
        <header className=" flex justify-between py-3 px-5">
          <div className="flex items-center gap-4">
            <div className=" h-8 w-8 rounded-full bg-white-bg" />

            <p>User Demo</p>
          </div>

          <aside>
            <Link href="/" className="w-full">
              <p className=" bg-danger px-4 py-2 rounded-full w-full my-2 text-center">
                Salir
              </p>
            </Link>
          </aside>
        </header>
      </aside>
    </>
  );
}
