import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandApplicationStepperComponent } from './land-application-stepper.component';

describe('LandApplicationStepperComponent', () => {
  let component: LandApplicationStepperComponent;
  let fixture: ComponentFixture<LandApplicationStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandApplicationStepperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandApplicationStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
