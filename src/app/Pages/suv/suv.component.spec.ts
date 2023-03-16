import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuvComponent } from './suv.component';

describe('SuvComponent', () => {
  let component: SuvComponent;
  let fixture: ComponentFixture<SuvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
