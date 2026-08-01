import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressurekitsComponent } from './pressurekits.component';

describe('PressurekitsComponent', () => {
  let component: PressurekitsComponent;
  let fixture: ComponentFixture<PressurekitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PressurekitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PressurekitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
