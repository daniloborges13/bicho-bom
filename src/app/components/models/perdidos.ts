import { Timestamp } from 'rxjs';

export class Perdidos {
    id?: string;
    nomePet: string;
    proprietario: string;
    celular: string;
    obs: string;
    dataPerdido: Timestamp<any>;
}