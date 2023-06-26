'use client'

import React, {useState} from "react";
import Link from "next/link";
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon  } from '@heroicons/react/24/outline'

const navlinks = [
  { href: "/login", label: "Iniciar Sesión", className: "text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"},
  { href: "/signin", label: "Registrarse", className : "text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium"},
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              PorrasF1
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navlinks.map((item) => (
              <Link key={item.label} href={item.href} className={item.className}>
                {item.label}
              </Link>
            ))}
          </div>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
            <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              PorrasF1
            </Link>
          </div>
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
                  {navlinks.map((item) => (
                    <Link key={item.label} href={item.href} className={item.className}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        </nav>
  );
};

export default Navigation;
