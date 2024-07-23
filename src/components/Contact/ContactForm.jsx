import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        mensaje: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData
        data.set('entry.1044528348', formData.nombre)
        data.set('entry.1347773924', formData.correo)
        data.set('entry.831876806', formData.mensaje)

        // Send post request to Google Forms
        fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSdDwdVeM7lqtsTAbmo_G_NcH-XPUXoQ2DrIwe88SwONZOMpXA/formResponse', {
            method: 'POST',
            body: data,
            mode: 'no-cors',
        }).then(() => {
            alert('Muchas Gracias! Tu mensaje ha sido recibido.')

            setFormData({nombre: '', correo: '', mensaje: ''});
        }).catch(() => {
            alert('Hubo un error al enviar tu mensaje. Por favor, intenta de nuevo.')
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo</label>
                <input
                    type="email"
                    name="correo"
                    id="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">Mensaje</label>
                <textarea
                    name="mensaje"
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                ></textarea>
            </div>
            <div>
                <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                    Enviar Mensaje
                </button>
            </div>
        </form>
    );
};

export default ContactForm;