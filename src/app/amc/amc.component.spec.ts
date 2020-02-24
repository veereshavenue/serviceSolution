import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AMCComponent } from './amc.component';

describe('AMCComponent', () => {
  let component: AMCComponent;
  let fixture: ComponentFixture<AMCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AMCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
