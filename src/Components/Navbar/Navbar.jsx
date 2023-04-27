import { NavLink } from "react-router-dom"

export default function Navbar() {

    return (
        <div className="flex justify-content-between align-items-center w-full text-navbar text-white p-2 flex-wrap">
            <NavLink style={{ textDecoration: "none" }} to={"/"}>
                <p className="font-bold text-3xl text-white ml-4">RD</p>
            </NavLink>

            <div className="flex gap-3 text-lg  ml-4 mr-4 white-space-nowrap flex-wrap">
                <NavLink style={{ textDecoration: "none" }} to={"/consultas"}>
                    <p className="text-white">Consultas</p>
                </NavLink>

                <p className="text-white">Acerca de nosotros</p>
            </div>
        </div>
    )
}