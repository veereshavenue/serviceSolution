import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DOMESTICROComponent } from './domestic-ro.component';

describe('DOMESTICROComponent', () => {
  let component: DOMESTICROComponent;
  let fixture: ComponentFixture<DOMESTICROComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DOMESTICROComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DOMESTICROComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
