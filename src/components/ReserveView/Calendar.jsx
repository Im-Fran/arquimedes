import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/24/solid/index.js";
import {capitalize} from "../../utils.js";

// eslint-disable-next-line react/prop-types
const Calendar = ({ fecha, setFecha }) => {
    const aumentarMes = () => setFecha((prev) => {
        const dateCopy = new Date(prev);
        dateCopy.getMonth() === 11 ? dateCopy.setMonth(0) : dateCopy.setMonth(prev.getMonth() + 1);
        return dateCopy;
    });

    const disminuirMes = () => setFecha((prev) => {
        const dateCopy = new Date(prev);
        dateCopy.getMonth() === 0 ? dateCopy.setMonth(11) : dateCopy.setMonth(prev.getMonth() - 1);
        return dateCopy;
    });

    // Format the current fecha to HH:mm format for the input value
    const formatTime = (date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    // Update fecha with the new time while keeping the current date
    const handleTimeChange = (event) => {
        const [hours, minutes] = event.target.value.split(':').map(Number);
        const updatedFecha = new Date(fecha);
        updatedFecha.setHours(hours, minutes);
        setFecha(updatedFecha);
    };

    return <div className={"w-64"}>
        <div className={"flex items-center justify-between bg-neutral-600 text-neutral-50 rounded-t-sm p-2"}>
            <ArrowLeftIcon className={"w-6 h-6"} onClick={disminuirMes}/>
            <span style={{ width: '120px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }} className={"text-center"}>
                {capitalize(fecha.toLocaleString('es-CL', { month: 'long' }))}
            </span>
            <ArrowRightIcon className={"w-6 h-6"} onClick={aumentarMes}/>
        </div>

        <div className={"flex items-center justify-center"}>
            <input
                type={"time"}
                value={formatTime(fecha)}
                onChange={handleTimeChange}
                className={"w-full h-16 outline-none focus:outline-none border-none focus:border-none text-center text-neutral-900 bg-neutral-300 border-2 border-neutral-600 rounded-b-sm"}
            />
        </div>
    </div>
}

export default Calendar;