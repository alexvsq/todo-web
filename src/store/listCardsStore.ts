import { create } from "zustand";
import { TaskType } from "@/src/types/type";
import { persist } from "zustand/middleware";
import { DATA_FAKE } from "@/src/libs/data_fake";

interface ModalsStateType {
  listNotes: TaskType[] | null;
  setListNotes: (notes: TaskType[] | null) => void;
}

export const useTasksModalsStore = create<ModalsStateType>()(
  persist(
    (set) => ({
      //states
      listNotes: DATA_FAKE,
      //actions
      setListNotes: (notes: TaskType[] | null) => set({ listNotes: notes }),
    }),
    { name: "listCardsStoreDemo" }
  )
);
