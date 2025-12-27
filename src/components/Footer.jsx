import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="px-4 py-6 text-neutral-700 bg-white border border-neutral-900 flex flex-col items-center gap-3 relative before:content-[''] before:absolute before:inset-0 before:border before:border-neutral-900 before:translate-x-[1px] before:translate-y-[1px] before:pointer-events-none">
            <p className="text-xs sm:text-sm text-center text-neutral-700">
                © {new Date().getFullYear()} — All rights reserved by{' '}
                <a
                    href="https://www.linkedin.com/in/savio-shaju-81058528a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-normal text-neutral-900 hover:underline transition"
                >
                    Savio Shaju
                </a>
            </p>
        </footer>
    )
}

export default Footer