import './App.css'
import DarkModeToggler from './components/DarkModeToggler'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col justify-center items-center bg-white min-h-screen dark:bg-gray-900 dark:text-white transition-colors duration-500 ease-in-out">
        <h1 className='text-3xl font-bold mb-3'>Tailwind CSS Dark Mode</h1>
        <p>Click the button to toggle dark mode!</p>
        <div className='mt-3'>
          <DarkModeToggler />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
