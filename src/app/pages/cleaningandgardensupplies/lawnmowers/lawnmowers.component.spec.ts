import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawnmowersComponent } from './lawnmowers.component';

describe('LawnmowersComponent', () => {
  let component: LawnmowersComponent;
  let fixture: ComponentFixture<LawnmowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LawnmowersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LawnmowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
