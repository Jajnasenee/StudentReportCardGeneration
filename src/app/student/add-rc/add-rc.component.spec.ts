import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRcComponent } from './add-rc.component';

describe('AddRcComponent', () => {
  let component: AddRcComponent;
  let fixture: ComponentFixture<AddRcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
