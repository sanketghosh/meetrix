import Navbar from "@/app/(dashboard)/_components/nav";

export default function Sidebar() {
  return (
    <aside className="hidden min-h-screen shrink-0 border-r md:block md:w-64 lg:w-72">
      <Navbar />
    </aside>
  );
}
