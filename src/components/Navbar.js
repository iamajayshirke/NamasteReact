import { Link } from "react-router-dom"


const Navbar = () => {
return(
    <div className="flex justify-between items-center px-5 shadow-md">
        <div><img src="https://i.pinimg.com/736x/0f/27/7f/0f277f5f07a6399788894bc1062b5308.jpg" alt="Logo" className="w-20"/></div>
        <div >
            <ul className="flex gap-3">
                <li><Link to={"/"}>Home</Link></li>
                <li>Restaurant</li>
                <li>Contact</li>
                <Link to={"/offer"}><li>Offers</li></Link>
            </ul>
        </div>
        <div className="flex gap-3">
            <button className="flex-none rounded-md bg-indigo-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Signup</button>
            <button className="cursor-pointer">Login</button>
        </div>
    </div>
)
}
export default Navbar