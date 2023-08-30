import { useDarkModeToggle } from "../js/hooks";

const Toggle = () => {
 const [theme, handleDarkMode] = useDarkModeToggle();

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
