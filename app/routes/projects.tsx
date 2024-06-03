import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Projects | Ukrainian Open-Source community" },
];

const PROJECTS = [
  {
    name: "ossua.org website",
    tags: ["Remix", "TypeScript"],
    description: "The official website of the Ukrainian Open-Source community.",
    url: "https://github.com/ossua/ossua.org",
  },
  {
    name: "Adblock Hunter",
    tags: ["Library", "JavaScript"],
    description: "A JavaScript library to detect AdBlock usage",
    url: "https://github.com/ossua/adblock-hunter",
  },
  {
    name: "React Native alerts",
    tags: ["Library", "React Native", "Mobile"],
    description:
      "A Redux-based library to support customisable toast messages for React Native applications.",
    url: "https://github.com/ossua/react-native-redux-alert",
  },
  {
    name: "Swetrix",
    tags: ["Application", "Remix", "NestJS"],
    description:
      "An open-source, cookieless and privacy-first Google Analytics alternative.",
    url: "https://github.com/Swetrix",
  },
];

interface ICard {
  name: string;
  url: string;
  tags: string[];
  description: string;
}

const Card = ({ name, url, tags, description }: ICard) => (
  <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex relative w-full items-center justify-between space-x-6 p-6"
    >
      <div className="flex-1">
        <div className="space-y-1">
          {tags.length > 0 ? (
            <div className="space-x-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex flex-shrink-0 items-center rounded-md bg-slate-50 px-1.5 py-0.5 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-600/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
          <h3 className="text-md font-medium text-gray-900">{name}</h3>
        </div>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
      <ArrowTopRightOnSquareIcon className="absolute top-5 right-5 size-5 text-gray-700" />
    </a>
  </li>
);

export default function Index() {
  return (
    <main className="bg-white min-h-page max-w-7xl mx-auto p-6">
      <header className="text-center my-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Our projects
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          We are working on a variety of different projects, starting from small
          libraries up to large-scale applications. Everyone is welcome to
          contribute! Would you like to suggest a new project? You are welcome
          to do it here.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <Card key={project.name} {...project} />
        ))}
        <Card
          name="Propose a new project"
          description="We're happy to add new projects to our list, feel free to suggest anything, starting from a new library up to a large-scale app!"
          url="https://github.com/orgs/ossua/discussions/1"
          tags={[]}
        />
      </ul>
    </main>
  );
}
