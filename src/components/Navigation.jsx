import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const Navigation = () => {

    const [nombre, setNombre] = useState('')

    useEffect(() => {
        const nombre = localStorage.getItem('nombre')
        setNombre(nombre)
    }, []);

    return <div>
        <nav className={"flex items-center justify-around my-5"}>
            <img
                src={"/logo.png"}
                alt={"Arquimedes"}
                className={"w-20 hover:cursor-pointer hover:scale-110 transition duration-500 ease-in-out"}
            />

            {(nombre || '').length === 0 ? <Link to={"/autenticar"}>
                <button
                    className={"bg-teal-600 border-2 border-teal-600 hover:bg-transparent uppercase text-zinc-100 hover:text-teal-600 px-5 py-1 rounded-lg transition duration-300 font-semibold"}>
                    Acceder
                </button>
            </Link> : <Link to={"/dashboard"}>
                <span className={"text-md"}>Te damos la bienvenida, <span className={"text-teal-600 font-bold"}>{ nombre }</span>!</span>
            </Link>}
        </nav>
        <div className={"border-b border-[6px] border-black w-full my-2.5"}></div>
    </div>
}


export default Navigation