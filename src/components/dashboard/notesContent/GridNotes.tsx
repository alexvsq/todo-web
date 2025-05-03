import CardNote from "./CardNote";
import { TaskType } from "@/src/types/type";
import { getTasks } from "@/src/app/actions/database";

export default async function GridNotes() {
  const filterTasks = await getTasks();

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
      {filterTasks ? (
        filterTasks.map((item, index) => <CardNote key={index} task={item} />)
      ) : (
        <p>No hay tareas</p>
      )}
    </div>
  );
}
