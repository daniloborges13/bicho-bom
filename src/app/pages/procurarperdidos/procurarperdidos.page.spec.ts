import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProcurarperdidosPage } from './procurarperdidos.page';

describe('ProcurarperdidosPage', () => {
  let component: ProcurarperdidosPage;
  let fixture: ComponentFixture<ProcurarperdidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcurarperdidosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProcurarperdidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
