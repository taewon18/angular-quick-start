import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sampel2Component } from './sampel2.component';

describe('Sampel2Component', () => {
  let component: Sampel2Component;
  let fixture: ComponentFixture<Sampel2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sampel2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sampel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
