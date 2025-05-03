import TaskModalDemo from "@/src/components/dashboard/notesContent/demo/TaskInfoModalDemo";
import CreateTaskModalDemo from "@/src/components/dashboard/notesContent/demo/CreateTaskModalDemo";
import ButtonCreateNewNote from "./ButtonCreateNewNoteDemo";
import GridNotes from "./GridNotesDemo";
import TitleContent from "../TitleContent";

export default function NotesContent() {
  return (
    <>
      <div className="flex-1 p-4 overflow-y-scroll">
        <header className=" my-4 flex justify-between items-center">
          <TitleContent />
          <aside>
            <ButtonCreateNewNote />
          </aside>
        </header>

        <GridNotes />
      </div>
      <TaskModalDemo />
      <CreateTaskModalDemo />
    </>
  );
}
