import {Utilisateur} from './utilisateur';

export class Garagiste extends Utilisateur {
    specialite: string;
    anneesExperience: number;
    dateNaissance: Date;
    dateEmbauche: Date;
}
