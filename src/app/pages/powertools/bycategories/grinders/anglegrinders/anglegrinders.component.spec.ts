import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnglegrindersComponent } from './anglegrinders.component';

describe('AnglegrindersComponent', () => {
  let component: AnglegrindersComponent;
  let fixture: ComponentFixture<AnglegrindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnglegrindersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnglegrindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
