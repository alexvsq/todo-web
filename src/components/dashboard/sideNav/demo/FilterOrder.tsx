"use client";
import { useFilterStore } from "@/src/store/filtersStore";

export default function FilterOrder() {
  const setOrderTask = useFilterStore((state) => state.setOrderTask);

  const handleChangeOrder = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderTask(e.target.value as "asc" | "desc");
  };

  return (
    <article>
      <p className=" flex flex-col gap-1 my-3">
        <label htmlFor="estado-handler">Orden</label>
        <select
          className=" bg-white text-primary rounded-full px-4 py-2 text-sm"
          id="orden-handler"
          name="orden-handler"
          onChange={handleChangeOrder}
        >
          <option value="desc">Descendente</option>
          <option value="asc">Ascendente</option>
        </select>
      </p>
    </article>
  );
}
