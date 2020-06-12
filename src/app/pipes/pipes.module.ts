import { FiltroPerdido } from './filtroPerdido.pipe';
import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';

@NgModule({
  declarations: [FiltroPipe, FiltroPerdido],
  exports: [ FiltroPipe, FiltroPerdido]
})
export class PipesModule { }
