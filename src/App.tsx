import React from 'react';
import SignUpForm from './components/SignUpForm';
import { ThemeContextProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <ThemeContextProvider>
      <div className="min-h-screen w-full bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
        <ThemeToggle />
        <SignUpForm />
      </div>
    </ThemeContextProvider>
  );
}

export default App;