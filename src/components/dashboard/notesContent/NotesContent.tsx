import TitleContent from "./TitleContent";
import GridNotes from "./GridNotes";
import ButtonCreateNewTask from "./ButtonCreateNewTask";
import TaskCreateModal from "./TaskCreateModal";
import InfoTaskModal from "./TaskInfoModal";

export default async function NotesContent() {
  return (
    <>
      <div className="flex-1 p-4 overflow-y-scroll">
        <header className=" my-4 flex justify-between items-center">
          <TitleContent />
          <aside>
            <ButtonCreateNewTask />
          </aside>
        </header>

        <GridNotes />
      </div>
      <TaskCreateModal />
      <InfoTaskModal />
    </>
  );
}
