import { Dialog, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";
import { useState } from "react";

const navigation = [
  // { name: "About", href: "#", external: false },
  { name: "Projects", href: "/projects", external: false },
  { name: "Join us", href: "https://t.me/UkraineOSS", external: true },
  { name: "Github", href: "https://github.com/ossua", external: true },
] as const;

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">OSSUA</span>
          <img className="h-8 w-auto" src="/assets/ossua.svg" alt="" />
        </Link>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map(({ name, href, external }) => {
            if (external) {
              return (
                <a
                  key={name}
                  href={href}
                  className="flex items-center text-sm font-semibold leading-6 text-gray-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                  <ArrowTopRightOnSquareIcon className="size-4 ml-1" />
                </a>
              );
            }

            return (
              <Link
                key={name}
                to={href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {name}
              </Link>
            );
          })}
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="/assets/ossua.svg" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map(({ name, href, external }) => {
                  if (external) {
                    return (
                      <a
                        key={name}
                        href={href}
                        className="flex items-center -mx-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {name}
                        <ArrowTopRightOnSquareIcon className="size-4 ml-1" />
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={name}
                      to={href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {name}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
