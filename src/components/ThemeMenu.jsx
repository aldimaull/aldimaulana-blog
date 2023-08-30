import { Listbox } from "@headlessui/react";
import { useColorToggle } from "../js/hooks";

const colors = [
 { id: 1, name: "Default Theme", ct: "theme-default" },
 { id: 2, name: "Lavender Lush", ct: "theme-purple" },
 { id: 3, name: "Earthtone Espresso", ct: "theme-yellow" },
 { id: 4, name: "Crimson Charm", ct: "theme-red" },
 { id: 5, name: "Cerulean Serenity", ct: "theme-blue" },
];

export default function MyListbox() {
 const [selectedColor, setSelectedColor] = useColorToggle(colors);

 return (
  <Listbox
   as="div"
   value={selectedColor}
   onChange={setSelectedColor}
   className="flex flex-col-reverse md:flex-col capitalize"
  >
   <Listbox.Options className="p-1 text-center mb-2 rounded-lg border border-outline-light dark:border-outline-dark bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark mt-2 md:mt-0 md:text-xs">
    {colors.map((color) => (
     <Listbox.Option
      key={color.id}
      value={color}
      className="rounded-full py-2 cursor-pointer hover:bg-on-secondary-light dark:hover:bg-on-secondary-dark md:text-xs"
     >
      {color.name}
     </Listbox.Option>
    ))}
   </Listbox.Options>
   <Listbox.Button
    className=" p-2 rounded-full border border-outline-light dark:border-outline-dark text-outline-light hover:bg-surface-high-light md:text-xs mx-2"
   >
    {selectedColor.name}
   </Listbox.Button>
  </Listbox>
 );
}
