import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout(){
    return(
        <div className="Help-layout">
            <h2>Website Help</h2>
            <p>eywasfnm,zcxadrhdfjkjwelk
                esfhuixsjhfckjxdnsdk
                sdhfksjfsd,nrmwenterk
                djkfsdfcnxm
                jfksdur9weurfio
                
            </p>
            <Outlet/>
            <nav>
                <NavLink to="faq">View the faq</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>
        </div>
    )
}