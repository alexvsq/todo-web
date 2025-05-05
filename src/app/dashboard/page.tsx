import SideNav from "@/src/components/dashboard/sideNav/SideNav";
import NotesContent from "@/src/components/dashboard/notesContent/NotesContent";
import Calendar from "@/src/components/dashboard/Calendar";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <div className=" flex flex-col md:flex-row h-screen w-screen">
      <div className=" w-full md:w-60">
        <SideNav />
      </div>
      <NotesContent filters={searchParams} />
      <Calendar />
    </div>
  );
}
