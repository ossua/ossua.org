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
      <section className="flex flex-col md:flex-row md:gap-x-4">
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
            className="flex items-center text-blue-700 max-w-max hover:underline mt-2"
          >
            <svg
              className="size-6 mr-1"
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

      <hr className="mt-6 mb-10" />
      <section className="flex flex-col-reverse md:flex-row md:gap-x-4">
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

      <hr className="mt-6 mb-10" />
      <section className="flex flex-col md:flex-row md:gap-x-4">
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
            href="https://t.me"
            className="flex items-center text-blue-700 max-w-max hover:underline mt-2"
          >
            <svg
              className="size-6 mr-1"
              fill="currentColor"
              viewBox="0 0 1000 1000"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <circle fill="currentColor" cx="500" cy="500" r="500" />
                <path
                  d="M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z"
                  fill="#FFFFFF"
                />
              </g>
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
