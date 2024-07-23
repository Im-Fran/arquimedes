import {Link} from "react-router-dom";

const ErrorView = () => <div className={"flex flex-col items-center justify-center min-h-screen w-full"}>
    <h1 className={"text-4xl font-bold text-center"}>O.o</h1>
    <p className={"text-2xl font-bold text-center"}>404 - Página no encontrada</p>
    <p className={"text-lg text-center"}>La página que buscas no existe o ha sido movida.</p>
    <Link to={"/"} className={"text-lg text-center text-teal-600"}>Volver al inicio</Link>
</div>

export default ErrorView;