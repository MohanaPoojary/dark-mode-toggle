import React from 'react'
import { useDarkMode } from '../context/ThemeContext'

const DarkModeToggler = () => {
    const {darkMode, setDarkMode} = useDarkMode()
  return (
    <button onClick={() => setDarkMode(!darkMode)} className='px-6 py-2 cursor-poin bg-gray-200 dark:bg-white/10 rounded-md transition-all'>
        {darkMode?"🔆 Light Mode":"🌙 Dark Mode"}
    </button> 
  )
}

export default DarkModeToggler