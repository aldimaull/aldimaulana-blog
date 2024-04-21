import { useState, useEffect } from "react";

export function useDarkModeToggle() {
 const storedTheme = localStorage.getItem("theme");
 const [theme, setTheme] = useState(storedTheme ?? "light");
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
 }, [theme, localStorage.getItem("colorTheme")]);

 return [theme, handleDarkMode];
}

export function useColorToggle(initialColor) {
 const storedTheme = localStorage.getItem("colorTheme");
 const [selectedColor, setSelectedColor] = useState(
  initialColor.find((color) => color.ct === storedTheme) || initialColor[0]
 );

 useEffect(() => {
  const themeClasses = {
   "theme-purple": ["theme-default", "theme-yellow", "theme-red", "theme-blue"],
   "theme-yellow": ["theme-default", "theme-purple", "theme-red", "theme-blue"],
   "theme-red": ["theme-default", "theme-purple", "theme-yellow", "theme-blue"],
   "theme-blue": ["theme-default", "theme-purple", "theme-yellow", "theme-red"],
  };

  const classesToRemove = themeClasses[selectedColor.ct] || [
   "theme-yellow",
   "theme-purple",
   "theme-red",
   "theme-blue",
  ];

  const classToAdd =
   selectedColor.ct === undefined ? "theme-default" : selectedColor.ct;

  classesToRemove.forEach((className) => {
   document.documentElement.classList.replace(className, classToAdd);
  });

  localStorage.setItem("colorTheme", selectedColor.ct);
 }, [selectedColor.ct]);

 return [selectedColor, setSelectedColor];
}
