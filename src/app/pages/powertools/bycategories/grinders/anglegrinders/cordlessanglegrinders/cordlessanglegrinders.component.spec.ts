import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordlessanglegrindersComponent } from './cordlessanglegrinders.component';

describe('CordlessanglegrindersComponent', () => {
  let component: CordlessanglegrindersComponent;
  let fixture: ComponentFixture<CordlessanglegrindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CordlessanglegrindersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CordlessanglegrindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
