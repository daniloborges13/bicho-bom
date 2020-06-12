import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MypubsPage } from './mypubs.page';

describe('MypubsPage', () => {
  let component: MypubsPage;
  let fixture: ComponentFixture<MypubsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypubsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MypubsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
