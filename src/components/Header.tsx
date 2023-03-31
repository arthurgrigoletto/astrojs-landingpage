import { useState } from "react";

import { NavMenu } from "./NavMenu";
import { Sidebar } from './Sidebar'

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="flex py-5 px-3">
        <div className="flex items-center pt-3">
          <img src="images/logo.svg" alt="Logo" />
        </div>
        <div className="flex-grow flex items-center z-20">
          <NavMenu />
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="sidebar"
            aria-label="Open Menu"
          >
            <img src="images/icon-menu.svg" alt="Navigation Menu" className="block lg:hidden" />
          </button>
          <Sidebar open={open} setOpen={setOpen} />
          <nav className="hidden lg:flex lg:space-x-10 lg:items-center">
            <button className="border-b border-b-transparent cursor-pointer hover:text-almost-black focus:outline-none focus:border-b-almost-black">
              Login
            </button>
            <button className="border-2 rounded-xl px-4 py-2 hover:border-almost-black hover:text-almost-black">
              Register
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}