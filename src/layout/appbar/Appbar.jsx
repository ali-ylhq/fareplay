import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "ABOUT", href: "#", current: true },
  { name: "POINTS", href: "#", current: false },
  { name: "WAITLIST", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <svg
                    width="159"
                    height="24"
                    viewBox="0 0 159 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.3862 1.7995H17.4365V5.88013H5.20577V9.96076H15.3862V12H13.3559V14.0481H5.21466V22.1804H1.13403V1.7995H15.3862Z"
                      fill="white"
                    />
                    <path
                      d="M34.4953 5.89792H36.5256V22.2004H32.4673V16.0895H24.306V22.2004H20.2231V5.89792H22.2735V3.86762H24.3038V1.81952H32.4673V3.86762H34.4976L34.4953 5.89792ZM32.4939 9.96076V7.93046H30.4436V5.88014H26.3541V7.93046H24.3238V12H32.485L32.4939 9.96076Z"
                      fill="white"
                    />
                    <path
                      d="M53.5928 3.86762H55.6231V12H53.5928V14.0303H51.5425V16.0806H53.5928V18.1109H55.6231V22.2004H51.5336V20.1501H49.5033V18.1198H47.453V16.0895H43.3923V22.2004H39.3117V1.81952H53.5928V3.86762ZM49.5033 12H51.5336V5.89792H43.3923V12H49.5033Z"
                      fill="white"
                    />
                    <path
                      d="M72.673 1.7995H74.7033V5.88013H62.4881V9.96076H72.673V12H70.6227V14.0481H62.4881V18.102H74.7189V22.1804H58.4008V1.7995H72.673Z"
                      fill="white"
                    />
                    <path
                      d="M98.5686 3.86762H100.599V12H98.5686V14.0303H96.5116V16.0806H88.3771V22.2004H84.2964V1.81952H98.5686V3.86762ZM94.488 12H96.5116V5.89792H88.3771V12H94.488Z"
                      fill="white"
                    />
                    <path
                      d="M117.638 16.0895H119.688V22.2004H103.386V1.81952H107.446V18.1198H115.607V16.0895H117.638Z"
                      fill="white"
                    />
                    <path
                      d="M136.747 5.89792H138.777V22.2004H134.717V16.0895H126.555V22.2004H122.475V5.89792H124.532V3.86762H126.562V1.81952H134.723V3.86762H136.754L136.747 5.89792ZM134.746 9.96076V7.93046H132.695V5.88014H128.606V7.93046H126.575V12H134.737L134.746 9.96076Z"
                      fill="white"
                    />
                    <path
                      d="M155.835 1.81952H157.866V9.97855H155.835V12H153.785V14.0303H151.755V22.1915H147.674V14.0392H145.644V12H143.614V9.97855H141.563V1.81952H145.644V7.93046H147.674V9.97855H151.755V7.93046H153.785V1.81952H155.835Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 justify-between">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        // className={classNames(
                        //   item.current
                        //     ? "bg-gray-900 text-white"
                        //     : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        //   "rounded-md px-3 py-2 text-sm font-medium"
                        // )}
                        className="text-white font-gohu hover:scale-105 duration-200"
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-black text-white">
            <div className=" border-solid border-2 border-sky-500 rounded">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    // item.current
                    //   ?
                    "bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium "
                    //   : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    // "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
