import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdotePage } from './adote.page';

describe('AdotePage', () => {
  let component: AdotePage;
  let fixture: ComponentFixture<AdotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
