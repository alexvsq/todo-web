import SideNavDemo from "@/src/components/dashboard/sideNav/demo/SideNavDemo";
import NotesContent from "@/src/components/dashboard/notesContent/demo/NotesContentDemo";
import Calendar from "@/src/components/dashboard/Calendar";

export default function DemoPage() {
  return (
    <div className=" flex flex-col md:flex-row h-screen w-screen">
      <div className=" w-full md:w-60">
        <SideNavDemo />
      </div>

      <NotesContent />
      <Calendar />
    </div>
  );
}
