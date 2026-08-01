import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionequipmentComponent } from './constructionequipment.component';

describe('ConstructionequipmentComponent', () => {
  let component: ConstructionequipmentComponent;
  let fixture: ComponentFixture<ConstructionequipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConstructionequipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstructionequipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
