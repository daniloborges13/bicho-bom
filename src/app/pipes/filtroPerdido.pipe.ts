import { Perdidos } from './../components/models/perdidos';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPerdido'
})

export class FiltroPerdido implements PipeTransform {

  transform(perdidos: Perdidos[], buscarCidade: string): Perdidos[]{
    if(!perdidos || !buscarCidade){
      return perdidos;
    }

    return perdidos.filter(perdidos => 
        perdidos.cidade.toLowerCase().indexOf(buscarCidade.toLowerCase()) !== -1 );
  }
}
