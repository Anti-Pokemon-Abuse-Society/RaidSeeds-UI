import { Outlet } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => [{ title: "Search Manager" }];

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <Outlet />
    </div>
  )
}