import { Timestamp } from 'rxjs';

export class Perdidos {
    id?: string;
    nomePet: string;
    proprietario: string;
    telefone: string;
    obs: string;
    dataPerdido: Timestamp<any>;
}