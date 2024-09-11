
const Navbar = () => {
    return (
        <nav className="bg-white border-b shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <span className="text-xl font-bold text-gray-800">Gruppe 3</span>
                    </div>

                    {/* Menu Items */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-800 hover:text-gray-600">
                            Teamet
                        </a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">
                            Om Oss
                        </a>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <button className="text-gray-800 hover:text-gray-600 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;