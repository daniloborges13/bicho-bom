import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyanimalperdidoPage } from './myanimalperdido.page';

describe('MyanimalperdidoPage', () => {
  let component: MyanimalperdidoPage;
  let fixture: ComponentFixture<MyanimalperdidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyanimalperdidoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyanimalperdidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
