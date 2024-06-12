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
          The Ukrainian Open-Source community is an initiative to enhance the
          quality and visibility of Ukrainian open-source projects, promoting
          collaboration, and connecting developers eager to contribute to these
          projects. This community aims to create an ecosystem where developers,
          both experienced and newcomers, can find good projects to work on,
          share knowledge, and collectively solve problems.
        </p>
      </header>

      <hr className="mt-4 mb-10" />
      <section className="flex flex-col md:flex-row md:gap-x-8">
        <div className="md:w-3/5 mb-4 md:mb-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Collaborate on open-source projects
          </h2>
          <p className="mt-4 text-gray-900">
            We encourage collaboration and contribution to various open source
            projects to help people improve their programming skills and grow
            the Ukrainian Open Source.
            <br />
            Join the Ukrainian Open-Source community and start contributing
            today :)
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ossua"
            className="flex items-center text-blue-700 max-w-max hover:underline mt-5"
          >
            <svg
              className="size-6 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            Contribute
          </a>
        </div>
        <div className="md:w-2/5">
          <img
            className="w-full md:w-auto"
            src="/assets/programming.svg"
            alt="Programming illustration"
          />
        </div>
      </section>

      <hr className="my-10" />
      <section className="flex flex-col-reverse md:flex-row md:gap-x-8">
        <div className="md:w-2/5">
          <img
            className="w-full md:w-auto"
            src="/assets/interview.svg"
            alt="Mentoring illustration"
          />
        </div>
        <div className="md:w-3/5 mb-4 md:mb-0">
          <h2 className="relative text-4xl font-bold tracking-tight text-gray-900">
            Mentor & learn
            <span className="absolute -left-6 -top-4 inline-flex items-center rounded-md bg-yellow-50/80 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
              Work in Progress
            </span>
          </h2>
          <p className="mt-4 text-gray-900">
            Join our mentoring platform for people who want to learn programming
            or become a learner and improve your skills with the guidance of
            experienced mentors. Our platform connects mentors and learners,
            fostering a collaborative environment where knowledge is shared and
            everyone can grow together.
          </p>
        </div>
      </section>

      <hr className="my-10" />
      <section className="flex flex-col md:flex-row md:gap-x-8">
        <div className="md:w-3/5 mb-4 md:mb-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Join the community
          </h2>
          <p className="mt-4 text-gray-900">
            Join the community of vibrant developers and open source enthusiasts
            today to share experiences, collaborate on different projects and
            support each other.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/tnfeVJfGE7"
            className="flex items-center text-blue-700 max-w-max hover:underline mt-5"
          >
            <svg
              className="size-6 mr-2"
              fill="currentColor"
              viewBox="0 0 127.14 96.36"
            >
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
            </svg>
            Join the community
          </a>
        </div>
        <div className="md:w-2/5">
          <img
            className="w-full md:w-auto"
            src="/assets/community.svg"
            alt="Community illustration"
          />
        </div>
      </section>
    </main>
  );
}
