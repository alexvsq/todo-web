import { addTaskToDatabase } from "@/src/app/actions/database";
import toast, { Toaster } from "react-hot-toast";

export default function FormCreateTask() {
  const handleSubmit = async (formData: FormData) => {
    const { data, message, errors } = await addTaskToDatabase(formData);
    if (data) {
      toast.success(message);
      return;
    }
    toast.error(message);
  };

  return (
    <form action={handleSubmit} className="flex flex-col md:flex-row p-3">
      <div className=" w-full md:w-[70%]">
        <p className=" flex flex-col gap-1 my-3">
          <label htmlFor="title-handler">Título</label>
          <input
            className=" bg-white-bg rounded-full px-4 py-2 text-sm"
            id="title-task"
            type="text"
            name="title-task"
            required
            placeholder="Ingrese el título de la tarea"
          />
        </p>

        <p className=" flex flex-col gap-1 my-3">
          <label htmlFor="description-handler">Descripción</label>
          <textarea
            id="description-task"
            name="description-task"
            className=" bg-white-bg rounded-xl px-4 py-2 text-sm"
            rows={5}
            placeholder="Ingrese la descripción de la tarea"
          ></textarea>
        </p>
      </div>

      <aside className=" w-full md:w-[30%]">
        <header className=" flex flex-col gap-2 p-3">
          <p>Estado</p>

          <select name="status-task" id="status-task">
            <option className="text-black" value="pending">
              Pending
            </option>
            <option className="text-black" value="done">
              Done
            </option>
            <option className="text-black" value="in-progress">
              In Progress
            </option>
          </select>
        </header>
      </aside>

      <footer className=" flex justify-end items-end p-3">
        <button className="bg-primary text-white rounded-full text-sm px-4 py-2 cursor-pointer">
          Crear
        </button>
      </footer>
    </form>
  );
}
