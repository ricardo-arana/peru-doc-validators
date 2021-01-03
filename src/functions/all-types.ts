import { TypesDoc } from "../models/types-doc.interface";


export const allTypes: TypesDoc[] = [
    { tipo: '01', descripcionLarga: 'Documento Nacional de identidad', descripcionCorta: 'DNI', 
    longitud: 8, formato: 'NUMERICO', tipoContribuyente: 'SoloNacionales'  , indicadorLongitud: 'Exacta' },

    { tipo: '04', descripcionLarga: 'CARNET DE EXTRANJERIA', descripcionCorta: 'CE', 
    longitud: 12, formato: 'ALFANUMERICO', tipoContribuyente: 'Ambos'  , indicadorLongitud: 'Maxima' },

    { tipo: '06', descripcionLarga: 'REG. UNICO DE CONTRIBUYENTES', descripcionCorta: 'RUC', 
    longitud: 11, formato: 'NUMERICO', tipoContribuyente: 'SoloNacionales'  , indicadorLongitud: 'Exacta' },

    { tipo: '07', descripcionLarga: 'PASAPORTE', descripcionCorta: 'PASAPORTE', 
    longitud: 12, formato: 'ALFANUMERICO', tipoContribuyente: 'Ambos'  , indicadorLongitud: 'Maxima' },

    { tipo: '11', descripcionLarga: 'PART. DE NACIMIENTO-IDENTIDAD', descripcionCorta: 'P. NAC.', 
    longitud: 15, formato: 'ALFANUMERICO', tipoContribuyente: 'SoloNacionales'  , indicadorLongitud: 'Maxima' },

    { tipo: '00', descripcionLarga: 'OTROS', descripcionCorta: 'OTROS', 
    longitud: 15, formato: 'ALFANUMERICO', tipoContribuyente: 'SoloExtranjeros'  , indicadorLongitud: 'Maxima' },

]
