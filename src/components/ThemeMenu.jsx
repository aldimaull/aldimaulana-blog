import { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";

const color = [
 { id: 1, name: "Main", ct: "theme-main" },
 { id: 2, name: "Ungu", ct: "theme-ungu" },
];

export default function MyListbox() {
 const storedTheme = localStorage.getItem("colorTheme");
 const [selectedColor, setSelectedColor] = useState(
  color.find((p) => p.ct === storedTheme) || color[0]
 );

 useEffect(() => {
  if (selectedColor.ct === "theme-ungu") {
   document.documentElement.classList.replace("theme-main", "theme-ungu");
  } else {
   document.documentElement.classList.replace("theme-ungu", "theme-main");
  }
  localStorage.setItem("colorTheme", selectedColor.ct);
 }, [selectedColor.ct]);

 return (
  <Listbox
   as="div"
   value={selectedColor}
   onChange={setSelectedColor}
   className="flex flex-col-reverse md:flex-col"
  >
   <Listbox.Options className="p-2 text-center mb-2 rounded-lg border border-outline-light text-outline-light hover:bg-surface-high-light bg-secondary-container-light dark:bg-secondary-container-dark mt-2 md:mt-0">
    {color.map((person) => (
     <Listbox.Option
      key={person.id}
      value={person}
      className="rounded-full py-2 cursor-pointer hover:bg-secondary-light dark:hover:bg-secondary-dark"
     >
      {person.name}
     </Listbox.Option>
    ))}
   </Listbox.Options>
   <Listbox.Button
    className=" p-4 rounded-full border border-outline-light text-outline-light hover:bg-surface-high-light"
    horizontal
   >
    {selectedColor.name}
   </Listbox.Button>
  </Listbox>
 );
}
