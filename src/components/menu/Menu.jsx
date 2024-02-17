import { Fragment } from "react";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Menus() {
  return (
    <HeadlessMenu as="div" className="relative inline-block text-left">
      <div>
        <HeadlessMenu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-custom-gray px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 ">
          =
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-white"
            aria-hidden="true"
          />
        </HeadlessMenu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <HeadlessMenu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-custom-gray shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <HeadlessMenu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? " bg-gray-800 text-gray-text font-semibold" : "  text-gray-text font-semibold"	,
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Inicio
                </a>
              )}
            </HeadlessMenu.Item>
            <HeadlessMenu.Item>
              {({ active }) => (
                <a
                  href="/Cart"
                  className={classNames(
                    active ? " bg-gray-800 text-gray-text font-semibold" : "  text-gray-text font-semibold"	,
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Carrito
                </a>
              )}
            </HeadlessMenu.Item>
            <HeadlessMenu.Item>
              {({ active }) => (
                <a
                  href="/points"
                  className={classNames(
                    active ? " bg-gray-800 text-gray-text font-semibold" : "  text-gray-text font-semibold"	,
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Tienda de Puntos
                </a>
              )}
            </HeadlessMenu.Item>
            <form method="POST" action="#">
              <HeadlessMenu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? " bg-gray-800 text-gray-text font-semibold" : "  text-gray-text font-semibold"	,
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
zona de entrega                   </button>
                )}
              </HeadlessMenu.Item>
            </form>
          </div>
        </HeadlessMenu.Items>
      </Transition>
    </HeadlessMenu>
  );
}
