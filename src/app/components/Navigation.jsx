'use client'

import React, {useState} from "react";
import Link from "next/link";
import { Bars3Icon } from '@heroicons/react/24/outline'

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
              <Link key={item.label} href={item.href} className="text-sm font-semibold leading-6">
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
  );
};

export default Navigation;
