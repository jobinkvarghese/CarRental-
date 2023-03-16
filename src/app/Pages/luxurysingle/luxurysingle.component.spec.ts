import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxurysingleComponent } from './luxurysingle.component';

describe('LuxurysingleComponent', () => {
  let component: LuxurysingleComponent;
  let fixture: ComponentFixture<LuxurysingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuxurysingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuxurysingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
