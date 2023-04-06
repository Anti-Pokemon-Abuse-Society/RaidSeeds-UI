import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => [{ title: "Search Manager" }];

export default function Index() {
  return (
    <main className="relative min-h-screen bg-gray-800 sm:flex sm:items-center sm:justify-center">
      <Link
        to="/search/shiny6"
        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
      >
        6IV Shiny Seed Search
      </Link>
    </main>
  );
}
