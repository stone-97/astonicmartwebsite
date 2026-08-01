import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcretevibratorsComponent } from './concretevibrators.component';

describe('ConcretevibratorsComponent', () => {
  let component: ConcretevibratorsComponent;
  let fixture: ComponentFixture<ConcretevibratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcretevibratorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcretevibratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
