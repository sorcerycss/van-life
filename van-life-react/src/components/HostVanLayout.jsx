// import { NavLink, Outlet } from "react-router-dom"

// export default function HostVanLayout() {

//     const hostVanLayoutStyle = {
//         fontWeight: "bold",
//         textDecoration: "underline",
//         color: "#161616",
//     }

//     return (
//         <>
//             <Outlet />

//             <nav className="host-vans-navbar">
//                 <NavLink
//                     style={({isActive}) => isActive ? hostVanLayoutStyle : null}
//                     to="."
//                     end
//                 >
//                     Details
//                 </NavLink>
//                 <NavLink
//                     style={({isActive}) => isActive ? hostVanLayoutStyle : null}
//                      to="pricing"
//                 >
//                     Pricing
//                 </NavLink>
//                 <NavLink
//                     style={({isActive}) => isActive ? hostVanLayoutStyle : null}
//                     to="photos"
//                 >
//                      Photos
//                  </NavLink>
//             </nav>
//         </>
//     )
// }