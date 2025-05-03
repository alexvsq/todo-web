import DemoSection from "@/src/components/home/DemoSection";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className=" w-screen md:w-1/2  md:h-screen flex justify-center items-center">
        <DemoSection />
      </div>
      <aside className=" w-screen md:w-1/2 h-full md:h-screen flex justify-center items-center bg-primary">
        {children}
      </aside>
    </div>
  );
}
