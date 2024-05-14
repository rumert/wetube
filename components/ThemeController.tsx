"use client"
import { useTheme } from 'next-themes'
import React from 'react'

export default function ThemeController() {
    const { theme, setTheme } = useTheme()

    return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        Theme
        <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
        <li>
            <input 
            checked={theme === "light"} 
            onChange={()=> setTheme("light")} 
            type="radio" 
            name="theme-dropdown" 
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start" 
            aria-label="Light" 
            value="light"
            />
        </li>
        <li>
            <input 
            checked={theme === "dark"} 
            onChange={()=> setTheme("dark")} 
            type="radio" 
            name="theme-dropdown" 
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start" 
            aria-label="Dark" 
            value="dark"
            />
        </li>
        <li>
            <input 
            checked={theme === "forest"} 
            onChange={()=> setTheme("forest")} 
            type="radio" 
            name="theme-dropdown" 
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start" 
            aria-label="Forest" 
            value="forest"
            />
        </li>
        <li>
            <input 
            checked={theme === "coffee"} 
            onChange={()=> setTheme("coffee")} 
            type="radio" 
            name="theme-dropdown" 
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start" 
            aria-label="Coffee" 
            value="coffee"
            />
        </li>
      </ul>
    </div>
    )
}
