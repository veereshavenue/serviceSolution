import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { INDUSTRIALROComponent } from './industrial-ro.component';

describe('INDUSTRIALROComponent', () => {
  let component: INDUSTRIALROComponent;
  let fixture: ComponentFixture<INDUSTRIALROComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ INDUSTRIALROComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(INDUSTRIALROComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
