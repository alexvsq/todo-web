import { useTasksModalsStore } from "@/src/store/modalsStore";

export function useModals() {
  const {
    setTaskCreateModal,
    setTaskInfoModal,
    taskCreateModal,
    taskInfoModal,
  } = useTasksModalsStore();

  const toggleTaskCreate = () => {
    setTaskCreateModal(!taskCreateModal);
  };

  return { taskCreateModal, taskInfoModal, setTaskInfoModal, toggleTaskCreate };
}
