import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sampel1Component } from './sampel1.component';

describe('Sampel1Component', () => {
  let component: Sampel1Component;
  let fixture: ComponentFixture<Sampel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sampel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sampel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
