import Link from "next/link";
import Image from "next/image";

export default function DemoButton() {
  return (
    <div>
      <Image
        src={"/demo.webp"}
        alt="demo image"
        width={550}
        height={350}
        className="rounded shadow-lg hidden md:block"
      />
      <Image
        src={"/demo.webp"}
        alt="demo image"
        width={350}
        height={150}
        className="rounded shadow-lg block md:hidden"
      />

      <div className="flex justify-center">
        <Link
          href="/demo"
          className="bg-primary text-white py-2 px-6 rounded-full flex gap-4 my-5"
        >
          Modo Prueba
          <Image
            alt="go to demo"
            src={"/icons/open.svg"}
            width={20}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
}
