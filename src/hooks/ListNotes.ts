import { TaskType } from "@/src/types/type";
import { useTasksModalsStore } from "@/src/store/listCardsStore";
import { useFilterStore } from "@/src/store/filtersStore";

export function useListNotes() {
  const { listNotes, setListNotes } = useTasksModalsStore();
  const { statusTask, orderTask, setOrderTask, setStatusTask } =
    useFilterStore();

  const filterTasks = listNotes?.filter((task) => {
    if (!listNotes) return;
    if (statusTask === "pending") return task.status === "pending";
    if (statusTask === "in-progress") return task.status === "in-progress";
    if (statusTask === "done") return task.status === "done";
    if (orderTask === "asc")
      return listNotes.sort((a, b) => a.created_at - b.created_at);
    if (orderTask === "desc")
      return listNotes.sort((a, b) => b.created_at - a.created_at);

    return listNotes;
  });

  const addTask = (task: TaskType) => {
    const newTaskList = listNotes ? [task, ...listNotes] : [task];
    setListNotes(newTaskList);
  };

  const deleteTask = (taskToDelete: TaskType) => {
    if (!listNotes) return;
    const newTaskList = listNotes.filter((task) => task.id !== taskToDelete.id);
    setListNotes(newTaskList);
  };

  const updateTask = (taskToUpdate: TaskType) => {
    if (!listNotes) return;
    const newTaskList = listNotes.map((task) =>
      task.id === taskToUpdate.id ? taskToUpdate : task
    );
    setListNotes(newTaskList);
  };

  return { filterTasks, addTask, deleteTask, updateTask };
}
