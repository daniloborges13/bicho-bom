import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MinhaspubPage } from './minhaspub.page';

describe('MinhaspubPage', () => {
  let component: MinhaspubPage;
  let fixture: ComponentFixture<MinhaspubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaspubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MinhaspubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
