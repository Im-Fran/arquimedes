import {string} from "postcss-selector-parser";

const BotonTarjeta = ({ nombre }) => <button className={"col-span-1"}>
    <div
        className={"flex flex-col justify-center items-center bg-teal-600 rounded-lg p-5 hover:shadow-2xl hover:scale-105 transition duration-500 ease-in-out"}>
        <img src={`/iconos/${nombre}.webp`} alt={nombre} className={"h-16"}/>
        <span className={"text-zinc-100 uppercase mt-5 font-bold"}>{nombre}</span>
    </div>
</button>

BotonTarjeta.propTypes = {
    nombre: string
}

export default BotonTarjeta
