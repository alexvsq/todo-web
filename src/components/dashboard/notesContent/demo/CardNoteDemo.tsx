"use client";
import { TaskType } from "@/src/types/type";
import { useTasksModalsStore } from "@/src/store/modalsStore";
import { useEffect, useState } from "react";

interface Props {
  task: TaskType;
}

export default function CardNote({ task }: Props) {
  const setTaskInfo = useTasksModalsStore((state) => state.setTaskInfoModal);
  const [dateParsed, setDateParsed] = useState("");

  const handleClickCard = () => {
    if (task) {
      setTaskInfo(task);
    }
  };
  const descriptionCut = task.description
    ? task.description.length > 90
      ? `${task.description.slice(0, 90)}...`
      : task.description
    : null;

  useEffect(() => {
    setDateParsed(new Date(Number(task.created_at)).toLocaleDateString());
  }, [task]);

  return (
    <article
      onClick={handleClickCard}
      className="flex bg-white rounded-xl px-3 py-4 cursor-pointer hover:scale-105 transition"
    >
      <div className=" w-[70%] min-h-16">
        <header>
          <p className=" text-primary font-semibold">{task.title}</p>
        </header>
        <footer>
          <p className="text-text-secondary text-xs">{descriptionCut}</p>
        </footer>
      </div>
      <aside className=" w-[30%]">
        <header>
          <p className="text-text-secondary text-xs text-right">{dateParsed}</p>
        </header>
        <footer className=" flex items-center justify-center h-full">
          <div
            className={` rounded-full py-1 px-2 text-center capitalize cursor-pointer text-xs ${
              task.status == "pending"
                ? "bg-danger"
                : task.status == "in-progress"
                ? "bg-warning"
                : "bg-success"
            }`}
          >
            {task.status}
          </div>
        </footer>
      </aside>
    </article>
  );
}
