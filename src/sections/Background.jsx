import React from 'react';
import '../styles/style.css';

export default function Background() {
    function toggleTheme() {
        document.body.classList.toggle("dark");
    }

    return (
        <div className='md:top-16 md:-left-10 mt-60 md:mt-24 w-screen h-screen'>
            <div className="relative flex flex-col h-[100vh] items-center justify-center bg-white dark:bg-black transition-bg">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="jumbo absolute -inset-[10px] opacity-50"></div>
                </div>
                <h1 className="relative flex items-center text-5xl font-bold text-gray-800 dark:text-white dark:opacity-80 transition-colors">
                    <span className="ml-1 rounded-xl bg-current p-2 text-[0.7em] leading-none">
                        <span className="text-white dark:text-black"></span>
                    </span>
                </h1>
                <div className="mt-4">
                    <button onClick={toggleTheme} className="px-3 py-1 border border-stone-200 rounded-full drop-shadow-sm text-sm text-stone-800 dark:text-white bg-white/40 dark:bg-black/40 backdrop-blur-lg hover:border-stone-300 transition-colors dark:border-stone-500 dark:hover:border-stone-400"></button>
                </div>
            </div>
        </div>
    );
}
