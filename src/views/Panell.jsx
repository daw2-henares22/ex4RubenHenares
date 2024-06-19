import TablaPendientes from "../components/TablaPendientes";
import TablaResueltos from "../components/TablaResueltos";


export default function Panel() {
    return (
        <>
            <h1>Tickets Pendientes</h1>
                <TablaPendientes />
            <h1>Tickets Resueltos</h1>
                <TablaResueltos />
        </>
      );
  }