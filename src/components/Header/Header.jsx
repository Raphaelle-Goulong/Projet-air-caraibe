import './Header.css'
import Navbar from '../Header/Nav/Navbar'

function Header() {
    return (
        <header className="absolute top-0 left-0 w-full z-10 text-white p-6 flex justify-center items-center">
            <h1 className="text-2xl font-bold">Air Caraïbes</h1>
            <Navbar />
        </header>
    )
}

export default Header
