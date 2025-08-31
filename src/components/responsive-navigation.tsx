"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navigationItems = [
  { href: "#about", label: "ABOUT ME" },
  { href: "#mission", label: "MISSION" },
  { href: "#jewelry", label: "JEWELRY" },
  { href: "#services", label: "SERVICES" },
  { href: "#recognition", label: "RECOGNITION" },
  { href: "#contact", label: "CONTACT" },
];

export default function ResponsiveNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-center items-center py-8 px-4 w-full relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 lg:space-x-16 text-sm lg:text-base font-medium tracking-wider">
        {navigationItems.map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.href);
            }}
            className="hover:opacity-70 transition-all duration-300 cursor-pointer relative group"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 border border-black/20 hover:bg-black hover:text-white transition-colors"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[300px] sm:w-[400px] bg-white border-l border-black/10"
          >
            <SheetHeader>
              <SheetTitle className="text-left font-bold tracking-wider text-lg">
                SAILOR PIERCING
              </SheetTitle>
              <SheetDescription className="text-left text-gray-600">
                Navigate to different sections
              </SheetDescription>
            </SheetHeader>
            <div className="mt-8 flex flex-col space-y-4">
              {navigationItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-lg font-medium tracking-wide text-black hover:text-gray-600 transition-colors cursor-pointer py-3 px-4 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            
            {/* Contact Info in Mobile Menu */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="space-y-2 text-sm text-gray-600">
                <p className="font-medium text-black">@SAILOR_PIERCING</p>
                <p>+212694618601</p>
                <p>Casablanca, Morocco</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
