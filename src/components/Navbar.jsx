import Dropdown from '../components/Dropdown'
import { FlagTriangleRight } from 'lucide-react'
import { Headset } from 'lucide-react'
import { TicketsPlane } from 'lucide-react'


function Navbar() {
    return (
        <nav className="text-customBlue h-10 flex justify-end w-3/5 mx-10 rounded-t-lg items-center text-[12px] font-light ">
            <a href="#" className="flex  gap-2 items-center font-light hover:border-b-2 hover:border-customBlue">
                <TicketsPlane />
                Statut vols
            </a>
            <a href="#" className="flex gap-2 items-center ">
                <Headset />
                SAV
            </a>
            <a href="#" className="flex gap-2 items-center">
                <FlagTriangleRight />
                Agences
            </a>
            <Dropdown />
        </nav>
    )
}

export default Navbar
