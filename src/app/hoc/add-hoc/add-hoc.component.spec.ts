import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHocComponent } from './add-hoc.component';

describe('AddHocComponent', () => {
  let component: AddHocComponent;
  let fixture: ComponentFixture<AddHocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
