import {useState} from "react";
import AccessButton from "./Navigation/AccessButton.jsx";
import AvatarButton from "./Navigation/AvatarButton.jsx";

const Navigation = () => {

    const [user] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);

    return <div>
        <nav className={"flex items-center justify-around my-5"}>
            <img
                src={"/logo.png"}
                alt={"Arquimedes"}
                className={"w-20 hover:cursor-pointer hover:scale-110 transition duration-500 ease-in-out"}
            />

            {user == null ? <AccessButton/> : <AvatarButton user={user}/>}
        </nav>
        <div className={"border-b border-[6px] border-black w-full my-2.5"}></div>
    </div>
}


export default Navigation