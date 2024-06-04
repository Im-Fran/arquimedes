import Navigation from "../components/Navigation.jsx";
import BotonTarjeta from "../components/MainView/BotonTarjeta.jsx";

const botones = ['transporte', 'especialidades', 'medicamentos', 'informacion']

const MainView = () => <>
    <Navigation/>
    <div className={"container mx-auto min-h-screen"}>
        <div className={"flex justify-center my-5"}>
            <img
                src={"/banner.webp"}
                alt={"Persona entregando medicamentos"}
                className={"w-3/4 md:w-2/3 h-80 md:h-96 object-cover object-center rounded-2xl shadow-lg"}
            />
        </div>

        <div className={"grid grid-cols-2 md:grid-cols-4 gap-5 mx-5 md:mx-0"}>
            {botones.map(boton => (<BotonTarjeta key={boton} nombre={boton}/>))}
        </div>
    </div>
</>

export default MainView
