import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Ukrainian Open-Source community" },
];

export default function Index() {
  return (
    <main className="bg-white min-h-page max-w-7xl mx-auto p-6">
      <header className="text-center my-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Ukrainian Open Source Community
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          Connecting developers to collaborate on open source projects
        </p>
      </header>

      {/* TODO: Who we are & what we do section - describe what's the point of OSSUA and what is our goal */}
      {/* TODO: Projects - a link to projects page and a few words about how people can join us; a link to Github page for people to contribute */}
      {/* TODO: Community - a link to our Telegram community page */}
    </main>
  );
}
