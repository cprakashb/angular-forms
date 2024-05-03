import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandsAppRootComponent } from './lands-app-root.component';

describe('LandsAppRootComponent', () => {
  let component: LandsAppRootComponent;
  let fixture: ComponentFixture<LandsAppRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandsAppRootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandsAppRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
