"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FilterStatusType } from "@/src/types/type";

export default function Status() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const createPageURL = (status: FilterStatusType) => {
    const params = new URLSearchParams(searchParams);
    params.set("status", status);
    const newUrl = `${pathname}?${params.toString()}`;
    if (status === "todos") {
      router.push(pathname);
      return;
    }
    router.push(newUrl);
  };

  return (
    <article>
      <p className=" flex flex-col gap-1 my-3">
        <label htmlFor="estado-handler">Estado</label>
        <select
          className=" bg-white text-primary rounded-full px-4 py-2 text-sm"
          id="estado-handler"
          name=" estado-handler"
          onChange={(e) => createPageURL(e.target.value as FilterStatusType)}
        >
          <option value="todos">Todos</option>
          <option value="pending">Pendiente</option>
          <option value="in-progress">En Progreso</option>
          <option value="done">Finalizada</option>
        </select>
      </p>
    </article>
  );
}
