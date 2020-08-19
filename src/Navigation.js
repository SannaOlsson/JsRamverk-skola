import React from 'react';
import { NavLink } from 'react-router-dom'

// Meny med en logo och länkar till två undersidor
function Navigation(){
    return(
        <div>
            <table className="menuBar">
                <tbody>
                    <tr>
                        <td>
                            <NavLink to="/">
                                <img href="filmPage.html" alt="poster" src="JustTrailers-Logo.png" height="85px" />
                            </NavLink> 
                        </td>
                        <td>
                            <NavLink to="/moviepage">TOP RATED</NavLink>
                        </td>
                        <td>
                        <NavLink to="/nowplaying">NOW PLAYING</NavLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Navigation;