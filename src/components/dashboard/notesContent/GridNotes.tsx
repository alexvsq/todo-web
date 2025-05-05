import CardNote from "./CardNote";
import { getTasks } from "@/src/app/actions/database";
import { FilterStatusType } from "@/src/types/type";

export default async function GridNotes({
  filters,
}: {
  filters: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const filter = await filters;

  const status = filter.status as FilterStatusType;
  const order = filter.order as "asc" | "desc";

  const filterTasks = await getTasks(status, order);

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
