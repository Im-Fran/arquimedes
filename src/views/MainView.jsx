import Navigation from "../components/Navigation";
import BotonTarjeta from "../components/MainView/BotonTarjeta";
import Banner from "../components/MainView/Banner.jsx";

const botones = [
    { nombre: 'Reservar Hora', imagen: 'reloj', link: 'reserva-hora'},
    { nombre: 'Hora de Atención', imagen: 'calendario', link: 'hora-de-atencion'},
    // { nombre: 'Vacunación', imagen: 'vacuna', link: 'vacunacion'},
    { nombre: 'Servicios Médicos', imagen: 'corazon', link: 'servicios-medicos'}
]

const MainView = () => <>
    <Navigation/>
    <div className={"container mx-auto min-h-screen"}>
        <Banner/>

        <div className={"grid grid-cols-1 md:grid-cols-3 gap-5 mx-5 md:mx-0"}>
            {botones.map((boton, idx) => (<BotonTarjeta key={idx} {...boton}/>))}
        </div>
    </div>
</>

export default MainView
