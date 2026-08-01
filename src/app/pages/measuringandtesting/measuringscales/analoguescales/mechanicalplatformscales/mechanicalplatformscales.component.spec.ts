import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalplatformscalesComponent } from './mechanicalplatformscales.component';

describe('MechanicalplatformscalesComponent', () => {
  let component: MechanicalplatformscalesComponent;
  let fixture: ComponentFixture<MechanicalplatformscalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MechanicalplatformscalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MechanicalplatformscalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
