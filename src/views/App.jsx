import Navigation from "../components/Navigation.jsx";

const botones = ['transporte', 'especialidades', 'medicamentos', 'informacion']

const App = () => <>
    <Navigation/>
    <div className={"container mx-auto min-h-screen"}>
        <div className={"flex justify-center my-5"}>
            <img
                src={"/banner.png"}
                alt={"Persona entregando medicamentos"}
                className={"w-3/4 md:w-2/3 h-80 md:h-96 object-cover object-center rounded-2xl shadow-lg"}
            />
        </div>

        <div className={"grid grid-cols-2 md:grid-cols-4 gap-5 mx-5 md:mx-0"}>
            {botones.map(boton => (<button key={boton} className={"col-span-1"}>
                <div className={"flex flex-col justify-center items-center bg-[#5271FF] rounded-lg p-5 hover:shadow-2xl hover:scale-105 transition duration-500 ease-in-out"}>
                    <img src={`/iconos/${boton}.png`} alt={boton} className={"h-16"}/>
                    <span className={"text-zinc-100 uppercase mt-5 font-bold"}>{boton}</span>
                </div>
            </button>))}
        </div>
    </div>
</>

export default App
