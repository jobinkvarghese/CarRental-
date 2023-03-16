import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomysingleComponent } from './economysingle.component';

describe('EconomysingleComponent', () => {
  let component: EconomysingleComponent;
  let fixture: ComponentFixture<EconomysingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomysingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomysingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
