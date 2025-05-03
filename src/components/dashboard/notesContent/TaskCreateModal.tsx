"use client";
import { useTasksModalsStore } from "@/src/store/modalsStore";
import FormCreateTask from "./FormCreateTask";

export default function TaskModal() {
  const setTaskCreateModal = useTasksModalsStore(
    (state) => state.setTaskCreateModal
  );
  const taskCreateModal = useTasksModalsStore((state) => state.taskCreateModal);

  const toggleTaskCreate = () => {
    setTaskCreateModal(!taskCreateModal);
  };

  if (!taskCreateModal) return null;
  return (
    <div className="absolute inset-0 bg-primary/30 backdrop-blur-xs flex justify-center items-center">
      <article className=" bg-white rounded-xl w-[90%] md:w-[50%] animate-fade animate-duration-200">
        <header className=" bg-primary text-white p-3 flex justify-between items-center rounded-t-xl">
          <p>Crear Nueva Tarea</p>
          <button
            onClick={toggleTaskCreate}
            className=" bg-white rounded-full p-2 cursor-pointer"
          >
            <img src="/icons/cross.svg" alt="close" className="h-4 w-4" />
          </button>
        </header>

        <FormCreateTask />
      </article>
    </div>
  );
}
