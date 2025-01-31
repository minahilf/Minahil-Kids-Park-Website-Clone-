"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../Assets/logo.png"
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0295A9] text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

                <nav className="hidden lg:flex gap-10 text-lg font-semibold">
          <a href="/" className="hover:text-[#c5ddff] font-normal text-[18px] text-[#04162F]">Home</a>
          <a href="/Program" className="hover:text-[#c5ddff] font-normal text-[18px] text-[#04162F]">Programs</a>
          <a href="/Value" className="hover:text-[#c5ddff]  font-normal text-[18px] text-[#04162F]">Why Us</a>
          <a href="/Generation" className="hover:text-[#c5ddff]  font-normal text-[18px] text-[#04162F]">About Us</a>
        </nav>
                <div className="flex items-center">
          <Image src={logo} alt="Kids Park Logo" width={200} height={100} />
        </div>


        <div className="hidden lg:block">
          <a href="/Contact" className="bg-[#036370] px-5 py-2 rounded-full text-white shadow-[inset_0_4px_6px_rgba(0,0,0,0.2)]">
            Contact us
          </a>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden flex flex-col items-center mt-4 space-y-3 text-lg font-semibold">
          <a href="/" className="hover:text-[#c5ddff] font-normal text-[18px] text-[#04162F]">Home</a>
          <a href="/Program" className="hover:text-[#c5ddff] font-normal text-[18px] text-[#04162F]">Programs</a>
          <a href="/Value" className="hover:text-[#c5ddff] font-normal text-[18px] text-[#04162F]">Why Us</a>
          <a href="/Generation" className="hover:text-[#c5ddff] font-normal text-[18px] text-[#04162F]">About Us</a>
          <a href="/Contact" className="bg-[#036370] px-5 py-2 rounded-full text-white shadow-[inset_0_4px_6px_rgba(0,0,0,0.2)] ">
            Contact us
          </a>
        </nav>
      )}
    </header>
  );
}
