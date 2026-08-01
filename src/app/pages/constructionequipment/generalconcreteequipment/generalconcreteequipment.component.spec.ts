import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralconcreteequipmentComponent } from './generalconcreteequipment.component';

describe('GeneralconcreteequipmentComponent', () => {
  let component: GeneralconcreteequipmentComponent;
  let fixture: ComponentFixture<GeneralconcreteequipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralconcreteequipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralconcreteequipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
