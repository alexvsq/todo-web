export default function TitleContent() {
  const time = new Date().getHours();
  let timeTitle = "Buenos Días";

  if (time > 12) {
    timeTitle = "Buenas Tardes";
  }
  if (time > 18) {
    timeTitle = "Buenas Noches";
  }

  return (
    <div>
      <p className=" text-text-secondary text-xl">{timeTitle}</p>
      <p className=" text-3xl font-semibold">Lista de Tareas</p>
    </div>
  );
}
