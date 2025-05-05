"use client";
import { useState } from "react";
import { useFilterStore } from "@/src/store/filtersStore";

export default function FilterStatus() {
  const setStatusTask = useFilterStore((state) => state.setStatusTask);

  type FilterStatusType = "todos" | "pending" | "in-progress" | "done";

  const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusTask(e.target.value as FilterStatusType);
  };

  return (
    <article>
      <p className=" flex flex-col gap-1 my-3">
        <label htmlFor="estado-handler">Estado</label>
        <select
          className=" bg-white text-primary rounded-full px-4 py-2 text-sm"
          id="estado-handler"
          name=" estado-handler"
          onChange={handleChangeStatus}
        >
          <option value="todos">Todos</option>
          <option value="pending">Pendiente</option>
          <option value="in-progress">En Progreso</option>
          <option value="done">Finalizada</option>
        </select>
      </p>
    </article>
  );
}
