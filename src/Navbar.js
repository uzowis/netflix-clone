import { useEffect, useState } from "react";
import "./Navbar.css";
const Navbar = () => {
    const [show, showNav] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 100){
                showNav(true);
            }else{
                showNav(false);
            }
        }); return () => {
            window.removeEventListener('scroll');
        }
    }, []);
    return ( 
        <div className={`navbar ${show && 'nav_black'}`}>
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" 
            alt="logo" 
            className="nav_logo" />

            <img 
            src="https://i.pinimg.com/474x/5d/0f/9c/5d0f9ca26f942f0eda69ffd4dc1710dc.jpg" 
            alt="avarta" 
            className="avarta" />

        </div>
     );
}
 
export default Navbar;