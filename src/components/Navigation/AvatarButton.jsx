import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sha256 from 'crypto-js/sha256';
import {shape, string} from "prop-types";

const AvatarButton = ({ user }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setShowDropdown(!showDropdown);

    const logout = () => {
        localStorage.setItem('user', null);
        localStorage.setItem('reservas', null);
        window.location.reload();
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        if (showDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showDropdown]);

    return (
        <div className={"relative flex items-center"}>
            <div className={"relative flex items-center bg-neutral-400 rounded-full pr-2"} onClick={toggleDropdown}>
                <object
                    data={`https://www.gravatar.com/avatar/${sha256(user.correo.trim().toLowerCase())}.webp?s=512&d=mp`}
                    type="image/webp" className={"w-10 h-10 rounded-full"} aria-label={`Avatar de ${user.nombre}`}>
                    <img
                        src={"/avatar.webp"}
                        alt={`Avatar de ${user.nombre}`}
                        className={"w-10 h-10 rounded-full"}
                    />
                </object>
                <svg xmlns={"http://www.w3.org/2000/svg"} className={"h-6 w-6 text-neutral-100 fill-none"}
                     viewBox={"0 0 24 24"} stroke={"currentColor"}>
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
            {showDropdown && <div ref={dropdownRef} className="absolute mt-12 top-0 right-0 bg-neutral-50 shadow-2xl rounded-lg w-48 border">
                <span className={"flex flex-col items-start text-sm px-4 py-2"}>Te damos la bienvenida,&nbsp;<span className={"text-teal-600 font-semibold"}>{user.nombre}</span></span>
                <div className={"border border-b"}/>
                <Link to="/reserva-hora" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-t-lg">Reserva Hora</Link>
                <Link to="/hora-de-atencion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hora de Atención</Link>
                {/*<Link to="/vacunacion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Vacunación</Link>*/}
                <Link to="/servicios-medicos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Servicios Médicos</Link>
                <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-lg">Cerrar Sesión</button>
            </div>}
        </div>
    );
};

AvatarButton.propTypes = {
    user: shape({
        nombre: string,
        correo: string,
        run: string,
    })
};

export default AvatarButton;