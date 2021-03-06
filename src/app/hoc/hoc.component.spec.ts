import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HocComponent } from './hoc.component';

describe('HocComponent', () => {
  let component: HocComponent;
  let fixture: ComponentFixture<HocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
