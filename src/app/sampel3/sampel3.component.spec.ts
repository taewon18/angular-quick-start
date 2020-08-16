import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sampel3Component } from './sampel3.component';

describe('Sampel3Component', () => {
  let component: Sampel3Component;
  let fixture: ComponentFixture<Sampel3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sampel3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sampel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
