'use client';

import React, { useState } from 'react';
import {
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';
import { Button } from './ui/button';
import { scrollToFooter } from '@/lib/helper';
import { NavItem } from '@/types';




export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    {
      label: 'About the Game',
      href: '/about',
      submenu: [
        { label: 'How to Play', href: '/about/#how-to-play' },
        { label: 'Components', href: '/about/#components' },
        { label: 'Rules', href: '/about/#rules' },
      ]
    },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-[#0B1E26] shadow-md z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
            <span className="text-2xl font-bold text-[#A5EC60]">Spurt!</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onClick={() => item.label === 'About the Game' ? (activeDropdown === item.label ? setActiveDropdown(null) : setActiveDropdown(item.label)) : (window.location.href = item.href)}
              >
                <button className="flex items-center text-[#A5EC60] hover:text-[#419310]">
                  {item.label}
                  {item.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
                </button>

                {item.submenu && activeDropdown === item.label && (
                  <div className="absolute left-0 mt-2 w-48 bg-[#0B1E26] !rounded-md shadow-lg py-1 ">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm text-[#1C621B] hover:bg-[#A5EC60]"
                      >
                        {subitem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button size="lg" className="bg-[#A5EC60] hover:bg-[#419310] text-[#0B1E26] rounded-full" onClick={scrollToFooter} >
              Buy Now
            </Button>
          </div>


          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-[#A5EC60]" />
            ) : (
              <Menu className="h-6 w-6 text-[#A5EC60]" />
            )}
          </button>
        </div>


        {isOpen && (
          <div className="md:hidden py-4">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <a
                  href={item.href}
                  className="block text-[#A5EC60] hover:text-[#A5EC60]"
                >
                  {item.label}
                </a>
                {item.submenu && (
                  <div className="pl-4 mt-2 space-y-2">
                    {item.submenu.map((subitem) => (
                      <a
                        key={subitem.label}
                        href={subitem.href}
                        className="block text-sm text-[#A5EC60] hover:text-[#A5EC60]"
                      >
                        {subitem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button size="lg" className="bg-[#A5EC60] hover:bg-[#419310] text-[#0B1E26] rounded-full my-2" onClick={scrollToFooter}>
              Buy Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
