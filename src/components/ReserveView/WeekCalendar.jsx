const WeekCalendar = ({ fecha, setFecha }) => {
    const getMonthDays = (date) => {
        const start = new Date(date.getFullYear(), date.getMonth(), 1);
        const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        return { start, end };
    };

    const generateMonthDays = (start, end) => {
        const days = [];
        // Determine the day of the week for the first day of the month
        let dayOfWeek = start.getDay();
        // Adjust dayOfWeek to consider Monday as the first day of the week
        dayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Convert Sunday from 0 to 6, shift other days
        // Fill the initial slots with null if the month does not start on a Monday
        for (let i = 0; i < dayOfWeek; i++) {
            days.push(null);
        }
        let currentDate = new Date(start);
        while (currentDate <= end) {
            days.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return days;
    };

    const { start, end } = getMonthDays(fecha);
    const monthDays = generateMonthDays(start, end);

    return (
        <table className="table-auto w-full bg-neutral-100">
            <thead>
            <tr>
                <th className={"bg-neutral-400"}>Lunes</th>
                <th className={"bg-neutral-300"}>Martes</th>
                <th className={"bg-neutral-400"}>Miércoles</th>
                <th className={"bg-neutral-300"}>Jueves</th>
                <th className={"bg-neutral-400"}>Viernes</th>
                <th className={"bg-neutral-300"}>Sábado</th>
                <th className={"bg-neutral-400"}>Domingo</th>
            </tr>
            </thead>
            <tbody>
            {Array.from({length: Math.ceil(monthDays.length / 7)}).map((_, weekIndex) => (
                <tr key={weekIndex}>
                    {Array.from({length: 7}).map((_, dayIndex) => {
                        const day = monthDays[weekIndex * 7 + dayIndex];
                        if (!day) {
                            return <td key={dayIndex} className="p-2 border-none bg-neutral-300/50"></td>;
                        }
                        const isEvenColumn = dayIndex % 2 === 0;
                        const bgColorClass = isEvenColumn ? 'bg-neutral-600' : 'bg-neutral-300';
                        return (
                            <td key={dayIndex}
                                className={`${bgColorClass} p-2 ${fecha.getDate() === day.getDate() && fecha.getMonth() === day.getMonth() && 'bg-blue-500 text-white'} cursor-pointer border`}
                                onClick={() => setFecha(day)}>
                                {day.getDate()}
                            </td>
                        );
                    })}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default WeekCalendar;