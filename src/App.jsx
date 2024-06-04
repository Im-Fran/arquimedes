const botones = ['transporte', 'especialidades', 'medicamentos', 'informacion']

const App = () => <>
    <div>
        <nav className={"flex items-center justify-around my-5"}>
            <img
                src={"/logo.png"}
                alt={"Arquimedes"}
                className={"w-24"}
            />

            <div>
                <button className={"bg-[#07b7ae] uppercase text-zinc-100 px-5 py-3 rounded-lg"}>
                    Reservar Hora
                </button>
            </div>
        </nav>
        <div className={"border border-b border-[6px] border-black w-full mb-10"}></div>
    </div>
    <div className={"container mx-auto"}>
        <div className={"flex justify-center my-5"}>
            <img
                src={"/banner.png"}
                alt={"Persona entregando medicamentos"}
                className={"w-full h-96 object-cover object-center rounded-[5vw] shadow-lg"}
            />
        </div>

        <div className={"grid grid-cols-4 gap-5"}>
            {botones.map(boton => (<button key={boton} className={"col-span-1 flex flex-col items-center justify-center bg-[#5271FF] rounded-lg p-5 hover:shadow-2xl transition duration-500 ease-in-out"}>
                <img src={`/${boton}.png`} alt={boton} className={"h-16"}/>
                <span className={"text-zinc-100 uppercase mt-5 font-bold"}>{boton}</span>
            </button>))}
        </div>
    </div>
</>

export default App
