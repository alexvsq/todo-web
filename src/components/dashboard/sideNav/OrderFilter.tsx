"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function OrderFilter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  type OrderFilterType = "desc" | "asc";

  const createPageURL = (order: OrderFilterType) => {
    const params = new URLSearchParams(searchParams);
    params.set("order", order);
    const newUrl = `${pathname}?${params.toString()}`;

    router.push(newUrl);
  };

  return (
    <article>
      <p className=" flex flex-col gap-1 my-3">
        <label htmlFor="estado-handler">Orden</label>
        <select
          className=" bg-white text-primary rounded-full px-4 py-2 text-sm"
          id="orden-handler"
          name="orden-handler"
          onChange={(e) => createPageURL(e.target.value as OrderFilterType)}
        >
          <option value="desc">Descendente</option>
          <option value="asc">Ascendente</option>
        </select>
      </p>
    </article>
  );
}
