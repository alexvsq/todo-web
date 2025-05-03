"use client";
import { useTasksModalsStore } from "@/src/store/modalsStore";

export default function ButtonCreateNewTask() {
  const setModalCreate = useTasksModalsStore(
    (state) => state.setTaskCreateModal
  );
  const modalCreateStatus = useTasksModalsStore(
    (state) => state.taskCreateModal
  );

  const toggleModalCreate = () => {
    setModalCreate(!modalCreateStatus);
  };

  return (
    <button
      onClick={toggleModalCreate}
      className="bg-primary rounded-xl py-2 px-4 cursor-pointer flex  items-center gap-4"
    >
      <p className="text-white text-sm">Crear Nueva Tarea</p>
      <div className=" bg-white rounded-full p-2">
        <img src="/icons/cross.svg" alt="plus" className="h-3 w-3 rotate-45" />
      </div>
    </button>
  );
}
