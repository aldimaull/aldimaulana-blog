import { useState } from "react";
import Toggle from "./Toggle";

const Menu = () => {
 const [nav, setNav] = useState(false);

 const handleNav = () => {
  setNav(!nav);
 };
 return (
  <>
   <div onClick={handleNav} className="md:hidden px-4">
    {nav ? (
     <button
      class="material-symbols-rounded dark:text-neutral-90 text-neutral-10 align-middle"
      size="25"
     >
      close
     </button>
    ) : (
     <button
      class="material-symbols-rounded dark:text-neutral-90 text-neutral-10 align-middle"
      size="25"
     >
      menu
     </button>
    )}
   </div>
   <div
    className={
     nav
      ? "fixed left-0 top-0 h-full w-[60%] border-r border-primary-40 dark:bg-neutral-10 bg-neutral-98 dark:text-neutral-90 text-neutral-10 duration-500 ease-in-out"
      : "fixed left-[-100%] duration-500 ease-in-out"
    }
   >
    <div onClick={handleNav} className="p-4">
     {nav ? (
      <button
       class="material-symbols-rounded dark:text-neutral-90 text-neutral-10"
       size="25"
      >
       close
      </button>
     ) : (
      <button
       class="material-symbols-rounded dark:text-neutral-90 text-neutral-10"
       size="25"
      >
       menu
      </button>
     )}
    </div>
    <div className="flex flex-col uppercase">
     <a
      href="/blog"
      className="border-b dark:border-neutral-variant-60 border-neutral-variant-50 p-4 pt-4"
     >
      <span>Blog</span>
     </a>
     <a
      href="/contact"
      className="border-b dark:border-neutral-variant-60 border-neutral-variant-50 p-4 "
     >
      <span>contact</span>
     </a>
     <a
      href="/about"
      className="border-b dark:border-neutral-variant-60 border-neutral-variant-50 p-4"
     >
      <span>About</span>
     </a>
     <span className="end:0 dark:inline m-4">
      <Toggle />
     </span>
    </div>
   </div>
  </>
 );
};

export default Menu;
