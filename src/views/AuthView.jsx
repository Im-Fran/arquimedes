import AuthForm from "../components/Auth/AuthForm.jsx";

const AuthView = () => (
    <div className="bg-neutral-100">
        <div className="grid grid-cols-5 w-full min-h-screen h-full">
            <div className="col-span-3 w-full h-full">
                <img
                    src="/banner_auth.webp"
                    alt="Enfermero ayudando a paciente"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="col-span-2 bg-neutral-300 relative w-full h-full">
                <img
                    src="/banner_auth.webp"
                    alt="Enfermero ayudando a paciente"
                    className="absolute w-full h-full object-cover object-right blur-[40px]"
                    style={{ zIndex: 1 }}
                />
                <div className="container mx-auto my-15 h-full flex items-center justify-center relative" style={{ zIndex: 2 }}>
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                        <div className={"mb-4"}>
                            <h1 className="text-xl font-bold">Te damos la bienvenida!</h1>
                            <span className="text-md text-neutral-800">Ingresa tus datos para continuar.</span>
                        </div>
                        <AuthForm/>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AuthView;