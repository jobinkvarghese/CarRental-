import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryComponent } from './luxury.component';

describe('LuxuryComponent', () => {
  let component: LuxuryComponent;
  let fixture: ComponentFixture<LuxuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuxuryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuxuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
