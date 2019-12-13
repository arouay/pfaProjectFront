import {Marque} from './marque';

export class Model {
    id: number;
    puissFiscal: number;
    designation: string;
    version: string;
    energie: string;
    boiteVitesse: string;
    dateCirculation: Date;
    marque: Marque;
}
