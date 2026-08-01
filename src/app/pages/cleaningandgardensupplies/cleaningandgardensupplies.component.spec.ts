import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningandgardensuppliesComponent } from './cleaningandgardensupplies.component';

describe('CleaningandgardensuppliesComponent', () => {
  let component: CleaningandgardensuppliesComponent;
  let fixture: ComponentFixture<CleaningandgardensuppliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CleaningandgardensuppliesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CleaningandgardensuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
