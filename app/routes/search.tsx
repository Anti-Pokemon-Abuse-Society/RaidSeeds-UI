import { Outlet } from "@remix-run/react";


export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <Outlet />
    </div>
  )
}