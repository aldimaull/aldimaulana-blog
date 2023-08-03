import { useState, useEffect } from "react";

const Toggle = () => {
 const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
 const handleDarkMode = () => {
  setTheme(theme === "light" ? "dark" : "light");
 };

 useEffect(() => {
  if (theme === "dark") {
   document.documentElement.classList.add("dark");
  } else {
   document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
 }, [theme]);

 return (
  <>
   <button onClick={handleDarkMode}>
    {theme === "light" ? (
     <span className="material-symbols-rounded p-4 rounded-full border border-outline-light text-outline-light hover:bg-surface-high-light">
      light_mode
     </span>
    ) : (
     <span className="material-symbols-rounded p-4 rounded-full border border-outline-dark text-outline-dark hover:bg-surface-lowest-dark">
      dark_mode
     </span>
    )}
   </button>
  </>
 );
};

export default Toggle;
