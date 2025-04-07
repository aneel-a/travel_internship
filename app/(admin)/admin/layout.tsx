import type { Metadata } from "next";
import "./globals.css";
import AdminSidebar from "@/app/(admin)/admin/component/Adminbar";

export const metadata: Metadata = {
  title: "Tours&Travel",
  description: "Tours and Travels app like the booking.com",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        {/* Sidebar should take a fixed width */}
        <AdminSidebar />
        {/* Main content should take the remaining width */}
        <main className="flex-1 p-4">{children}</main>
      </body>
    </html>
  );
}
