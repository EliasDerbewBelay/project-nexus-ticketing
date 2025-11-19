import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-full border-r p-4 space-y-4 bg-white">
      <h2 className="text-lg font-semibold mb-4">Menu</h2>

      <nav className="flex flex-col space-y-2">
        <Link href="/dashboard" className="text-gray-700 hover:text-black">
          Dashboard
        </Link>

        <Link href="/events" className="text-gray-700 hover:text-black">
          Events
        </Link>
      </nav>
    </div>
  );
}
