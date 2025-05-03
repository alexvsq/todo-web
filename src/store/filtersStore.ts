import { create } from "zustand";

type FilterStatusType = "todos" | "pending" | "in-progress" | "done";

interface FiltersStateType {
  statusTask: FilterStatusType;
  orderTask: "asc" | "desc";
  setStatusTask: (status: FilterStatusType) => void;
  setOrderTask: (order: "asc" | "desc") => void;
}

export const useFilterStore = create<FiltersStateType>()((set) => ({
  statusTask: "todos",
  orderTask: "desc",
  setStatusTask: (status: FilterStatusType) => set({ statusTask: status }),
  setOrderTask: (order: "asc" | "desc") => set({ orderTask: order }),
}));
