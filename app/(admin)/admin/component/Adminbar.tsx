import Link from "next/link";

export default function Adminbar() {
    return (
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white p-4">
          <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
          <nav>
            <ul className="space-y-4">
              <li><Link href="/admin/dashboard" className="block p-2 hover:bg-gray-700 rounded">Dashboard</Link></li>
              <li><Link href="#" className="block p-2 hover:bg-gray-700 rounded">Users</Link></li>
              <li><Link href="/admin/product" className="block p-2 hover:bg-gray-700 rounded">Products</Link></li>
              <li><Link href="#" className="block p-2 hover:bg-gray-700 rounded">Settings</Link></li>
            </ul>
          </nav>
        </aside>
      </div>
    );
  }