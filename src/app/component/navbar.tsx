import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-white z-50 sticky top-0 ">
            <header className="text-gray-600 body-font  bg-yellow-500">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-xl">Maryam</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="#Hero" className="mr-5 hover:text-violet-900">Home</Link>
                        <Link href="#About" className="mr-5 hover:text-violet-900">About</Link>
                        <Link href="#Contact" className="mr-5 hover:text-violet-900">Contact</Link>
                    </nav>
                </div>
            </header>
        </div>
    );
}