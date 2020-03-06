import { Timestamp } from 'rxjs';

export class Doacao {
    id?: string;
    nomePet: string;
    raca: string;
    sexo: string;
    tipoPet: string;
    celular: number;
    obs: string;
    dataDoacao: Timestamp<any>;
}