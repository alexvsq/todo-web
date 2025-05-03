import { create } from "zustand";
import { TaskType } from "@/src/types/type";

interface ModalsStateType {
  taskInfoModal: TaskType | null;
  taskCreateModal: boolean;
  setTaskInfoModal: (task: TaskType | null) => void;
  setTaskCreateModal: (value: boolean) => void;
}

export const useTasksModalsStore = create<ModalsStateType>()((set) => ({
  //states
  taskInfoModal: null,
  taskCreateModal: false,
  //actions
  setTaskInfoModal: (task) => set({ taskInfoModal: task }),
  setTaskCreateModal: (value) => set({ taskCreateModal: value }),
}));
