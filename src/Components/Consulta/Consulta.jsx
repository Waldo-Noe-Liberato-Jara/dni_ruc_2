import React, { useState, useContext } from 'react';
import { NumeroDocumentoContext } from "../NumeroDocumentoContext";
import Dni from './Dni';
import Ruc from './Ruc';

function Consulta() {
    const { numeroDocumento, setNumeroDocumento } = useContext(NumeroDocumentoContext);
    const [estado, setEstado] = useState(true);

    const HandleEstado = (e) => {
        setEstado(e);
        setNumeroDocumento("");
        console.log(numeroDocumento);
    }

    return (
        <div className="mt-4 m-auto xl:w-6 lg:w-6 md:w-6 sm:w-6 w-9">
            <div className="flex flex-column bg-white border-round-lg p-4 gap-3">
                <h1 className="text-center">Consulta de Documentos</h1>

                <div className="flex flex-column gap-3">
                    <div className="flex text-base text-white">
                        <p
                            className={`flex-1 border-gray-500 border-round-left-xl p-1 text-center ${estado ? 'bg-indigo-500' : `bg-gray-400`}`}
                            onClick={() => HandleEstado(true)}
                        >Consultar DNI</p>
                        <p
                            className={`flex-1 border-gray-500 border-round-right-xl p-1 text-center ${!estado ? 'bg-indigo-500' : `bg-gray-400`}`}
                            onClick={() => HandleEstado(false)}
                        >Consultar RUC</p>
                    </div>

                    <div className="flex-1 flex flex-column gap-3">
                        {estado ? <Dni /> : <Ruc />}


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Consulta;