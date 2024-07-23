import Navigation from "../components/Navigation.jsx";
import Banner from "../components/MainView/Banner.jsx";
import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import Calendar from "../components/ReserveView/Calendar.jsx";
import WeekCalendar from "../components/ReserveView/WeekCalendar.jsx";

const ReserveView = () => {

    const [fecha, setFecha] = useState(new Date())
    const [requireTransporte, setRequireTransporte] = useState(false)
    const [disponibilidad, setDisponibilidad] = useState(false)
    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)

    useEffect(() => {
        const onLocalStorageUpdate = () => {
            setUser(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)
            const reservas = localStorage.getItem('reservas') != null ? JSON.parse(localStorage.getItem('reservas')) : []
            if ((reservas || []).some(reserva => reserva.fecha >= new Date())) {
                setDisponibilidad(false)
            }
        }

        document.addEventListener('localStorageSetItem', onLocalStorageUpdate);
        return () => document.removeEventListener('localStorageSetItem', onLocalStorageUpdate);
    }, [])

    useEffect(() => {
        const reservas = localStorage.getItem('reservas') != null ? JSON.parse(localStorage.getItem('reservas')) : []
        if ((reservas || []).some(reserva => reserva.fecha === fecha.toISOString())) {
            setDisponibilidad(false)
            return
        }

        const now = new Date()
        setDisponibilidad(fecha >= now)
    }, [fecha]);

    const reservar = () => {
        const reservas = (localStorage.getItem('reservas') != null ? JSON.parse(localStorage.getItem('reservas')) : []) || []
        const newReserva = {fecha: fecha.toISOString(), requireTransporte}
        localStorage.setItem('reservas', JSON.stringify([...reservas, newReserva]))
        setDisponibilidad(false)
    }

    return <>
        <Navigation/>
        {user == null && <Navigate to={"/"}/>}

        <div className={"container mx-auto min-h-screen"}>
            <h1 className="text-4xl font-bold text-center my-8 text-teal-600">Reserva de Hora</h1>
            <div className={"grid grid-cols-1 md:grid-cols-5 gap-5 mx-5 md:mx-0"}>
                <div className={"col-span-1 gap-10 flex flex-col items-center justify-center"}>
                    <Calendar fecha={fecha} setFecha={setFecha}/>
                    <div className={"bg-neutral-300 w-64 py-2 rounded-sm"}>
                        <label className={"flex items-center justify-center gap-2"}>
                            Requiere transporte
                            <input
                                type={"checkbox"}
                                checked={requireTransporte}
                                onChange={(e) => setRequireTransporte(e.target.checked)}
                                className={"w-6 h-6"}
                            />
                        </label>
                    </div>

                    <div className={"flex flex-col bg-neutral-300 w-64 pb-2 rounded-sm"}>
                        <h3 className={"text-xl font-bold py-2 rounded-t-sm text-center bg-neutral-500 text-neutral-50"}>DISPONIBILIDAD</h3>
                        <button onClick={reservar} disabled={!disponibilidad}
                                className={`text-center my-5 mx-10 p-1.5 rounded-md ${disponibilidad ? 'bg-green-700 text-neutral-100' : 'text-neutral-50 bg-red-700'}`}>{disponibilidad ? "Reservar" : "No disponible"}</button>
                    </div>
                </div>
                <div className={"col-span-4 mx-5"}>
                    <WeekCalendar fecha={fecha} setFecha={setFecha}/>
                </div>
            </div>
        </div>
    </>
}

export default ReserveView