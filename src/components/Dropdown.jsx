import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDown } from 'lucide-react';
import { Globe } from 'lucide-react'
import { ChevronUp } from 'lucide-react';


export default function Dropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left text-customBlue">
            <div>
                <MenuButton className="inline-flex items-center justify-center gap-x-1.5  bg-transparent px-7 py-2 text-sm  ring-0 outline-none hover:border-b-2 hover:border-customBlue text-[12px]" >
                    <Globe />
                    Français - FR
                    <ChevronDown />
                    <ChevronUp />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 flex justify-center mt-2 w-30 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                <div className="py-1">
                    <MenuItem>
                        {({ active }) => (
                            <a
                                href="#"
                                className={`block px-4 py-2 text-sm ${
                                    active ? 'bg-customBlue text-white' : 'text-customBlue'
                                }`}>
                                Caraïbe - FR
                            </a>
                        )}
                    </MenuItem>
                    <MenuItem>
                        {({ active }) => (
                            <a
                                href="#"
                                className={`block px-4 py-2 text-sm ${
                                    active ? 'bg-customBlue text-white' : 'text-customBlue'
                                }`}>
                                English - EN
                            </a>
                        )}
                    </MenuItem>
                    <MenuItem>
                        {({ active }) => (
                            <a
                                href="#"
                                className={`block px-4 py-2 text-sm ${
                                    active ? 'bg-customBlue text-white' : 'text-customBlue'
                                }`}>
                                Español - ES
                            </a>
                        )}
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    )
}
