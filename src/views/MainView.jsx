import Navigation from "../components/Navigation";
import BotonTarjeta from "../components/MainView/BotonTarjeta";
import Banner from "../components/MainView/Banner";

const botones = [
    { key: 'vacunacion', nombre: 'Vacunación', imagen: 'vacuna'},
    { key: 'servicios_medicos', nombre: 'Servicios Médicos', imagen: 'corazon'},
    { key: 'horario_de_atencion', nombre: 'Hora de Atención', imagen: 'calendario'},
    { key: 'reservar_hora', nombre: 'Reservar Hora', imagen: 'reloj'}
]

const MainView = () => <>
    <Navigation/>
    <div className={"container mx-auto min-h-screen"}>
        <Banner/>

        <div className={"grid grid-cols-2 md:grid-cols-4 gap-5 mx-5 md:mx-0"}>
            {botones.map(boton => (<BotonTarjeta key={boton.key} {...boton}/>))}
        </div>
    </div>
</>

export default MainView
