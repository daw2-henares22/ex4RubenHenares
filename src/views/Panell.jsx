import { Modal } from "../components/Modal";
import { TablaPendientes } from "../components/TablaPendientes";

import { TablaResueltos } from "../components/TablaResueltos";

export function Panell(){
    return(
        <>
        <h1>Administración de incidencias</h1>
        
        <h2 className="mt-5">Tickets pendientes</h2>
            <TablaPendientes/>
            <Modal/>

        <h2 className="mt-5">Tickets resueltos</h2>
            <TablaResueltos/>
            <Modal/>
        </>
    )
}