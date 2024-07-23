import { useEffect, useState } from 'react';
import Navigation from "../components/Navigation.jsx";

const ReservedDatesView = () => {
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        const fetchedReservas = (localStorage.getItem('reservas') ? JSON.parse(localStorage.getItem('reservas')) : []).filter(it => {
            return new Date(it.fecha) > new Date(Date.now() - 15 * 60 * 1000);
        }).sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
        setReservas(fetchedReservas);
    }, []);

    return (
        <>
            <Navigation />
            <div className="container mx-auto min-h-screen p-4">
                <h1 className="text-4xl font-bold text-center my-8 text-teal-600">Horario de Atención</h1>
                <div className="mx-5">
                    {reservas.length > 0 ? (
                        <ul className="list-disc pl-5">
                            {reservas.map((reserva, index) => (
                                <li key={index} className="flex flex-col mb-4 bg-gray-100 p-4 rounded-lg shadow">
                                    <div><span className="font-semibold">Fecha:</span> {new Date(reserva.fecha).toLocaleDateString()} - {new Date(reserva.fecha).toLocaleTimeString()}</div>
                                    <div><span className="font-semibold"> Requiere Transporte:</span> {reserva.requireTransporte ? 'Sí' : 'No'}</div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-center text-red-500">No hay reservas.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default ReservedDatesView;