

export interface TypesDoc {
    tipo: string;
    descripcionLarga: string;
    descripcionCorta: string;
    longitud: number;
    formato: 'NUMERICO' | 'ALFANUMERICO';
    tipoContribuyente: TipoContribuyente;
    indicadorLongitud: IndicadorLongitud;
}



export type TipoContribuyente = 'SoloNacionales' | 'SoloExtranjeros' | 'Ambos'

export type IndicadorLongitud = 'Exacta' | 'Maxima';