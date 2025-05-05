"use client";
import { useState, useEffect } from "react";
import { useModals } from "@/src/hooks/modals";
import { useListNotes } from "@/src/hooks/ListNotes";
import { TaskType } from "@/src/types/type";
import { deleteTask } from "@/src/app/actions/database";
import toast from "react-hot-toast";

export default function TaskModalInfo() {
  const { taskInfoModal, setTaskInfoModal } = useModals();
  const [formTask, setFormTask] = useState<TaskType>({
    id: "",
    title: "",
    description: "",
    status: "pending",
    created_at: 1,
  });

  const handleCloseBtn = () => {
    setTaskInfoModal(null);
  };
  const handleDeleteBtn = async () => {
    try {
      const message = await deleteTask(formTask.id);
      toast.success(message);
      handleCloseBtn();
    } catch (error) {
      toast.error("Error Deleting Task");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // updateTask(formTask);
    handleCloseBtn();
  };
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

  useEffect(() => {
    if (taskInfoModal) {
      setFormTask(taskInfoModal);
    }
  }, [taskInfoModal]);

  if (!taskInfoModal) return;
  return (
    <div className="absolute inset-0 bg-primary/30 backdrop-blur-xs flex justify-center items-center">
      <article className=" bg-white rounded-xl w-[90vw] md:w-1/2 animate-fade animate-duration-200">
        <header className=" bg-primary text-white p-3 flex justify-between items-center rounded-t-xl">
          <p>Tarea</p>
          <button
            onClick={handleCloseBtn}
            className=" bg-white rounded-full p-2 cursor-pointer"
          >
            <img src="/icons/cross.svg" alt="close" className="h-4 w-4" />
          </button>
        </header>

        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row p-3"
        >
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
                value={formTask.title}
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
                value={formTask.description}
              ></textarea>
            </p>
          </div>

          <aside className=" w-full md:w-[30%] flex flex-col justify-between">
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

            <footer className=" flex justify-between p-3">
              <button
                onClick={handleDeleteBtn}
                className="bg-danger rounded-full text-sm px-4 py-2 cursor-pointer"
              >
                Eliminar
              </button>
              {/* <button className="bg-primary text-white rounded-full text-sm px-4 py-2 cursor-pointer">
                Actualizar
              </button> */}
            </footer>
          </aside>
        </form>
      </article>
    </div>
  );
}
