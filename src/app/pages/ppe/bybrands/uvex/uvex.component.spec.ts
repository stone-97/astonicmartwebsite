import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvexComponent } from './uvex.component';

describe('UvexComponent', () => {
  let component: UvexComponent;
  let fixture: ComponentFixture<UvexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UvexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UvexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
