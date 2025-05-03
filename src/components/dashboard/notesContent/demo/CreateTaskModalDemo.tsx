"use client";
import { TaskType } from "@/src/types/type";
import { useState } from "react";
import { useModals } from "@/src/hooks/modals";
import { useListNotes } from "@/src/hooks/ListNotes";

type TaskTypeWithOutId = Omit<TaskType, "id">;

export default function CreateTask() {
  const { taskCreateModal, toggleTaskCreate } = useModals();
  const { addTask } = useListNotes();
  const [formTask, setFormTask] = useState<TaskTypeWithOutId>({
    status: "pending",
    title: "",
    description: "",
    created_at: 1,
  });

  const nexStatus = () => {
    const listStatus = ["pending", "done", "in-progress"];
    const index = listStatus.indexOf(formTask.status);
    return listStatus[index + 1] || listStatus[0];
  };
  const changeStatus = () => {
    const newStatus = nexStatus();
    if (
      newStatus != "pending" &&
      newStatus != "done" &&
      newStatus != "in-progress"
    )
      return;
    setFormTask({ ...formTask, status: newStatus });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = Date.now();
    addTask({
      ...formTask,
      id: date + "",
      created_at: date,
    });
    toggleTaskCreate();
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

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row p-3">
          <div className=" w-full md:w-[70%]">
            <p className=" flex flex-col gap-1 my-3">
              <label htmlFor="title-handler">Título</label>
              <input
                className=" bg-white-bg rounded-full px-4 py-2 text-sm"
                id="title-handler"
                type="text"
                name="title-handler"
                required
                placeholder="Ingrese el título de la tarea"
                onChange={(e) => {
                  setFormTask({ ...formTask, title: e.target.value });
                }}
              />
            </p>

            <p className=" flex flex-col gap-1 my-3">
              <label htmlFor="description-handler">Descripción</label>
              <textarea
                className=" bg-white-bg rounded-xl px-4 py-2 text-sm"
                id="description-handler"
                rows={5}
                name="description-handler"
                placeholder="Ingrese la descripción de la tarea"
                onChange={(e) => {
                  setFormTask({ ...formTask, description: e.target.value });
                }}
              ></textarea>
            </p>
          </div>

          <aside className=" w-full md:w-[30%]">
            <header className=" flex flex-col gap-2 p-3">
              <p>Estado</p>

              <div
                onClick={changeStatus}
                className={` rounded-full p-2 text-center capitalize cursor-pointer ${
                  formTask.status == "pending"
                    ? "bg-danger"
                    : formTask.status == "in-progress"
                    ? "bg-warning"
                    : "bg-success"
                }`}
              >
                {formTask.status}
              </div>
            </header>
          </aside>

          <footer className=" flex justify-end items-end p-3">
            <button className="bg-primary text-white rounded-full text-sm px-4 py-2 cursor-pointer">
              Crear
            </button>
          </footer>
        </form>
      </article>
    </div>
  );
}
