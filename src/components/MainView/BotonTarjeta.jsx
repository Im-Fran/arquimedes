import {string} from "prop-types";
import {Link} from "react-router-dom";

const BotonTarjeta = ({ link, nombre, imagen }) => <Link to={link} className={"col-span-1"}>
    <div
        className={"flex flex-col justify-center items-center bg-teal-600 rounded-lg p-5 hover:shadow-2xl hover:scale-105 transition duration-500 ease-in-out"}>
        <img src={`/iconos/${imagen || nombre}.webp`} alt={nombre} className={"h-16"}/>
        <span className={"text-zinc-100 uppercase mt-5 font-bold"}>{nombre}</span>
    </div>
</Link>

BotonTarjeta.propTypes = {
    link: string,
    nombre: string,
    imagen: string
}

export default BotonTarjeta
