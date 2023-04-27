import React, { useContext, useState } from 'react';
import { NumeroDocumentoContext } from "../NumeroDocumentoContext";
import { InputNumber } from "primereact/inputnumber"
import { Button } from "primereact/button"
import axios from 'axios';

function Ruc() {
    const { numeroDocumento, setNumeroDocumento } = useContext(NumeroDocumentoContext);
    const [RucInfo, setRucInfo] = useState({
        ruc: "",
        razonSocial: "",
        nombreComercial: "",
        telefonos: [],
        tipo: "",
        estado: "",
        condicion: "",
        direccion: "",
        departamento: "",
        provincia: "",
        distrito: "",
        fechaInscripcion: "",
        sistEmsion: "",
        sistContabilidad: "",
        actExterior: "",
        actEconomicas: [],
        cpPago: [],
        sistElectronica: [],
        fechaEmisorFe: "",
        cpeElectronico: [],
        fechaPle: "",
        padrones: [],
        fechaBaja: "",
        profesion: "",
        ubigeo: "",
        capital: ""
    });
    const [estado, setEstado] = useState(false);

    const buscarRUC = () => {
        axios.get(`https://dniruc.apisperu.com/api/v1/ruc/${numeroDocumento}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InBhcmFpbXByZXNpb25pbXByZXNpb25lc2NsYWpAZ21haWwuY29tIn0.fzAAg1GFZAgUQjp67YvSCzWAVTjcJbZn_JjW6xhImPg`)
            .then(response => {
                console.log(response.data);
                setRucInfo(response.data)

                if ("success" in response.data) {
                    response.data?.success ? setEstado(true) : setEstado(false);
                } else {
                    setEstado(true)
                }
            })
            .catch(error => {
                console.log(error);
                setEstado(false);
                setRucInfo({
                    ruc: "",
                    razonSocial: "",
                    nombreComercial: "",
                    telefonos: [],
                    tipo: "",
                    estado: "",
                    condicion: "",
                    direccion: "",
                    departamento: "",
                    provincia: "",
                    distrito: "",
                    fechaInscripcion: "",
                    sistEmsion: "",
                    sistContabilidad: "",
                    actExterior: "",
                    actEconomicas: [],
                    cpPago: [],
                    sistElectronica: [],
                    fechaEmisorFe: "",
                    cpeElectronico: [],
                    fechaPle: "",
                    padrones: [],
                    fechaBaja: "",
                    profesion: "",
                    ubigeo: "",
                    capital: ""
                });
            });
    };

    return (
        <>
            <p className="text-center text-xl">Consultar RUC</p>
            <div className="flex gap-1 justify-content-between">
                <InputNumber
                    className="w-full p-inputtext-sm"
                    useGrouping={false}
                    maxLength={11}
                    value={numeroDocumento}
                    onValueChange={(e) => setNumeroDocumento(e.target.value)}
                />
                <Button
                    className="xl:flex lg:flex md:flex sm:hidden hidden"
                    icon="pi pi-search"
                    onClick={buscarRUC}
                />
            </div>
            <div className="flex flex-column gap-2 text-white text-xs">
                {
                    "success" in RucInfo ? <p className="text-center text-gray-500 text-lg">No se encontraron resultados.</p> :
                        <>
                            <p className={`bg-${estado ? `green` : `gray`}-400 border-round-lg p-2`} >
                                <b>RUC:</b> {RucInfo.ruc}
                            </p>
                            <p className={`bg-${estado ? `green` : `gray`}-400 border-round-lg p-2`} >
                                <b>Razón Social:</b> {RucInfo.razonSocial}
                            </p>
                            <p className={`bg-${estado ? `green` : `gray`}-400 border-round-lg p-2`} >
                                <b>Dirección:</b> {RucInfo.direccion}
                            </p>
                            <p className={`bg-${estado ? `green` : `gray`}-400 border-round-lg p-2`} >
                                <b>Ubigeo:</b> {RucInfo.ubigeo}
                            </p>
                        </>
                }
            </div>
        </>
    );
}

export default Ruc;
