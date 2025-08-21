import { Link } from "react-router-dom"


const Navbar = () => {
return(
    <div style={{display:'flex', justifyContent:"space-between", alignItems:'center',}}>
        <div><img src="https://i.pinimg.com/736x/0f/27/7f/0f277f5f07a6399788894bc1062b5308.jpg" alt="Logo" style={{width:100,height:100}}/></div>
        <div>
            <ul style={{display:'flex',listStyle:'none',gap:20,cursor:"pointer"}}>
                <li><Link to={"/"}>Home</Link></li>
                <li>Restaurant</li>
                <li>Contact</li>
                <Link to={"/offer"}><li>Offers</li></Link>
            </ul>
        </div>
        <div style={{display:"flex",gap:10}}>
            <button>Signup</button>
            <button>Login</button>
        </div>
    </div>
)
}
export default Navbar