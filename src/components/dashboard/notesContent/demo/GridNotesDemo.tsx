"use client";
import CardNoteDemo from "./CardNoteDemo";
import { TaskType } from "@/src/types/type";
import { useListNotes } from "@/src/hooks/ListNotes";

export default function GridNotes() {
  const { filterTasks } = useListNotes();

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
      {filterTasks ? (
        filterTasks.map((item, index) => (
          <CardNoteDemo key={index} task={item} />
        ))
      ) : (
        <p>No hay tareas</p>
      )}
    </div>
  );
}
