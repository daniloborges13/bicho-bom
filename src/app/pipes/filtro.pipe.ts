import { Doacao } from './../components/models/doacao';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})

export class FiltroPipe implements PipeTransform {

  transform(bichos: Doacao[], buscarCidade: string): Doacao[]{
    if(!bichos || !buscarCidade){
      return bichos;
    }


    return bichos.filter(bichos => 
      bichos.cidade.toLowerCase().indexOf(buscarCidade.toLowerCase()) !== -1 );
  }
}


