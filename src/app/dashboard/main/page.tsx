import { SimpleWidget } from "@/components";

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-2xl">Dashboard</h1>
      <p className="text-xl">Información General</p>

      <div className="flex flex-wrap p-2 justify-center items-center">
        <SimpleWidget />
      </div>
    </div>
  );
}
