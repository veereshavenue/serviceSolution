import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COMMERCIALROComponent } from './commercial-ro.component';

describe('COMMERCIALROComponent', () => {
  let component: COMMERCIALROComponent;
  let fixture: ComponentFixture<COMMERCIALROComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COMMERCIALROComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COMMERCIALROComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
