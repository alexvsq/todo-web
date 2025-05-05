import TitleContent from "./TitleContent";
import ButtonCreateNewTask from "./ButtonCreateNewTask";
import TaskCreateModal from "./TaskCreateModal";
import InfoTaskModal from "./TaskInfoModal";
import GridNotes from "./GridNotes";

export default async function NotesContent({
  filters,
}: {
  filters: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <>
      <div className="flex-1 p-4 overflow-y-scroll">
        <header className=" my-4 flex justify-between items-center">
          <TitleContent />
          <aside>
            <ButtonCreateNewTask />
          </aside>
        </header>

        <GridNotes filters={filters} />
      </div>
      <TaskCreateModal />
      <InfoTaskModal />
    </>
  );
}
