import React, { useContext, useState } from 'react';
import { NumeroDocumentoContext } from "../NumeroDocumentoContext";
import { InputNumber } from "primereact/inputnumber"
import { Button } from "primereact/button"
import axios from 'axios';

function Dni() {
    const { numeroDocumento, setNumeroDocumento } = useContext(NumeroDocumentoContext);

    const [DniInfo, setDniInfo] = useState({
        success: "",
        dni: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        nombres: "",
        codVerifica: ""
    });
    const [e, setE] = useState(false);
    const [estado, setEstado] = useState(false);

    const buscarDNI = () => {
        axios.get(`https://dniruc.apisperu.com/api/v1/dni/${numeroDocumento}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InBhcmFpbXByZXNpb25pbXByZXNpb25lc2NsYWpAZ21haWwuY29tIn0.fzAAg1GFZAgUQjp67YvSCzWAVTjcJbZn_JjW6xhImPg`)
            .then(response => {
                console.log(response.data);
                setDniInfo(response.data);
                setEstado(true);
            })
            .catch(error => {
                if (error.response.status === 500) {
                    setE(true);
                }
                setDniInfo({
                    success: "",
                    dni: "",
                    apellidoPaterno: "",
                    apellidoMaterno: "",
                    nombres: "",
                    codVerifica: ""
                });
                setEstado(false);
            });
    };

    return (
        <>
            <p className="text-center text-xl">Consultar DNI</p>
            <div className="flex gap-1 justify-content-between">
                <InputNumber
                    className="w-full p-inputtext-sm"
                    useGrouping={false}
                    maxLength={8}
                    value={numeroDocumento}
                    onValueChange={(e) => setNumeroDocumento(e.target.value)}
                />
                <Button
                    className="xl:flex lg:flex md:flex sm:hidden hidden"
                    icon="pi pi-search"
                    onClick={buscarDNI}
                />
            </div>
            <Button
                className="xl:hidden lg:hidden md:hidden sm:flex flex"
                label="Buscar"
                icon="pi pi-search"
                onClick={buscarDNI}
            />

            <div className="flex flex-column gap-2 text-white text-xs">
                {e ? <p className="text-center text-gray-500 text-lg">No se encontraron resultados.</p> :
                    <>
                        <p className={`bg-${estado ? `green` : `gray`}-400 border-round-lg p-2`} >
                            <b>DNI:</b> {DniInfo.dni}
                        </p>
                        <p className={`bg-${estado ? `green` : `gray`}-400 border-round-lg p-2`} >
                            <b>Nombres:</b> {DniInfo.nombres}
                        </p>
                        <p className={`bg-${estado ? `green` : `gray`}-400 border-round-lg p-2`} >
                            <b>Apellido Paterno:</b> {DniInfo.apellidoPaterno}
                        </p>
                        <p className={`bg-${estado ? `green` : `gray`}-400 border-round-lg p-2`} >
                            <b>Apellido Paterno:</b> {DniInfo.apellidoMaterno}
                        </p>
                    </>
                }
            </div>
        </>
    );
}

export default Dni;
