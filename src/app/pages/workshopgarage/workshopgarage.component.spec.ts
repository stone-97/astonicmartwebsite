import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopgarageComponent } from './workshopgarage.component';

describe('WorkshopgarageComponent', () => {
  let component: WorkshopgarageComponent;
  let fixture: ComponentFixture<WorkshopgarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkshopgarageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkshopgarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
