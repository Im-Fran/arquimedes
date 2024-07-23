import {Link} from "react-router-dom";

const AccessButton = () => <Link to={"/autenticar"}>
    <button
        className={"bg-teal-600 border-2 border-teal-600 hover:bg-transparent uppercase text-zinc-100 hover:text-teal-600 px-5 py-1 rounded-lg transition duration-300 font-semibold"}>
        Acceder
    </button>
</Link>;

export default AccessButton