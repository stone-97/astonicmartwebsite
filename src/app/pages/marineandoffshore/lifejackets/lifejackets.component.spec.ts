import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifejacketsComponent } from './lifejackets.component';

describe('LifejacketsComponent', () => {
  let component: LifejacketsComponent;
  let fixture: ComponentFixture<LifejacketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LifejacketsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifejacketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
