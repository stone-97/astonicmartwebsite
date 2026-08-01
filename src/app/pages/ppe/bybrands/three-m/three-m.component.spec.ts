import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeMComponent } from './three-m.component';

describe('ThreeMComponent', () => {
  let component: ThreeMComponent;
  let fixture: ComponentFixture<ThreeMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreeMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreeMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
