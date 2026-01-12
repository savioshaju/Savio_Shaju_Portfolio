import React from 'react'

const Footer = () => {
    return (
        <footer className="relative py-12 px-6 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-mono text-xs text-gray-500 tracking-widest">SYSTEM_STATUS: ONLINE</span>
                </div>

                <p className="font-mono text-xs text-gray-600">
                    DESIGNED_BY <span className="text-white hover:text-blue-400 transition-colors cursor-pointer">SAVIO SHAJU</span> // {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}

export default Footer