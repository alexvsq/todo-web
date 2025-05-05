import BtnOut from "@/src/components/dashboard/sideNav/BtnOut";
import { auth } from "@/auth";
import StatusFilter from "@/src/components/dashboard/sideNav/StatusFilter";
import OrderFilter from "@/src/components/dashboard/sideNav/OrderFilter";

export default async function SideNav() {
  const session = await auth();

  return (
    <>
      {/*  SIDE MENU DESKTOP  */}
      <aside className="hidden md:flex flex-col  bg-primary text-white h-screen p-4">
        <header className=" py-4 flex gap-2 items-center">
          <div className=" h-8 w-8 rounded-full bg-white-bg">
            {session?.user?.image && (
              <img
                src={session?.user?.image ?? "/user.png"}
                alt="user"
                className="h-full w-full rounded-full"
              />
            )}
          </div>
          <p>{session?.user?.name}</p>
        </header>

        <div>
          <header className="py-4">
            <p className=" text-text-secondary font-semibold text-xl">
              Filtros
            </p>
          </header>
          <StatusFilter />
          <OrderFilter />
        </div>

        <footer className=" flex  justify-center items-end h-full">
          <BtnOut />
        </footer>
      </aside>

      {/* SIDE MENU MOBILE */}
      <aside className="md:hidden block h-16 bg-primary text-white">
        <header className=" flex justify-between py-3 px-5">
          <div className="flex items-center gap-4">
            <div className=" h-8 w-8 rounded-full bg-white-bg">
              {session?.user?.image && (
                <img
                  src={session?.user?.image ?? "/user.png"}
                  alt="user"
                  className="h-full w-full rounded-full"
                />
              )}
            </div>

            <p>{session?.user?.name}</p>
          </div>

          <aside>
            <BtnOut />
          </aside>
        </header>
      </aside>
    </>
  );
}
