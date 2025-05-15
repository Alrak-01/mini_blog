const Navbar = () => {
    return ( 
        <nav className="flex items-center justify-between px-36 pt-10">
            <h2 className="text-red-600 text-2xl font-extrabold">Alrak Blog</h2>
            <ul className="flex items-center justify-between gap-5">
                <li className="bg-gray-200 hover:bg-red-600 hover:text-white text-sm px-3 py-1 rounded-sm delay-100 duration-300 transition-colors">
                    <a className="outline-none" href="/create">Home</a>
                </li>
                <li className="bg-gray-200 hover:bg-red-600 hover:text-white text-sm px-3 py-1 rounded-sm delay-100 duration-300 transition-colors">
                    <a className="outline-none" href="/create">New Blog</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;