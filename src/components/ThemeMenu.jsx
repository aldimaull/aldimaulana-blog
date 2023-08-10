import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";

const color = [
 { id: 1, name: "Verdant Vibes", ct: "theme-main" },
 { id: 2, name: "Lavender Lush", ct: "theme-ungu" },
 { id: 3, name: "Earthtone Espresso", ct: "theme-kuning" },
 { id: 4, name: "Crimson Charm", ct: "theme-merah" },
 { id: 5, name: "Cerulean Serenity", ct: "theme-biru" },
];

export default function MyListbox() {
 const storedTheme = localStorage.getItem("colorTheme");
 const [selectedColor, setSelectedColor] = useState(
  color.find((p) => p.ct === storedTheme) || color[0]
 );

 useEffect(() => {
  const themeClasses = {
   "theme-ungu": ["theme-main", "theme-kuning", "theme-merah", "theme-biru"],
   "theme-kuning": ["theme-main", "theme-ungu", "theme-merah", "theme-biru"],
   "theme-merah": ["theme-main", "theme-ungu", "theme-kuning", "theme-biru"],
   "theme-biru": ["theme-main", "theme-ungu", "theme-kuning", "theme-merah"],
  };

  const classesToRemove = themeClasses[selectedColor.ct] || [
   "theme-kuning",
   "theme-ungu",
   "theme-merah",
   "theme-biru",
  ];
  const classToAdd =
   selectedColor.ct === undefined ? "theme-main" : selectedColor.ct;

  classesToRemove.forEach((className) => {
   document.documentElement.classList.replace(className, classToAdd);
  });

  // switch (selectedColor.ct) {
  //  case "theme-ungu":
  //   document.documentElement.classList.replace("theme-main", "theme-ungu");
  //   document.documentElement.classList.replace("theme-kuning", "theme-ungu");
  //   document.documentElement.classList.replace("theme-merah", "theme-ungu");
  //   document.documentElement.classList.replace("theme-biru", "theme-ungu");
  //   break;
  //  case "theme-kuning":
  //   document.documentElement.classList.replace("theme-main", "theme-kuning");
  //   document.documentElement.classList.replace("theme-ungu", "theme-kuning");
  //   document.documentElement.classList.replace("theme-merah", "theme-kuning");
  //   document.documentElement.classList.replace("theme-biru", "theme-kuning");
  //   break;
  //  case "theme-merah":
  //   document.documentElement.classList.replace("theme-main", "theme-merah");
  //   document.documentElement.classList.replace("theme-ungu", "theme-merah");
  //   document.documentElement.classList.replace("theme-kuning", "theme-merah");
  //   document.documentElement.classList.replace("theme-biru", "theme-merah");
  //   break;
  //  case "theme-biru":
  //   document.documentElement.classList.replace("theme-main", "theme-biru");
  //   document.documentElement.classList.replace("theme-ungu", "theme-biru");
  //   document.documentElement.classList.replace("theme-kuning", "theme-biru");
  //   document.documentElement.classList.replace("theme-merah", "theme-biru");
  //   break;
  //  default:
  //   document.documentElement.classList.replace("theme-kuning", "theme-main");
  //   document.documentElement.classList.replace("theme-ungu", "theme-main");
  //   document.documentElement.classList.replace("theme-merah", "theme-main");
  //   document.documentElement.classList.replace("theme-biru", "theme-main");
  // }
  localStorage.setItem("colorTheme", selectedColor.ct);
 }, [selectedColor.ct]);

 return (
  <Listbox
   as="div"
   value={selectedColor}
   onChange={setSelectedColor}
   className="flex flex-col-reverse md:flex-col capitalize"
  >
   <Listbox.Options className="p-1 text-center mb-2 rounded-lg border border-outline-light dark:border-outline-dark bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark mt-2 md:mt-0 md:text-xs">
    {color.map((person) => (
     <Listbox.Option
      key={person.id}
      value={person}
      className="rounded-full py-2 cursor-pointer hover:bg-on-secondary-light dark:hover:bg-on-secondary-dark md:text-xs"
     >
      {person.name}
     </Listbox.Option>
    ))}
   </Listbox.Options>
   <Listbox.Button
    className=" p-2 rounded-full border border-outline-light dark:border-outline-dark text-outline-light hover:bg-surface-high-light md:text-xs mx-2"
    horizontal
   >
    {selectedColor.name}
   </Listbox.Button>
  </Listbox>
 );
}
