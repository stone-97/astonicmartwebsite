import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricanglegrindersComponent } from './electricanglegrinders.component';

describe('ElectricanglegrindersComponent', () => {
  let component: ElectricanglegrindersComponent;
  let fixture: ComponentFixture<ElectricanglegrindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectricanglegrindersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricanglegrindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
