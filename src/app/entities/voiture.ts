import {Client} from './client';
import {Model} from './model';

export class Voiture {
    id: number;
    immatriculation: string;
    dateCirculation: Date;
    client: Client;
    model: Model;
}
