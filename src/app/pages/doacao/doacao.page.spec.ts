import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoacaoPage } from './doacao.page';

describe('DoacaoPage', () => {
  let component: DoacaoPage;
  let fixture: ComponentFixture<DoacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
