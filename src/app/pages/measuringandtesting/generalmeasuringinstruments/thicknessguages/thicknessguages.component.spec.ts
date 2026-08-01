import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThicknessguagesComponent } from './thicknessguages.component';

describe('ThicknessguagesComponent', () => {
  let component: ThicknessguagesComponent;
  let fixture: ComponentFixture<ThicknessguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThicknessguagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThicknessguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
