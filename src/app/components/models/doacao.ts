import { Timestamp } from 'rxjs';

export class Doacao {
    id?: string;
    nomePet: string;
    estado: string;
    cidade: string;
    sexo: string;
    tipoPet: string;
    celular: number;
    urlFoto: string;
    obs: string;
    dataDoacao: Timestamp<any>;
}