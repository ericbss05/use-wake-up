"use client"

import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const Header = () => {
    return (
        <div className="sticky top-0 z-50  bg-white/70 dark:bg-background-dark/80 backdrop-blur-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 dark:border-gray-700">

                    {/* Logo */}
                    <div className="flex items-center gap-1 text-[#100d1b] dark:text-white">
                        <Link href="/" className="flex items-center gap-1">
                            <div className="text-blue-500">
                                <img
                                    src="/images/Logo-black.svg"
                                    alt="Wake Up Logo"
                                    className="h-8 w-8 object-contain"
                                />
                            </div>
                            <h2 className="text-lg font-bold tracking-[-0.015em]">ake up</h2>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <div className="hidden md:flex flex-1 justify-end items-center gap-8">
                        <nav className="flex items-center gap-9">
                            <Button
                                variant="ghost"
                                onClick={() => scrollToSection('benefits')}
                                className="text-[#100d1b] dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-50 text-sm font-medium transition"
                            >
                                Avantages
                            </Button>

                            <Button
                                variant="ghost"
                                onClick={() => scrollToSection('how-it-work')}
                                className="text-[#100d1b] dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-50 text-sm font-medium transition"
                            >
                                Comment ça marche
                            </Button>

                            <Button
                                variant="ghost"
                                onClick={() => scrollToSection('future')}
                                className="text-[#100d1b] dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-50 text-sm font-medium transition"
                            >
                                A venir
                            </Button>

                            <Button
                                variant="ghost"
                                onClick={() => scrollToSection('faq')}
                                className="text-[#100d1b] dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-50 text-sm font-medium transition"
                            >
                                FAQ
                            </Button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
