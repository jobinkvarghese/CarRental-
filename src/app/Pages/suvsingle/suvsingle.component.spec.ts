import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuvsingleComponent } from './suvsingle.component';

describe('SuvsingleComponent', () => {
  let component: SuvsingleComponent;
  let fixture: ComponentFixture<SuvsingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuvsingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuvsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
