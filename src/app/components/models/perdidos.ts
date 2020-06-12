import { Timestamp } from 'rxjs';

export class Perdidos {
    id?: string;
    nomePet: string;
    cidade: string;
    estado: string;
    proprietario: string;
    celular: string;
    obs: string;
    dataPerdido: Timestamp<any>;
    urlFoto: string;
}