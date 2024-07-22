import {useState} from "react";
import {Navigate} from "react-router-dom";

const AuthForm = () => {

    const [isAuthenticated, setAuthenticated] = useState(false)

    const validateRUT = (rut) => {
        // Remove any dots and hyphens
        let cleanedRUT = rut.replace(/\./g, '').replace(/-/g, '');

        // Separate the number from the check digit
        let number = cleanedRUT.slice(0, -1);
        let checkDigit = cleanedRUT.slice(-1).toUpperCase();

        // Calculate the check digit
        let sum = 0;
        let multiplier = 2;
        for (let i = number.length - 1; i >= 0; i--) {
            sum += multiplier * parseInt(number.charAt(i));
            multiplier = multiplier < 7 ? multiplier + 1 : 2;
        }
        let calculatedCheckDigit = 11 - (sum % 11);
        if (calculatedCheckDigit === 11) {
            calculatedCheckDigit = '0';
        } else if (calculatedCheckDigit === 10) {
            calculatedCheckDigit = 'K';
        } else {
            calculatedCheckDigit = calculatedCheckDigit.toString();
        }

        // Check if the provided check digit matches the calculated one
        console.log({ checkDigit, calculatedCheckDigit })
        return checkDigit === calculatedCheckDigit;
    }

    const onSubmit = () => {
        const run = document.getElementById('run').value
        const nombre = document.getElementById('nombre').value
        // const clave = document.getElementById('clave').value
        if (!validateRUT(run)) {
            alert('R.U.N inválido. Por favor ingrese un R.U.N válido.')
            return
        }

        localStorage.setItem("nombre", nombre)
        localStorage.setItem("run", run)

        setAuthenticated(() => true)
    }

    return <form onSubmit={onSubmit}>
        {isAuthenticated && <Navigate to={"/"}/>}
        <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                placeholder="Sophia Lira"
            />
        </div>
        <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="run">R.U.N</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="run"
                type="text"
                placeholder="21.502.084-3"
                pattern={"^(\\d{1,2}(?:[\\.]?\\d{3}){2}-[\\dkK])$"}
            />
        </div>
        <div className="mb-6">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="clave">Clave</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="clave"
                type="password"
                placeholder="•••••••••"
            />
        </div>
        <div className="flex items-center justify-between">
            <button className="bg-teal-600 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                Acceder
            </button>
        </div>
    </form>
}

export default AuthForm